import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/weather_in_your_calendar/components/AppSettingsInterface';

import { useLocale } from "@calcom/lib/hooks/useLocale";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    location: {
      type: "string",
      value: "San Francisco",
      label: "Location",
    },
  });

  const { t } = useLocale();

  return (
    <ImportedComponent />
  );
}