import React from 'react';
import { useParentState } from '../useIframeState';
import { AdminOrganizationNotificationEmail } from '../../../../packages/emails/src/templates/AdminOrganizationNotificationEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgSlug: {
      type: "string",
      value: "my-organization",
      label: "Organization Slug",
    },
    webappIPAddress: {
      type: "string",
      value: "192.168.1.1",
      label: "Webapp IP Address",
    },
  });

  const mockLanguage = (key: string, options?: Record<string, string>) => {
    const translations: Record<string, string> = {
      "admin_org_notification_email_subject": "New Organization Notification",
      "admin_org_notification_email_cta": "View Organizations",
      "admin_org_notification_email_title": "New Organization Created",
      "hi_admin": "Hi Admin",
      "admin_org_notification_email_body_part1": "An organization was created",
      "admin_org_notification_email_body_part2": "Or with CNAME record:",
      "admin_org_notification_email_body_part3": "Please configure accordingly.",
      "type": "Type",
      "name": "Name",
      "value": "Value",
    };

    return options ? translations[key].replace(/\{(\w+)\}/g, (_, k) => options[k] || '') : translations[key];
  };

  return (
    <AdminOrganizationNotificationEmail
      language={mockLanguage}
      orgSlug={state.orgSlug.value}
      webappIPAddress={state.webappIPAddress.value}
    />
  );
}