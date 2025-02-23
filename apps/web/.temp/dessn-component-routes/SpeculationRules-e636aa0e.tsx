import React from 'react';
import { useParentState } from '../useIframeState';
import { SpeculationRules } from '../../app/SpeculationRules';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    prefetchPathsOnHover: {
      type: "string",
      value: "/home,/about,/contact",
      label: "Prefetch Paths (comma-separated)",
    },
    prerenderPathsOnHover: {
      type: "string",
      value: "/dashboard,/profile",
      label: "Prerender Paths (comma-separated)",
    },
  });

  const prefetchPaths = state.prefetchPathsOnHover.value.split(',').map(path => path.trim());
  const prerenderPaths = state.prerenderPathsOnHover.value.split(',').map(path => path.trim());

  return (
    <SpeculationRules
      prefetchPathsOnHover={prefetchPaths}
      prerenderPathsOnHover={prerenderPaths}
    />
  );
}