import React from 'react';
import { useParentState } from '../useIframeState';
import { AppsStatus } from '../../../../packages/emails/src/components/AppsStatus';

import { CalendarEvent, AppsStatus as AppsStatusType } from '@calcom/types/Calendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        appsStatus: [
          {
            appName: 'Google Calendar',
            type: 'calendar',
            success: 1,
            failures: 0,
            errors: [],
            warnings: ['Sync might be delayed']
          },
          {
            appName: 'Zoom',
            type: 'video',
            success: 0,
            failures: 1,
            errors: ['Failed to create meeting'],
            warnings: []
          }
        ]
      }),
      label: 'Calendar Event'
    }
  });

  const calEvent: CalendarEvent = JSON.parse(state.calEvent.value);

  const t = (key: string) => {
    const translations: Record<string, string> = {
      'apps_status': 'Apps Status'
    };
    return translations[key] || key;
  };

  return <AppsStatus calEvent={calEvent} t={t} />;
}