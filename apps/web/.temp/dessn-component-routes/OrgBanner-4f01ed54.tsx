import React from 'react';
import { useParentState } from '../useIframeState';

// Simple classNames utility for preview
const classNames = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Preview-specific version of OrgBanner that uses regular img tag
function PreviewOrgBanner({
  alt,
  width = 1500,
  height = 500,
  imageSrc,
  className,
  fallback,
  "data-testid": dataTestId
}: {
  alt: string;
  width?: number;
  height?: number;
  imageSrc?: string | null;
  className?: string;
  fallback?: React.ReactNode;
  "data-testid"?: string;
}) {
  if (!imageSrc) {
    return <div className={classNames("bg-gray-200", className)}>{fallback}</div>;
  }
  
  return (
    <img
      data-testid={dataTestId}
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}

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
      value: "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
      label: "Image Source",
    },
    className: {
      type: "string",
      value: "w-full h-auto",
      label: "CSS Class",
    },
  });

  return (
    <PreviewOrgBanner
      alt={state.alt.value}
      width={state.width.value}
      height={state.height.value}
      imageSrc={state.imageSrc.value}
      className={state.className.value}
      fallback={<div>Fallback content</div>}
    />
  );
}