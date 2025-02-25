import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/EnterprisePage';

// Mock translation function
const mockT = (key: string) => key;
const mockUseLocale = () => ({ t: mockT });

// Mock the useLocale hook
jest.mock("@calcom/lib/hooks/useLocale", () => ({
  useLocale: mockUseLocale
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    heading: {
      type: "string",
      value: "Enterprise",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Enterprise Description",
      label: "Subtitle",
    },
    withoutSeo: {
      type: "boolean",
      value: true,
      label: "Without SEO",
    },
  });

  return (
    <div className="bg-white">
      <ImportedComponent 
        heading={state.heading.value}
        subtitle={state.subtitle.value}
        withoutSeo={state.withoutSeo.value}
      />
    </div>
  );
}