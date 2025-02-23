import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/layouts/InstalledAppsLayout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Installed Apps",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Manage your installed apps or change settings",
      label: "Description",
    },
  });

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );

  const AppCategoryNavigation = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );

  const MockPage = () => <div>Mock Page Content</div>;

  return (
    <ImportedComponent>
      <Shell title={state.title.value} description={state.description.value}>
        <AppCategoryNavigation baseURL="/apps/installed" containerClassname="min-w-0 w-full">
          <MockPage />
        </AppCategoryNavigation>
      </Shell>
    </ImportedComponent>
  );
}