import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';
import dayjs from '@calcom/dayjs';
import {
  DateRangePicker,
  Button,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Command,
  CommandList,
  CommandItem,
} from "@calcom/ui";

// Mock DateRangeFilter component
const MockDateRangeFilter = ({ column }) => {
  const [startDate, setStartDate] = useState(dayjs().startOf('day'));
  const [endDate, setEndDate] = useState(dayjs().endOf('day'));
  const [selectedPreset, setSelectedPreset] = useState({ value: 'custom', labelKey: 'Custom' });

  const PRESET_OPTIONS = [
    { value: 'custom', labelKey: 'Custom' },
    { value: 'tdy', labelKey: 'Today' },
    { value: 'w', labelKey: 'Last 7 days' },
    { value: 't', labelKey: 'Last 30 days' },
    { value: 'm', labelKey: 'Month to Date' },
    { value: 'y', labelKey: 'Year to Date' },
  ];

  const handleDateChange = ({ startDate: start, endDate: end }) => {
    if (start) setStartDate(dayjs(start));
    if (end) setEndDate(dayjs(end));
    setSelectedPreset({ value: 'custom', labelKey: 'Custom' });
  };

  const handlePresetChange = (value) => {
    let start, end;
    switch (value) {
      case 'tdy':
        start = dayjs().startOf('day');
        end = dayjs().endOf('day');
        break;
      case 'w':
        start = dayjs().subtract(1, 'week').startOf('day');
        end = dayjs().endOf('day');
        break;
      case 't':
        start = dayjs().subtract(30, 'day').startOf('day');
        end = dayjs().endOf('day');
        break;
      case 'm':
        start = dayjs().startOf('month');
        end = dayjs().endOf('day');
        break;
      case 'y':
        start = dayjs().startOf('year');
        end = dayjs().endOf('day');
        break;
      default:
        return;
    }
    setStartDate(start);
    setEndDate(end);
    setSelectedPreset(PRESET_OPTIONS.find(opt => opt.value === value));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button color="secondary" className="items-center capitalize" EndIcon="chevron-down">
          {selectedPreset.value === 'custom' ? (
            <span>
              {startDate.format('MMM DD, YYYY')} - {endDate.format('MMM DD, YYYY')}
            </span>
          ) : (
            <span>{selectedPreset.labelKey}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-fit p-0" align="end">
        <div className="border-subtle border-r">
          <DateRangePicker
            dates={{
              startDate: startDate.toDate(),
              endDate: endDate.toDate(),
            }}
            minDate={dayjs().subtract(2, 'year').toDate()}
            maxDate={dayjs().toDate()}
            disabled={false}
            onDatesChange={handleDateChange}
            withoutPopover={true}
          />
        </div>
        <Command className="w-40">
          <CommandList>
            {PRESET_OPTIONS.map((option) => (
              <CommandItem
                key={option.value}
                className={`cursor-pointer justify-between px-3 py-2 ${
                  selectedPreset.value === option.value ? 'bg-emphasis' : ''
                }`}
                onSelect={() => handlePresetChange(option.value)}>
                <span className="capitalize">{option.labelKey}</span>
                {selectedPreset.value === option.value && <Icon name="check" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "object",
      value: {
        id: "dateRange",
        title: "Date Range",
        type: ColumnFilterType.DATE_RANGE,
        icon: "calendar",
      },
      label: "Column",
    },
  });

  return (
    <div className="p-4">
      <MockDateRangeFilter
        column={state.column.value as Extract<FilterableColumn, { type: ColumnFilterType.DATE_RANGE }>}
      />
    </div>
  );
}