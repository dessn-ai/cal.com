import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/installed/[category]/installed-category-view';
import { AppCategories } from '@calcom/prisma/enums';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    category: {
      type: "dropdown",
      value: AppCategories.calendar,
      options: Object.values(AppCategories),
      label: "App Category",
    },
  });

  return (
    <OrgBrandingProvider>
      <ImportedComponent category={state.category.value as AppCategories} />
    </OrgBrandingProvider>
  );
}