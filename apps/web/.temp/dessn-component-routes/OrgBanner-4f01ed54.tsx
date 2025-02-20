import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgBanner } from '../../../../packages/ui/components/organization-banner/OrgBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    alt: {
      type: "string",
      value: "Organization Banner",
      label: "Alt Text",
    },
    width: {
      type: "number",
      value: 1500,
      label: "Width",
    },
    height: {
      type: "number",
      value: 500,
      label: "Height",
    },
    imageSrc: {
      type: "string",
      value: "https://example.com/banner.jpg",
      label: "Image Source",
    },
    className: {
      type: "string",
      value: "w-full h-auto",
      label: "CSS Class",
    },
  });

  return (
    <OrgBanner
      alt={state.alt.value}
      width={state.width.value}
      height={state.height.value}
      imageSrc={state.imageSrc.value}
      className={state.className.value}
      fallback={<div>Fallback content</div>}
    />
  );
}