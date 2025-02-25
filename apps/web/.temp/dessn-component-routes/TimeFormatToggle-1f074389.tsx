import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeFormatToggle } from '../../../../packages/features/bookings/components/TimeFormatToggle';
import { TimeFormat } from '@calcom/lib/timeFormat';
import { useTimePreferences } from '../../../../packages/features/bookings/lib';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Create mock implementations
const MockTimePreferences = () => {
  const [timeFormat, setTimeFormat] = React.useState(TimeFormat.TWELVE_HOUR);
  return {
    timeFormat,
    setTimeFormat: () => setTimeFormat(timeFormat === TimeFormat.TWELVE_HOUR ? TimeFormat.TWENTY_FOUR_HOUR : TimeFormat.TWELVE_HOUR)
  };
};

const MockLocale = () => ({
  t: (key: string) => key
});

// Override the hooks with mock implementations
const TimeFormatToggleWithMocks = (props: { customClassName?: string }) => {
  // Mock the required hooks
  const timePreferences = MockTimePreferences();
  const locale = MockLocale();

  return (
    <div>
      <TimeFormatToggle {...props} />
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    customClassName: {
      type: "string",
      value: "custom-class",
      label: "Custom Class Name",
    },
  });

  return <TimeFormatToggleWithMocks customClassName={state.customClassName.value} />;
}