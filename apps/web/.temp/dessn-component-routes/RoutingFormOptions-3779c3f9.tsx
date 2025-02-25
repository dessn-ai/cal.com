import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/salesforce/components/RoutingFormOptions';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appData: {
      type: "string",
      value: JSON.stringify({ enabled: true }),
      label: "App Data",
    },
    routeId: {
      type: "string",
      value: "route1",
      label: "Route ID",
    },
    skipContactOwner: {
      type: "boolean",
      value: false,
      label: "Skip Contact Owner",
    },
    rrSkipToAccountLookupField: {
      type: "boolean",
      value: false,
      label: "Skip to Account Lookup Field",
    },
    rrSKipToAccountLookupFieldName: {
      type: "string",
      value: "",
      label: "Account Lookup Field Name",
    },
  });

  const route = {
    id: state.routeId.value,
    attributeRoutingConfig: {
      skipContactOwner: state.skipContactOwner.value,
      salesforce: {
        rrSkipToAccountLookupField: state.rrSkipToAccountLookupField.value,
        rrSKipToAccountLookupFieldName: state.rrSKipToAccountLookupFieldName.value,
      },
    },
    formFieldsQueryBuilderState: {
      tree: {},
      config: {},
    },
    attributesQueryBuilderState: null,
    fallbackAttributesQueryBuilderState: null,
  };

  const setAttributeRoutingConfig = (id: string, attributeRoutingConfig: any) => {
    console.log('setAttributeRoutingConfig called', id, attributeRoutingConfig);
    setState('skipContactOwner', attributeRoutingConfig.skipContactOwner);
    setState('rrSkipToAccountLookupField', attributeRoutingConfig.salesforce?.rrSkipToAccountLookupField);
    setState('rrSKipToAccountLookupFieldName', attributeRoutingConfig.salesforce?.rrSKipToAccountLookupFieldName);
  };

  return (
    <ImportedComponent
      appData={JSON.parse(state.appData.value)}
      route={route}
      setAttributeRoutingConfig={setAttributeRoutingConfig}
    />
  );
}