import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormResponsesDownload } from '../../../../packages/features/insights/filters/Download/RoutingFormResponsesDownload';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';
import { Button } from '@calcom/ui';
import { useLocale } from '@calcom/lib/hooks/useLocale';

// Create a simplified version of the component that doesn't rely on context
const SafeRoutingFormResponsesDownload = ({ sorting }) => {
  const { t } = useLocale();

  return (
    <Button
      EndIcon="file-down"
      color="secondary"
      className="self-end sm:self-baseline"
      onClick={() => {
        console.log('Download clicked');
      }}>
      {t("download")}
    </Button>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    sorting: {
      type: "string",
      value: JSON.stringify([{ id: 'name', desc: false }]),
      label: "Sorting",
    },
  });

  const sorting = JSON.parse(state.sorting.value);

  return (
    <InsightsOrgTeamsProvider>
      <SafeRoutingFormResponsesDownload sorting={sorting} />
    </InsightsOrgTeamsProvider>
  );
}