import React from 'react';
import { useParentState } from '../useIframeState';
import { MembershipRole } from '@calcom/prisma/enums';

// Mock version of CreateEventTypeDialog that doesn't use the OrgBranding hook
const MockCreateEventTypeDialog = ({ profileOptions }) => {
  return (
    <div className="mock-dialog">
      <h2>Create Event Type</h2>
      <div className="profile-options">
        {profileOptions.map((option, index) => (
          <div key={index} className="profile-option">
            <img src={option.image} alt={option.label} />
            <span>{option.label}</span>
            <span>{option.membershipRole}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    profileOptions: {
      type: 'string',
      value: JSON.stringify([
        {
          teamId: 1,
          label: 'Team A',
          image: 'https://example.com/team-a.jpg',
          membershipRole: MembershipRole.MEMBER,
        },
        {
          teamId: null,
          label: 'Personal',
          image: 'https://example.com/personal.jpg',
          membershipRole: null,
        },
        {
          teamId: 2,
          label: 'Team B',
          image: 'https://example.com/team-b.jpg',
          membershipRole: MembershipRole.ADMIN,
        },
      ]),
      label: 'Profile Options',
    },
  });

  const profileOptions = JSON.parse(state.profileOptions.value);

  return (
    <div>
      <MockCreateEventTypeDialog profileOptions={profileOptions} />
    </div>
  );
}