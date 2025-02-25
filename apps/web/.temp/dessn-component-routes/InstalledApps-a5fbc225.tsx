import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/installed/[category]/installed-category-view';

import { AppCategories } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    category: {
      type: "dropdown",
      value: AppCategories.calendar,
      options: Object.values(AppCategories),
      label: "App Category",
    },
  });

  return <ImportedComponent category={state.category.value as AppCategories} />;
}