import React from 'react';
import { useParentState } from '../useIframeState';
import { DisabledAppEmail } from '../../../../packages/emails/src/templates/DisabledAppEmail';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appName: {
      type: "string",
      value: "Calendar App",
      label: "App Name",
    },
    appType: {
      type: "dropdown",
      value: "calendar",
      options: ["payment", "video", "calendar", "other"],
      label: "App Type",
    },
    title: {
      type: "string",
      value: "My Event Type",
      label: "Event Type Title",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  const mockT = (key: string, params?: Record<string, string>) => {
    // Create a simple translation mapping
    const translations: Record<string, string> = {
      "app_disabled": "App {{appName}} has been disabled",
      "disabled_app_affects_event_type": "{{appName}} has been disabled for event type {{eventType}}",
      "payment_disabled_still_able_to_book": "Payment has been disabled but booking is still available",
      "app_disabled_with_event_type": "{{appName}} has been disabled for event type {{title}}",
      "app_disabled_video": "Video app {{appName}} has been disabled",
      "admin_has_disabled": "Admin has disabled {{appName}}",
      "disabled_calendar": "Calendar integration is currently disabled",
      "edit_event_type": "Edit Event Type",
      "navigate_installed_apps": "Go to Installed Apps"
    };

    let text = translations[key] || key;
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{{${paramKey}}}`, paramValue);
      });
    }
    return text;
  };

  return (
    <DisabledAppEmail
      appName={state.appName.value}
      appType={[state.appType.value]}
      t={mockT}
      title={state.title.value}
      eventTypeId={state.eventTypeId.value}
    />
  );
}