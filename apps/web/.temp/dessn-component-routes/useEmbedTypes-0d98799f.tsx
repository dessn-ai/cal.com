import React from 'react';
import { useParentState } from '../useIframeState';
import { useEmbedTypes } from '../../../../packages/features/embed/lib/hooks/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const embedTypes = useEmbedTypes();

  return (
    <div>
      {embedTypes.map((embedType, index) => (
        <div key={index}>
          <h3>{embedType.title}</h3>
          <p>{embedType.subtitle}</p>
          <div>{embedType.illustration}</div>
        </div>
      ))}
    </div>
  );
}