import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ui/SettingInputContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Setting Label",
      label: "Label",
    },
    htmlFor: {
      type: "string",
      value: "setting-input",
      label: "HTML For",
    },
  });

  const MockInput = () => <input type="text" id={state.htmlFor.value} placeholder="Input placeholder" />;
  const MockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );

  return (
    <ImportedComponent
      Input={<MockInput />}
      Icon={MockIcon}
      label={state.label.value}
      htmlFor={state.htmlFor.value}
    />
  );
}