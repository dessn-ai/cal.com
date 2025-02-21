import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/AddToHomescreen';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    closeBanner: {
      type: "boolean",
      value: false,
      label: "Close Banner",
    },
  });

  return (
    <ImportedComponent />
  );
}