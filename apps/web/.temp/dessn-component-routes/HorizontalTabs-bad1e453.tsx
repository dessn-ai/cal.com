import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/navigation/tabs/HorizontalTabs';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    tabs: {
      type: "string",
      value: JSON.stringify([
        { name: "Tab 1", href: "#tab1" },
        { name: "Tab 2", href: "#tab2" },
        { name: "Tab 3", href: "#tab3" }
      ]),
      label: "Tabs",
    },
    linkShallow: {
      type: "boolean",
      value: false,
      label: "Link Shallow",
    },
    linkScroll: {
      type: "boolean",
      value: false,
      label: "Link Scroll",
    },
  });

  return (
    <ImportedComponent
      tabs={JSON.parse(state.tabs.value)}
      linkShallow={state.linkShallow.value}
      linkScroll={state.linkScroll.value}
    />
  );
}