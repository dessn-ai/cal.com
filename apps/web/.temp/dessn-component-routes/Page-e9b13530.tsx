import React from 'react';
import { useParentState } from '../useIframeState';

// Create mock components directly
const Button = ({ children, href }: { children: React.ReactNode; href?: string }) => (
  <button onClick={() => console.log('Button clicked')}>{children}</button>
);

const SettingsHeader = ({ children, title, description, CTA }: any) => (
  <div className="settings-header">
    <h1>{title}</h1>
    <p>{description}</p>
    {CTA}
    {children}
  </div>
);

const UsersListingView = () => <div>Users Listing View Mock</div>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Create a mock session
  const mockSession = {
    user: {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      name: 'Test User',
    },
  };

  // Create mock context values
  const mockContextValues = {
    t: (key: string) => key,
    session: mockSession,
    trpc: {
      viewer: {
        users: {
          list: {
            useInfiniteQuery: () => ({
              data: { pages: [] },
              fetchNextPage: () => {},
              hasNextPage: false,
              isLoading: false,
            }),
          },
        },
      },
    },
  };

  try {
    // Assign mocks to window/global
    Object.assign(window, {
      Button,
      SettingsHeader,
      UsersListingView,
      ...mockContextValues,
    });

    // Lazy load the component
    const ImportedComponent = React.lazy(() => 
      import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/users/page')
        .catch(error => {
          console.error('Failed to load component:', error);
          return { default: () => <div>Error loading component</div> };
        })
    );

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: '20px' }}>
          <ImportedComponent />
        </div>
      </React.Suspense>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <div>Error: Failed to render component</div>;
  }
}