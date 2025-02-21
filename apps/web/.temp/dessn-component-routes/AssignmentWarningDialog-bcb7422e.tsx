import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/dialogs/AssignmentWarningDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenAssignmentWarnDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
    pendingRoute: {
      type: "string",
      value: "/some-route",
      label: "Pending Route",
    },
    id: {
      type: "number",
      value: 1,
      label: "ID",
    },
  });

  const leaveWithoutAssigningHosts = React.useRef(false);

  return (
    <ImportedComponent
      isOpenAssignmentWarnDialog={state.isOpenAssignmentWarnDialog.value}
      setIsOpenAssignmentWarnDialog={(value) => setState('isOpenAssignmentWarnDialog', value)}
      pendingRoute={state.pendingRoute.value}
      leaveWithoutAssigningHosts={leaveWithoutAssigningHosts}
      id={state.id.value}
    />
  );
}