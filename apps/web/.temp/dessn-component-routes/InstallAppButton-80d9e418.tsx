import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/exchange2016calendar/components/InstallAppButton';

import useAddAppMutation from '../../../../packages/app-store/_utils/useAddAppMutation';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disableInstall: {
      type: "boolean",
      value: false,
      label: "Disable Install",
    },
  });

  const mutation = useAddAppMutation("exchange2016_calendar");

  return (
    <ImportedComponent
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.loading || state.disableInstall.value}
        >
          {renderProps.loading ? 'Installing...' : 'Install App'}
        </button>
      )}
      onChanged={() => console.log('App installation status changed')}
      disableInstall={state.disableInstall.value}
    />
  );
}