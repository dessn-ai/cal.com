import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/workflows/components/WorkflowListPage';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    workflows: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Sample Workflow",
          steps: [
            {
              action: "EMAIL_HOST",
              sendTo: "test@example.com",
              template: "REMINDER",
              reminderBody: "This is a reminder",
              emailSubject: "Reminder Subject",
              id: 1,
              sender: "sender@example.com",
              includeCalendarEvent: true,
              numberVerificationPending: false,
              numberRequired: false
            }
          ],
          trigger: "BEFORE_EVENT",
          time: 24,
          timeUnit: "HOURS",
          activeOn: [
            {
              eventType: {
                id: 1,
                title: "Sample Event",
                parentId: null,
                _count: {
                  children: 0
                }
              }
            }
          ],
          team: {
            id: 1,
            name: "Sample Team",
            members: [],
            slug: "sample-team",
            logo: null
          },
          isActiveOnAll: false,
          readOnly: false,
          isOrg: false
        }
      ]),
      label: "Workflows"
    }
  });

  const parsedWorkflows = React.useMemo(() => {
    try {
      return JSON.parse(state.workflows.value);
    } catch (error) {
      console.error("Failed to parse workflows:", error);
      return [];
    }
  }, [state.workflows.value]);

  return <ImportedComponent workflows={parsedWorkflows} />;
}