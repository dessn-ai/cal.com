import React from 'react';
import { useParentState } from '../useIframeState';
import { InstantBooking } from '../../../../packages/features/bookings/Booker/components/InstantBooking';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onConnectNow: {
      type: "string",
      value: "() => console.log('Connect Now clicked')",
      label: "onConnectNow Function",
    },
    entityName: {
      type: "string",
      value: "Cal.com",
      label: "Entity Name",
    },
    entityOrgSlug: {
      type: "string",
      value: "calcom",
      label: "Entity Org Slug",
    },
    entityLogoUrl: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Entity Logo URL",
    },
    schedulingType: {
      type: "string",
      value: "COLLECTIVE",
      label: "Scheduling Type",
    },
    userName1: {
      type: "string",
      value: "John Doe",
      label: "User 1 Name",
    },
    userUsername1: {
      type: "string",
      value: "johndoe",
      label: "User 1 Username",
    },
    userAvatarUrl1: {
      type: "string",
      value: "https://example.com/avatar1.png",
      label: "User 1 Avatar URL",
    },
    userBookerUrl1: {
      type: "string",
      value: "https://cal.com/johndoe",
      label: "User 1 Booker URL",
    },
    userName2: {
      type: "string",
      value: "Jane Smith",
      label: "User 2 Name",
    },
    userUsername2: {
      type: "string",
      value: "janesmith",
      label: "User 2 Username",
    },
    userAvatarUrl2: {
      type: "string",
      value: "https://example.com/avatar2.png",
      label: "User 2 Avatar URL",
    },
    userBookerUrl2: {
      type: "string",
      value: "https://cal.com/janesmith",
      label: "User 2 Booker URL",
    },
  });

  const event = {
    entity: {
      name: state.entityName.value,
      orgSlug: state.entityOrgSlug.value,
      logoUrl: state.entityLogoUrl.value,
    },
    schedulingType: state.schedulingType.value,
    subsetOfUsers: [
      {
        name: state.userName1.value,
        username: state.userUsername1.value,
        avatarUrl: state.userAvatarUrl1.value,
        bookerUrl: state.userBookerUrl1.value,
      },
      {
        name: state.userName2.value,
        username: state.userUsername2.value,
        avatarUrl: state.userAvatarUrl2.value,
        bookerUrl: state.userBookerUrl2.value,
      },
    ],
  };

  return (
    <InstantBooking
      onConnectNow={() => eval(state.onConnectNow.value)}
      event={event}
    />
  );
}