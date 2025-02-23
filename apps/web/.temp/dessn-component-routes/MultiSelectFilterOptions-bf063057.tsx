import React, { createContext, useContext, useState } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';
import { useLocale } from '@calcom/lib/hooks/useLocale';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandSeparator,
  CommandGroup,
  Icon,
} from '@calcom/ui';

// Mock useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      search: 'Search',
      no_options_found: 'No options found',
      clear: 'Clear'
    };
    return translations[key] || key;
  }
});

// Create a DataTable context
const DataTableContext = createContext<{
  updateFilter: (columnId: string, filterValue: any) => void;
  removeFilter: (columnId: string) => void;
  state: { filters: Record<string, any> };
}>({
  updateFilter: () => {},
  removeFilter: () => {},
  state: { filters: {} },
});

// Create our own implementation of MultiSelectFilterOptions
const CustomMultiSelectFilterOptions = ({ column }) => {
  const { t } = mockUseLocale();
  const { updateFilter, removeFilter, state } = useContext(DataTableContext);
  const filterValue = state.filters[column.id] || { data: [] };

  return (
    <Command data-testid={`multi-select-options-${column.id}`}>
      <CommandInput placeholder={t('search')} />
      <CommandList>
        <CommandEmpty>{t('no_options_found')}</CommandEmpty>
        {column.options.map((option) => {
          if (!option) return null;
          const { label: optionLabel, value: optionValue } =
            typeof option === 'string' ? { label: option, value: option } : option;

          return (
            <CommandItem
              key={optionValue}
              onSelect={() => {
                const newFilterValue = filterValue.data.includes(optionValue)
                  ? filterValue.data.filter((value) => value !== optionValue)
                  : [...(filterValue.data || []), optionValue];
                updateFilter(column.id, { type: ColumnFilterType.MULTI_SELECT, data: newFilterValue });
              }}>
              <div
                className={`border-subtle mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
                  filterValue.data.includes(optionValue) ? 'bg-primary' : 'opacity-50'
                }`}>
                {filterValue.data.includes(optionValue) && (
                  <Icon name="check" className="text-primary-foreground h-4 w-4" />
                )}
              </div>
              {optionLabel}
            </CommandItem>
          );
        })}
      </CommandList>
      <CommandSeparator />
      <CommandGroup>
        <CommandItem
          onSelect={() => {
            removeFilter(column.id);
          }}
          className="w-full justify-center text-center">
          {t('clear')}
        </CommandItem>
      </CommandGroup>
    </Command>
  );
};

const MockProvider = ({ children }) => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const value = {
    updateFilter: (columnId: string, filterValue: any) => {
      setFilters((prev) => ({
        ...prev,
        [columnId]: filterValue,
      }));
    },
    removeFilter: (columnId: string) => {
      setFilters((prev) => {
        const newFilters = { ...prev };
        delete newFilters[columnId];
        return newFilters;
      });
    },
    state: {
      filters,
    },
  };

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "dropdown",
      value: "multi_select",
      options: ["multi_select"],
      label: "Column Type",
    },
    columnId: {
      type: "string",
      value: "example_column",
      label: "Column ID",
    },
    columnTitle: {
      type: "string",
      value: "Example Column",
      label: "Column Title",
    },
    columnIcon: {
      type: "dropdown",
      value: "filter",
      options: ["filter", "search", "calendar", "user", "settings"],
      label: "Column Icon",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    icon: state.columnIcon.value,
    type: ColumnFilterType.MULTI_SELECT,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  };

  return (
    <MockProvider>
      <div className="p-4">
        <CustomMultiSelectFilterOptions column={column} />
      </div>
    </MockProvider>
  );
}