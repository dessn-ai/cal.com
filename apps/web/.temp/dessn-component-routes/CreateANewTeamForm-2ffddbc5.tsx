import React from 'react';
import { useParentState } from '../useIframeState';
import { Form } from '@calcom/ui/form/form';
import { TextField } from '@calcom/ui/form/fields';

// Create a simplified version of the form for preview
const PreviewCreateTeamForm = ({
  onCancel,
  submitLabel,
  onSuccess,
  inDialog,
  slug,
}: {
  onCancel: () => void;
  submitLabel: string;
  onSuccess: (data: any) => void;
  inDialog: boolean;
  slug: string;
}) => {
  const [teamName, setTeamName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ teamName });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="font-bold text-xl mb-6">Create New Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Name
          </label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter team name"
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          {inDialog && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    submitLabel: {
      type: "string",
      value: "Create Team",
      label: "Submit Label",
    },
    inDialog: {
      type: "boolean",
      value: false,
      label: "In Dialog",
    },
    slug: {
      type: "string",
      value: "my-team",
      label: "Slug",
    },
  });

  const onCancel = () => {
    console.log("Cancelled");
  };

  const onSuccess = (data: any) => {
    console.log("Success:", data);
  };

  return (
    <PreviewCreateTeamForm
      onCancel={onCancel}
      submitLabel={state.submitLabel.value}
      onSuccess={onSuccess}
      inDialog={state.inDialog.value}
      slug={state.slug.value}
    />
  );
}