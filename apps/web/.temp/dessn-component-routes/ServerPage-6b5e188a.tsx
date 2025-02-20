import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/not-found';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: "string",
      value: "/example-path",
      label: "Pathname",
    },
    host: {
      type: "string",
      value: "example.com",
      label: "Host",
    },
    isInsights: {
      type: "boolean",
      value: false,
      label: "Is Insights Page",
    },
  });

  const mockHeaders = new Map();
  mockHeaders.set('x-pathname', state.pathname.value);
  mockHeaders.set('x-forwarded-host', state.host.value);

  return (
    <ImportedComponent />
  );
}