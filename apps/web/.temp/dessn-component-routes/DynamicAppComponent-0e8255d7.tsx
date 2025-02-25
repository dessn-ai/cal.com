import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/DynamicAppComponent';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    componentMap: {
      type: "object",
      value: {},
      label: "Component Map",
    },
    slug: {
      type: "string",
      value: "example-slug",
      label: "Slug",
    },
    appData: {
      type: "object",
      value: {},
      label: "App Data",
    },
    route: {
      type: "object",
      value: {
        id: "example-id",
        action: {
          type: "exampleType",
          value: "exampleValue",
        },
        queryValue: {
          type: "group",
          id: "example-query-id",
        },
      },
      label: "Route",
    },
    wrapperClassName: {
      type: "string",
      value: "example-wrapper-class",
      label: "Wrapper Class Name",
    },
  });

  const setAttributeRoutingConfig = (id: string, attributeRoutingConfig: Partial<{
    salesforce?: {
      rrSkipToAccountLookupField?: boolean;
      rrSKipToAccountLookupFieldName?: string;
    };
    skipContactOwner?: boolean;
  }>) => {
    console.log("setAttributeRoutingConfig called with:", id, attributeRoutingConfig);
  };

  return (
    <ImportedComponent
      componentMap={state.componentMap.value}
      slug={state.slug.value}
      appData={state.appData.value}
      route={state.route.value}
      setAttributeRoutingConfig={setAttributeRoutingConfig}
      wrapperClassName={state.wrapperClassName.value}
    />
  );
}