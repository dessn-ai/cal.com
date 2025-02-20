import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/404';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    pathname: {
      type: "string",
      value: "/some-non-existent-page",
      label: "Pathname",
    },
  });

  return (
    <ImportedComponent />
  );
}