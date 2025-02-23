import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/image-uploader/BannerUploader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "banner-uploader",
      label: "ID",
    },
    buttonMsg: {
      type: "string",
      value: "Upload Banner",
      label: "Button Message",
    },
    imageSrc: {
      type: "string",
      value: "",
      label: "Image Source",
    },
    target: {
      type: "string",
      value: "banner",
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
      value: "Upload a 16:9 image",
      label: "Upload Instruction",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    height: {
      type: "number",
      value: 200,
      label: "Height",
    },
    width: {
      type: "number",
      value: 900,
      label: "Width",
    },
  });

  const handleAvatarChange = (imageSrc: string) => {
    console.log("Avatar changed:", imageSrc);
  };

  return (
    <ImportedComponent
      id={state.id.value}
      buttonMsg={state.buttonMsg.value}
      handleAvatarChange={handleAvatarChange}
      imageSrc={state.imageSrc.value}
      target={state.target.value}
      triggerButtonColor={state.triggerButtonColor.value as any}
      uploadInstruction={state.uploadInstruction.value}
      disabled={state.disabled.value}
      height={state.height.value}
      width={state.width.value}
    />
  );
}