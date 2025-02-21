import React, { useState } from 'react';
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';
import { Button, Form, TextField } from "@calcom/ui";

// Modified version of AddNewTeamsForm that accepts id directly
const ModifiedAddNewTeamsForm = () => {
  const mockTeams = [
    { id: 1, name: "Team 1", slug: "team-1" },
    { id: 2, name: "Team 2", slug: "team-2" },
  ];

  // Mock form setup
  const form = useForm({
    defaultValues: {
      teams: [{ name: "" }],
      moveTeams: mockTeams.map((team) => ({
        id: team.id,
        shouldMove: false,
        newSlug: team.slug,
      })),
    },
  });

  const { register, control } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "teams",
  });

  const [counter, setCounter] = useState(1);

  const handleCounterIncrease = () => {
    if (counter >= 0 && counter < 5) {
      setCounter((prevCounter) => prevCounter + 1);
      append({ name: "" });
    }
  };

  const handleRemoveInput = (index: number) => {
    remove(index);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Form form={form} handleSubmit={() => {}}>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Add New Teams</label>
        {fields.map((field, index) => (
          <div key={field.id} className="relative">
            <TextField
              {...register(`teams.${index}.name`)}
              label=""
              placeholder={`Team ${index + 1}`}
              addOnSuffix={
                index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                    className="ml-2 text-gray-400 hover:text-gray-500"
                  >
                    Remove
                  </button>
                )
              }
            />
          </div>
        ))}
        {counter < 5 && (
          <Button
            type="button"
            color="secondary"
            onClick={handleCounterIncrease}
            className="mt-2"
          >
            Add Team
          </Button>
        )}
        {counter === 5 && (
          <p className="text-sm text-gray-500">
            Maximum number of teams reached
          </p>
        )}
      </div>
    </Form>
  );
};

export default function ComponentPreview() {
  const form = useForm({
    defaultValues: {
      teams: [{ name: "" }],
      moveTeams: [],
    },
  });

  return (
    <FormProvider {...form}>
      <ModifiedAddNewTeamsForm />
    </FormProvider>
  );
}