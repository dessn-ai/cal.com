import React from 'react';
import { useParentState } from '../useIframeState';
import { Segment } from '../../../../packages/features/Segment';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    queryValue: {
      type: "string",
      value: JSON.stringify({
        type: "group",
        id: "root",
        children1: {
          "0": {
            type: "rule",
            properties: {
              field: "name",
              operator: "equal",
              value: ["John"],
              valueSrc: ["value"],
              valueType: ["text"],
            },
          },
        },
      }),
      label: "Query Value",
    },
  });

  const onQueryValueChange = ({ queryValue }) => {
    setState("queryValue", JSON.stringify(queryValue));
  };

  return (
    <Segment
      teamId={state.teamId.value}
      queryValue={JSON.parse(state.queryValue.value)}
      onQueryValueChange={onQueryValueChange}
      className="w-full"
    />
  );
}