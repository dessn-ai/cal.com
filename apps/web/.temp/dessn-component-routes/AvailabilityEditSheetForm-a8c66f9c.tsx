import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilityEditSheetForm } from '../../../../packages/features/timezone-buddy/components/AvailabilityEditSheet';
import { FormProvider, useForm } from 'react-hook-form';

// Mock Jotai Provider
const JotaiProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock data table hooks
const mockUseDataTable = () => ({
  selectedRows: new Set(),
  setSelectedRows: () => {},
  data: [],
  setData: () => {},
  page: 1,
  setPage: () => {},
  pageSize: 10,
  setPageSize: () => {},
  sorting: [],
  setSorting: () => {},
  columnFilters: [],
  setColumnFilters: () => {},
  globalFilter: "",
  setGlobalFilter: () => {},
  rowSelection: {},
  setRowSelection: () => {},
  tableState: {
    pagination: {
      pageIndex: 0,
      pageSize: 10,
    },
    sorting: [],
    columnFilters: [],
    globalFilter: "",
    rowSelection: {},
  },
});

const mockUseFilterValue = () => ({
  value: "",
  setValue: () => {},
});

// Add mocks to global scope
if (typeof global !== 'undefined') {
  (global as any)['@calcom/features/data-table/hooks/useDataTable'] = mockUseDataTable;
  (global as any)['@calcom/features/data-table/hooks/useFilterValue'] = mockUseFilterValue;
  (global as any)['@calcom/trpc/react/hooks/useMeQuery'] = () => ({
    data: {
      timeFormat: 12,
      name: "John Doe",
      weekStart: 0,
    },
  });
  (global as any).trpc = {
    useUtils: () => ({
      viewer: {
        availability: {
          listTeam: {
            invalidate: async () => {},
          },
        },
      },
    }),
    viewer: {
      teams: {
        hasEditPermissionForUser: {
          useQuery: () => ({
            data: true,
            isPending: false,
          }),
        },
      },
      availability: {
        schedule: {
          update: {
            useMutation: () => ({
              mutate: async () => {},
              isPending: false,
            }),
          },
        },
      },
    },
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    selectedUserId: {
      type: "number",
      value: 1,
      label: "Selected User ID",
    },
    selectedUserUsername: {
      type: "string",
      value: "JohnDoe",
      label: "Selected User Username",
    },
  });

  const defaultTimeRange = {
    start: new Date("2024-01-01T09:00:00"),
    end: new Date("2024-01-01T17:00:00"),
  };

  const defaultSchedule = Array(7).fill([]).map((_, index) => {
    // Monday to Friday (1-5) get working hours, weekends get empty arrays
    return index >= 1 && index <= 5 ? [defaultTimeRange] : [];
  });

  const form = useForm({
    defaultValues: {
      id: 1,
      name: "Default Schedule",
      timeZone: "America/New_York",
      availability: [
        {
          days: [1, 2, 3, 4, 5],
          startTime: "09:00:00",
          endTime: "17:00:00",
        }
      ],
      dateOverrides: [],
      workingHours: [
        {
          days: [1, 2, 3, 4, 5],
          startTime: "09:00:00",
          endTime: "17:00:00",
        }
      ],
      schedule: defaultSchedule,
      hasDefaultSchedule: true,
      isDefault: true,
      isManaged: false,
      readOnly: false,
      isLastSchedule: false,
    },
  });

  const mockSelectedUser = {
    id: state.selectedUserId.value,
    username: state.selectedUserUsername.value,
    name: "John Doe",
    organizationId: 1,
    avatarUrl: null,
    email: "john@example.com",
    timeZone: "America/New_York",
    role: "MEMBER",
    defaultScheduleId: 1,
    dateRanges: [],
    profile: {
      id: state.selectedUserId.value,
      upId: "123",
      username: state.selectedUserUsername.value,
      organizationId: null,
      organization: null,
    },
  };

  return (
    <JotaiProvider>
      <FormProvider {...form}>
        <AvailabilityEditSheetForm
          open={state.open.value}
          onOpenChange={(open) => setState("open", open)}
          selectedUser={mockSelectedUser}
          data={form.getValues()}
          isPending={false}
        />
      </FormProvider>
    </JotaiProvider>
  );
}

// Add Jotai mock to global scope
if (typeof global !== 'undefined') {
  (global as any).jotai = {
    Provider: JotaiProvider,
  };
}