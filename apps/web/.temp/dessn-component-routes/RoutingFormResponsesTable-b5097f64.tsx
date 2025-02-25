import React from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="p-4">
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <div className="rounded-md border">
            <MockRoutingFormResponsesTable />
          </div>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

function MockRoutingFormResponsesTable() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Routing Form Responses</h2>
        <p className="text-sm text-gray-500">View and manage your form responses</p>
      </div>
      
      {/* Mock filters */}
      <div className="mb-4 flex gap-2">
        <button className="rounded-md border px-3 py-1 text-sm">
          Filter
        </button>
        <button className="rounded-md border px-3 py-1 text-sm">
          Date Range
        </button>
      </div>

      {/* Mock table */}
      <div className="rounded-md border">
        <div className="grid grid-cols-4 gap-4 border-b p-4 font-medium">
          <div>Date</div>
          <div>Form</div>
          <div>Response</div>
          <div>Status</div>
        </div>
        <div className="p-8 text-center text-sm text-gray-500">
          No responses found. Responses will appear here when users submit your forms.
        </div>
      </div>
    </div>
  );
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className="p-4 text-center">
        <p>Something went wrong loading the routing form responses table.</p>
      </div>
    );
  }

  return <>{children}</>;
}