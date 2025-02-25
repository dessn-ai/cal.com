import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/components/TeamInviteFromOrg';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedEmails: {
      type: "string",
      value: "",
      label: "Selected Emails",
    },
    orgMembers: {
      type: "string",
      value: JSON.stringify([
        {
          user: {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            avatarUrl: "https://example.com/avatar1.jpg",
          },
        },
        {
          user: {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            avatarUrl: "https://example.com/avatar2.jpg",
          },
        },
      ]),
      label: "Organization Members",
    },
  });

  const handleOnChecked = (usersEmail: string) => {
    const currentEmails = state.selectedEmails.value ? state.selectedEmails.value.split(',') : [];
    const updatedEmails = currentEmails.includes(usersEmail)
      ? currentEmails.filter(email => email !== usersEmail)
      : [...currentEmails, usersEmail];
    setState('selectedEmails', updatedEmails.join(','));
  };

  return (
    <ImportedComponent
      selectedEmails={state.selectedEmails.value}
      handleOnChecked={handleOnChecked}
      orgMembers={JSON.parse(state.orgMembers.value)}
    />
  );
}