import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/other-team-listing-view';

import { I18nProvider } from '@calcom/features/i18n';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <I18nProvider>
      <ImportedComponent />
    </I18nProvider>
  );
}