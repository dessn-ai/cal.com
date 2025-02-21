import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/admin/AdminOrgEditPage';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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

  const form = useForm({
    defaultValues: {
      name: state.name.value,
      slug: state.slug.value,
      organizationSettings: {
        orgAutoAcceptEmail: state.orgAutoAcceptEmail.value,
      },
    },
  });

  const org = {
    id: "preview-org-id",
    name: state.name.value,
    slug: state.slug.value,
    organizationSettings: {
      orgAutoAcceptEmail: state.orgAutoAcceptEmail.value,
    },
  };

  return <ImportedComponent org={org} />;
}