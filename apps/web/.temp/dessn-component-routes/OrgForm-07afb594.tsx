import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/AdminOrgEditPage';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
    name: {
      type: "string",
      value: "Example Organization",
      label: "Organization Name",
    },
    slug: {
      type: "string",
      value: "example-org",
      label: "Organization Slug",
    },
    orgAutoAcceptEmail: {
      type: "string",
      value: "example.com",
      label: "Auto-accept Email Domain",
    },
  });

  const org = {
    id: state.id.value,
    name: state.name.value,
    slug: state.slug.value,
    organizationSettings: {
      orgAutoAcceptEmail: state.orgAutoAcceptEmail.value,
    },
  };

  return <ImportedComponent org={org} />;
}