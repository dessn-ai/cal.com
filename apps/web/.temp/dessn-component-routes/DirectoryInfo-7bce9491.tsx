import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/DirectoryInfo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    directory: {
      type: "string",
      value: JSON.stringify({
        scim: {
          endpoint: "https://example.com/scim/v2",
          secret: "your-scim-secret-token"
        }
      }),
      label: "Directory"
    }
  });

  const directory = JSON.parse(state.directory.value);

  return <ImportedComponent directory={directory} />;
}