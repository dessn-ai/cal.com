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
    // Simple translation mock that returns a descriptive string
    const translations: Record<string, string> = {
      "app_disabled": "App Disabled: {{appName}}",
      "disabled_app_affects_event_type": "The app {{appName}} affecting event type {{eventType}} has been disabled",
      "payment_disabled_still_able_to_book": "Payment has been disabled but booking is still available",
      "app_disabled_with_event_type": "The app {{appName}} for event type {{title}} has been disabled",
      "app_disabled_video": "Video app {{appName}} has been disabled",
      "admin_has_disabled": "Admin has disabled {{appName}}",
      "disabled_calendar": "Calendar has been disabled",
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