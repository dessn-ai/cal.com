import React from 'react';
import { useParentState } from '../useIframeState';
import { ScreenShot } from '../../../../packages/lib/OgImages';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    image: {
      type: "string",
      value: "https://example.com/screenshot.png",
      label: "Screenshot Image URL",
    },
    fallbackImage: {
      type: "string",
      value: "https://example.com/fallback.png",
      label: "Fallback Image URL",
    },
  });

  return (
    <ScreenShot
      image={state.image.value}
      fallbackImage={state.fallbackImage.value}
    />
  );
}