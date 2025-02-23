import React from 'react';
import { useParentState } from '../useIframeState';
import { AppDependencyComponent } from '../../../../packages/app-store/components';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appName: {
      type: "string",
      value: "Example App",
      label: "App Name",
    },
    dependencyData: {
      type: "string",
      value: JSON.stringify([
        { name: "Dependency 1", slug: "dep-1", installed: true },
        { name: "Dependency 2", slug: "dep-2", installed: false },
      ]),
      label: "Dependency Data",
    },
  });

  const parsedDependencyData = React.useMemo(() => {
    try {
      return JSON.parse(state.dependencyData.value);
    } catch (error) {
      console.error("Failed to parse dependency data:", error);
      return undefined;
    }
  }, [state.dependencyData.value]);

  return (
    <AppDependencyComponent
      appName={state.appName.value}
      dependencyData={parsedDependencyData}
    />
  );
}