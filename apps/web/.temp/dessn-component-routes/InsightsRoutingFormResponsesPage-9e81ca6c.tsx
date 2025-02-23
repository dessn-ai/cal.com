import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/insights/insights-routing-view';

import { DataTableProvider } from "@calcom/features/data-table";
import { InsightsOrgTeamsProvider } from "@calcom/features/insights/context/InsightsOrgTeamsProvider";

// Mock I18nProvider to handle i18n dependencies
const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  // Since this component doesn't have any props, we don't need to use useParentState
  // However, we'll keep it here in case we need to add props in the future
  const [state, setState] = useParentState({});

  return (
    <I18nProvider>
      <DataTableProvider>
        <InsightsOrgTeamsProvider>
          <ImportedComponent />
        </InsightsOrgTeamsProvider>
      </DataTableProvider>
    </I18nProvider>
  );
}