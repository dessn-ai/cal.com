import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/router/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "string",
      value: JSON.stringify({
        name: "Sample Form",
        user: {
          metadata: {},
          id: 1,
          email: "user@example.com",
          username: "sampleuser",
          movedToProfileId: null,
          organization: { slug: "sample-org" },
          nonProfileUsername: null,
          profile: {
            organization: { slug: "sample-org" }
          }
        },
        team: {
          slug: "sample-team",
          metadata: {},
          parentId: null,
          parent: null
        },
        description: "A sample form description",
        id: "sample-id",
        settings: {},
        disabled: false,
        position: 1,
        fields: {},
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        teamId: null,
        routes: {},
        updatedById: null
      }),
      label: "Form Data"
    },
    message: {
      type: "string",
      value: "This is a sample message",
      label: "Message"
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed"
    }
  });

  const parsedForm = JSON.parse(state.form.value);

  return (
    <ImportedComponent
      form={parsedForm}
      message={state.message.value}
      isEmbed={state.isEmbed.value}
    />
  );
}