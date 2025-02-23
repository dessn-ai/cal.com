import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { ShellMainAppDir } from '../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir';

// Mock providers
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock the imported component to avoid dynamic import issues
const MockImportedComponent = ({ getTranslate }: { getTranslate: any }) => {
  return (
    <div>
      <h2>Availability Page Content</h2>
      <p>This is a mock of the availability page component</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
    <Suspense fallback={<div>Loading...</div>}>
      <MockProvider>
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
                    <MockImportedComponent getTranslate={mockGetTranslate} />
                  </ShellMainAppDir>
                </MockProvider>
              </MockProvider>
            </MockProvider>
          </MockProvider>
        </MockProvider>
      </MockProvider>
    </Suspense>
  );
}