import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components and providers to avoid server-side dependencies
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock ShellMainAppDir component
const ShellMainAppDir = ({
  heading,
  subtitle,
  CTA,
  children
}: {
  heading: string;
  subtitle: string;
  CTA: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="shell-main">
      <div className="header">
        <h1>{heading}</h1>
        <p>{subtitle}</p>
        {CTA}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

// Mock ImportedComponent
const ImportedComponent = ({ getTranslate }: { getTranslate: () => (key: string) => string }) => {
  const translate = getTranslate();
  return (
    <div className="availability-page">
      <h2>{translate('availability')}</h2>
      <p>{translate('configure_availability')}</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    heading: {
      type: "string",
      value: "Availability",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Configure availability",
      label: "Subtitle",
    },
  });

  const mockGetTranslate = () => (key: string) => state[key as keyof typeof state]?.value || key;

  return (
    <div type="component">
      <MockProvider>
        <MockProvider>
          <MockProvider>
            <MockProvider>
              <MockProvider>
                <ShellMainAppDir
                  heading={state.heading.value}
                  subtitle={state.subtitle.value}
                  CTA={<div>Mock CTA</div>}
                >
                  <ImportedComponent getTranslate={mockGetTranslate} />
                </ShellMainAppDir>
              </MockProvider>
            </MockProvider>
          </MockProvider>
        </MockProvider>
      </MockProvider>
    </div>
  );
}