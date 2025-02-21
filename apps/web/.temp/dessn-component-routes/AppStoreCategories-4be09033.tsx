import React from 'react';
import { useParentState } from '../useIframeState';
import { AppStoreCategories } from '../../../../packages/ui/components/apps/Categories';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    categories: {
      type: "string",
      value: JSON.stringify([
        { name: "calendar", count: 5 },
        { name: "video", count: 3 },
        { name: "messaging", count: 4 },
        { name: "analytics", count: 2 },
        { name: "crm", count: 6 }
      ]),
      label: "Categories"
    }
  });

  const categories = JSON.parse(state.categories.value);

  return (
    <AppStoreCategories categories={categories} />
  );
}