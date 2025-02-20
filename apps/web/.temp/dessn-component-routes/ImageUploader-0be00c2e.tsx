import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/image-uploader/ImageUploader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "avatar-upload",
      label: "ID",
    },
    buttonMsg: {
      type: "string",
      value: "Upload Image",
      label: "Button Message",
    },
    buttonSize: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "lg"],
      label: "Button Size",
    },
    imageSrc: {
      type: "string",
      value: "",
      label: "Image Source",
    },
    target: {
      type: "string",
      value: "avatar",
      label: "Target",
    },
    triggerButtonColor: {
      type: "dropdown",
      value: "secondary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Trigger Button Color",
    },
    uploadInstruction: {
      type: "string",
      value: "Upload a square image",
      label: "Upload Instruction",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    testId: {
      type: "string",
      value: "avatar-uploader",
      label: "Test ID",
    },
  });

  const handleAvatarChange = (imageSrc: string) => {
    console.log("Avatar changed:", imageSrc);
    setState("imageSrc", imageSrc);
  };

  return (
    <ImportedComponent
      id={state.id.value}
      buttonMsg={state.buttonMsg.value}
      buttonSize={state.buttonSize.value}
      handleAvatarChange={handleAvatarChange}
      imageSrc={state.imageSrc.value}
      target={state.target.value}
      triggerButtonColor={state.triggerButtonColor.value}
      uploadInstruction={state.uploadInstruction.value}
      disabled={state.disabled.value}
      testId={state.testId.value}
    />
  );
}