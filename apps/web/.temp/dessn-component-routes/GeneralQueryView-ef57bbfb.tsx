import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/my-account/general-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    revalidatePage: {
      type: "string",
      value: "async function",
      label: "Revalidate Page Function",
    },
  });

  const revalidatePage = async () => {
    console.log("Revalidating page...");
    // This is a mock function. In a real scenario, this would actually revalidate the page.
  };

  return <ImportedComponent revalidatePage={revalidatePage} />;
}