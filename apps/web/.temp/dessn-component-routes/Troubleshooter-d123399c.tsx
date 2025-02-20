import React from 'react';
import { useParentState } from '../useIframeState';
import { Troubleshooter } from '../../../../packages/features/troubleshooter/Troubleshooter';

// Mock providers
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockSessionProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockFeatureProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockI18nextProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockQueryClientProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const Providers = ({ children }: { children: React.ReactNode }) => (
  <MockQueryClientProvider>
    <MockTRPCProvider>
      <MockSessionProvider>
        <MockI18nextProvider>
          <MockFeatureProvider>
            <MockTooltipProvider>
              {children}
            </MockTooltipProvider>
          </MockFeatureProvider>
        </MockI18nextProvider>
      </MockSessionProvider>
    </MockTRPCProvider>
  </MockQueryClientProvider>
);

export default function ComponentPreview() {
  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0, 0);
  
  const [state, setState] = useParentState({
    month: {
      type: "string",
      value: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`,
      label: "Month (YYYY-MM)",
    },
    selectedDate: {
      type: "string",
      value: currentDate.toISOString().split('T')[0],
      label: "Selected Date",
    },
  });

  const selectedDate = React.useMemo(() => {
    if (!state.selectedDate.value) return undefined;
    try {
      const [year, month, day] = state.selectedDate.value.split('-').map(Number);
      return new Date(year, month - 1, day, 12, 0, 0, 0);
    } catch {
      return undefined;
    }
  }, [state.selectedDate.value]);

  const troubleshooterProps = {
    month: state.month.value,
    selectedDate,
    events: [],
    isLoading: false,
    onDateSelect: () => {},
    onMonthChange: () => {},
  };

  return (
    <Providers>
      <div className="min-h-screen bg-white">
        <Troubleshooter {...troubleshooterProps} />
      </div>
    </Providers>
  );
}