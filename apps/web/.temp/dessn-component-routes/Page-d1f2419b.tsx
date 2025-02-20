import React from 'react';
import { useParentState } from '../useIframeState';

// Mock component since we can't load the actual one
const MockWebhookPage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-bold">Create New Webhook</h1>
        <p className="text-sm text-gray-600">
          Webhooks allow you to receive real-time updates about your bookings and other events.
        </p>
      </div>
      <form className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Webhook Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="My Webhook"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Webhook URL</label>
          <input
            type="url"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="https://example.com/webhook"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Create Webhook
          </button>
        </div>
      </form>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <div className="p-6">
      <MockWebhookPage />
    </div>
  );
}