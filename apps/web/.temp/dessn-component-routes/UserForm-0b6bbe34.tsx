import React from 'react';
import { useParentState } from '../useIframeState';
import { UserForm } from '../../../../packages/features/ee/users/components/UserForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
    email: {
      type: "string",
      value: "john@example.com",
      label: "Email",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    bio: {
      type: "string",
      value: "A short bio about John Doe",
      label: "Bio",
    },
    avatarUrl: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Avatar URL",
    },
    locale: {
      type: "dropdown",
      value: "en",
      options: ["en", "fr", "de", "es"],
      label: "Locale",
    },
    timeFormat: {
      type: "dropdown",
      value: "12",
      options: ["12", "24"],
      label: "Time Format",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    weekStart: {
      type: "dropdown",
      value: "Sunday",
      options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      label: "Week Start",
    },
    role: {
      type: "dropdown",
      value: "USER",
      options: ["USER", "ADMIN"],
      label: "Role",
    },
    identityProvider: {
      type: "dropdown",
      value: "CAL",
      options: ["CAL", "GOOGLE", "SAML"],
      label: "Identity Provider",
    },
  });

  const form = useForm();

  const handleSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <UserForm
      defaultValues={{
        name: state.name.value,
        email: state.email.value,
        username: state.username.value,
        bio: state.bio.value,
        avatarUrl: state.avatarUrl.value,
        locale: state.locale.value,
        timeFormat: parseInt(state.timeFormat.value),
        timeZone: state.timeZone.value,
        weekStart: state.weekStart.value,
        role: state.role.value,
        identityProvider: state.identityProvider.value,
      }}
      localeProp={state.locale.value}
      onSubmit={handleSubmit}
      submitLabel="Save"
    />
  );
}