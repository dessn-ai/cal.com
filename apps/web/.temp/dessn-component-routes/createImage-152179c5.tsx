import React from 'react';
import { useParentState } from '../useIframeState';
import { createImage } from '../../../../packages/ui/components/image-uploader/Common';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    imageUrl: {
      type: "string",
      value: "https://example.com/sample-image.jpg",
      label: "Image URL",
    },
  });

  const handleImageCreation = async () => {
    try {
      const image = await createImage(state.imageUrl.value);
      console.log('Image created successfully:', image);
    } catch (error) {
      console.error('Error creating image:', error);
    }
  };

  return (
    <div>
      <button onClick={handleImageCreation}>Create Image</button>
    </div>
  );
}