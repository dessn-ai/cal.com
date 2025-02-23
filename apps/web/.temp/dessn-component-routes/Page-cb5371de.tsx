import React from 'react';
import { useParentState } from '../useIframeState';
import PageWrapper from "@components/PageWrapper";

// Mock the organization branding context
const OrgBrandingContext = React.createContext({
  theme: null,
  logo: null,
  brandColor: null,
  darkBrandColor: null,
  organizationName: "Default Organization",
  isLoading: false,
});

// Organization Branding Provider
const OrgBrandingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <OrgBrandingContext.Provider
      value={{
        theme: null,
        logo: null,
        brandColor: null,
        darkBrandColor: null,
        organizationName: "Default Organization",
        isLoading: false,
      }}>
      {children}
    </OrgBrandingContext.Provider>
  );
};

// Simple CreateNewTeamView component
const CreateNewTeamView = () => {
  return (
    <div className="mx-auto max-w-4xl py-8">
      <div className="mb-8">
        <h1 className="mb-1 text-3xl font-bold">Create New Team</h1>
        <p className="text-sm text-gray-600">Create a new team to collaborate with users.</p>
      </div>
      
      <div className="mt-8 rounded-md border bg-white p-8">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="text"
              name="teamName"
              id="teamName"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Team Name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="teamSlug" className="block text-sm font-medium text-gray-700">
              Team Slug
            </label>
            <input
              type="text"
              name="teamSlug"
              id="teamSlug"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="team-slug"
            />
          </div>
          
          <button
            type="submit"
            className="mt-4 rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
            Create Team
          </button>
        </form>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  return (
    <ErrorBoundary>
      <OrgBrandingProvider>
        <PageWrapper>
          <CreateNewTeamView />
        </PageWrapper>
      </OrgBrandingProvider>
    </ErrorBoundary>
  );
}

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Component Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600">
          Failed to load component. Please check the console for more details.
        </div>
      );
    }

    return this.props.children;
  }
}

// Mock Next.js data to prevent font loading issues
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__NEXT_DATA__ = {
    props: {
      pageProps: {}
    }
  };
  
  // Mock font module
  // @ts-ignore
  window['next/font/google'] = {
    Inter: () => ({
      className: '',
      style: { fontFamily: 'system-ui, sans-serif' }
    })
  };
}