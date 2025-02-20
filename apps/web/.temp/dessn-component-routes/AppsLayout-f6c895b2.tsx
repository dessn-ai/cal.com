import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/layouts/AppsLayout';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample content</div>",
      label: "Children",
    },
    actions: {
      type: "string",
      value: "(className) => <button className={className}>Action</button>",
      label: "Actions",
    },
    emptyStore: {
      type: "boolean",
      value: false,
      label: "Empty Store",
    },
  });

  const session = useSession();
  const router = useRouter();

  return (
    <ImportedComponent
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      actions={(className) => eval(state.actions.value)}
      emptyStore={state.emptyStore.value}
    />
  );
}