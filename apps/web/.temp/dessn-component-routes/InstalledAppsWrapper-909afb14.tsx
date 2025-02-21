import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/apps/installed/[category]/page';

import { AppCategories } from "@calcom/prisma/enums";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    category: {
      type: "dropdown",
      value: "calendar",
      options: Object.values(AppCategories),
      label: "Category",
    },
  });

  const mockParams = {
    category: state.category.value,
  };

  const mockSearchParams = {};

  return (
    <ImportedComponent
      params={mockParams}
      searchParams={mockSearchParams}
    />
  );
}