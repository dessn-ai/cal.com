import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/navigation/tabs/VerticalTabs';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    tabs: {
      type: "string",
      value: JSON.stringify([
        { name: "Tab 1", href: "/tab1" },
        { name: "Tab 2", href: "/tab2" },
        { name: "Tab 3", href: "/tab3" }
      ]),
      label: "Tabs",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    sticky: {
      type: "boolean",
      value: false,
      label: "Sticky",
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
    itemClassname: {
      type: "string",
      value: "item-class",
      label: "Item Class Name",
    },
    iconClassName: {
      type: "string",
      value: "icon-class",
      label: "Icon Class Name",
    },
  });

  return (
    <ImportedComponent
      tabs={JSON.parse(state.tabs.value)}
      className={state.className.value}
      sticky={state.sticky.value}
      linkShallow={state.linkShallow.value}
      linkScroll={state.linkScroll.value}
      itemClassname={state.itemClassname.value}
      iconClassName={state.iconClassName.value}
    />
  );
}