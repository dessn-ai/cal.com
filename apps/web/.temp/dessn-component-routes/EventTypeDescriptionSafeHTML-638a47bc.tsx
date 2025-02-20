import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/eventtype/EventTypeDescriptionSafeHTML';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    description: {
      type: "string",
      value: "This is a sample event description.",
      label: "Description",
    },
    descriptionAsSafeHTML: {
      type: "string",
      value: "<p>This is a <strong>sample</strong> event description with <em>HTML</em>.</p>",
      label: "Description as Safe HTML",
    },
  });

  const eventType = {
    description: state.description.value,
    descriptionAsSafeHTML: state.descriptionAsSafeHTML.value,
  };

  return <ImportedComponent eventType={eventType} />;
}