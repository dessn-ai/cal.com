import React from 'react';
import { useParentState } from '../useIframeState';
import { useForm } from 'react-hook-form';

// Mock version of CreateANewTeamForm that doesn't depend on org branding
const MockCreateANewTeamForm = ({
  onCancel,
  submitLabel,
  onSuccess,
  inDialog,
  slug,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      slug: slug || '',
    }
  });

  const onSubmit = (data) => {
    onSuccess?.(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Team Name
        </label>
        <input
          type="text"
          {...register('name', { required: 'Team name is required' })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Team Slug
        </label>
        <input
          type="text"
          {...register('slug', { required: 'Team slug is required' })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.slug && (
          <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {submitLabel || 'Create Team'}
        </button>
      </div>
    </form>
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
    <div className="p-6">
      <MockCreateANewTeamForm
        onCancel={onCancel}
        submitLabel={state.submitLabel.value}
        onSuccess={onSuccess}
        inDialog={state.inDialog.value}
        slug={state.slug.value}
      />
    </div>
  );
}