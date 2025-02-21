import React from 'react';
import { useParentState } from '../useIframeState';
import { SkeletonText } from '../../../../packages/ui/components/skeleton/Skeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-32 h-4",
      label: "Class Name",
    },
    invisible: {
      type: "boolean",
      value: false,
      label: "Invisible",
    },
    style: {
      type: "string",
      value: '{ backgroundColor: "#f0f0f0" }',
      label: "Style (as JSON string)",
    },
  });

  const style = React.useMemo(() => {
    try {
      return JSON.parse(state.style.value);
    } catch {
      return {};
    }
  }, [state.style.value]);

  return (
    <SkeletonText
      className={state.className.value}
      invisible={state.invisible.value}
      style={style}
    />
  );
}