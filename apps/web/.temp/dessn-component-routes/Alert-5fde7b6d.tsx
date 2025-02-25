import React from 'react';
import { useParentState } from '../useIframeState';
import { Alert } from '../../../../packages/ui/components/alert/Alert';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Alert Title",
      label: "Title",
    },
    message: {
      type: "string",
      value: "This is an alert message.",
      label: "Message",
    },
    severity: {
      type: "dropdown",
      value: "info",
      options: ["warning", "error", "info", "neutral"],
      label: "Severity",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    iconClassName: {
      type: "string",
      value: "",
      label: "Icon Class Name",
    },
    customIconColor: {
      type: "string",
      value: "",
      label: "Custom Icon Color",
    },
  });

  return (
    <Alert
      title={state.title.value}
      message={state.message.value}
      severity={state.severity.value as "warning" | "error" | "info" | "neutral"}
      className={state.className.value}
      iconClassName={state.iconClassName.value}
      customIconColor={state.customIconColor.value}
    />
  );
}