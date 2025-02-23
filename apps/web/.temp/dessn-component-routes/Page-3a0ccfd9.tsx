import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(settings-layout)/my-account/conferencing/page';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Conferencing",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Manage your conferencing apps",
      label: "Description",
    },
    add: {
      type: "string",
      value: "Add",
      label: "Add Button Text",
    },
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => state[key as keyof typeof state]?.value || key;

  // Mock the ConferencingAppsViewWebWrapper component
  const MockConferencingAppsViewWebWrapper = ({ title, description, add }: { title: string, description: string, add: string }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{add}</button>
    </div>
  );

  return (
    <ImportedComponent
      getTranslate={mockGetTranslate}
      ConferencingAppsViewWebWrapper={MockConferencingAppsViewWebWrapper}
    />
  );
}