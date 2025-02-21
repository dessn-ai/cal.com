import React from 'react';
import { useParentState } from '../useIframeState';

interface PageParams {
  provider: string;
}

interface SearchParams {
  code: string;
  state: string;
}

// Mock SSO Component
const MockSSOComponent = ({ 
  params, 
  searchParams 
}: { 
  params: PageParams; 
  searchParams: SearchParams;
}) => {
  return (
    <div className="mx-auto mt-8 max-w-md">
      <div className="rounded-md border border-gray-200 p-8">
        <h2 className="mb-4 text-center text-2xl font-semibold">SSO Authentication</h2>
        <div className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-sm text-gray-700">
              <strong>Provider:</strong> {params.provider}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Code:</strong> {searchParams.code}
            </p>
            <p className="text-sm text-gray-700">
              <strong>State:</strong> {searchParams.state}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              This is a preview of the SSO authentication page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ provider: "google" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ code: "123456", state: "abcdef" }),
      label: "Search Params",
    },
  });

  const params: PageParams = React.useMemo(() => {
    try {
      return JSON.parse(state.params.value);
    } catch (e) {
      console.error('Error parsing params:', e);
      return { provider: "google" };
    }
  }, [state.params.value]);

  const searchParams: SearchParams = React.useMemo(() => {
    try {
      return JSON.parse(state.searchParams.value);
    } catch (e) {
      console.error('Error parsing searchParams:', e);
      return { code: "", state: "" };
    }
  }, [state.searchParams.value]);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-full px-4">
        <MockSSOComponent 
          params={params}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}