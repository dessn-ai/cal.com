import React from 'react';
import { useParentState } from '../useIframeState';

export default function ComponentPreview() {
  const [state] = useParentState({
    pathname: {
      type: "string",
      value: "/some-non-existent-page",
      label: "Pathname",
    },
  });

  return (
    <div className="min-h-screen bg-white px-4" data-testid="404-page">
      <main className="mx-auto max-w-xl pb-6 pt-16 sm:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-black">404 Error</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            The page you are looking for could not be found.
          </p>
        </div>
        <div className="mt-12">
          <div className="mt-8">
            <a href="/" className="text-base font-medium text-black hover:text-gray-500">
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}