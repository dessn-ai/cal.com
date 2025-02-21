import React from 'react';
import { useParentState } from '../useIframeState';
import { TimeFormatToggle } from '../../../../packages/features/bookings/components/TimeFormatToggle';

import { TimeFormat } from '@calcom/lib/timeFormat';
import { useTimePreferences } from '../../../../packages/features/bookings/lib';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Mock the hooks
const mockUseTimePreferences = () => ({
  timeFormat: TimeFormat.TWELVE_HOUR,
  setTimeFormat: () => {},
});

const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Override the hooks
React.useState = () => [TimeFormat.TWELVE_HOUR, () => {}] as const;
(useTimePreferences as jest.Mock) = mockUseTimePreferences;
(useLocale as jest.Mock) = mockUseLocale;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    customClassName: {
      type: "string",
      value: "custom-class",
      label: "Custom Class Name",
    },
  });

  return <TimeFormatToggle customClassName={state.customClassName.value} />;
}