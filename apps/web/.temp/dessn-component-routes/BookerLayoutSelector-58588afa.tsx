import React from 'react';
import { useParentState } from '../useIframeState';
import { BookerLayoutSelector } from '../../../../packages/features/settings/BookerLayoutSelector';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Select Layout",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Choose the layout for your booking page",
      label: "Description",
    },
    fallbackToUserSettings: {
      type: "boolean",
      value: false,
      label: "Fallback to User Settings",
    },
    isDark: {
      type: "boolean",
      value: false,
      label: "Dark Mode",
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isOuterBorder: {
      type: "boolean",
      value: false,
      label: "Outer Border",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
    isUserLoading: {
      type: "boolean",
      value: false,
      label: "User Loading",
    },
  });

  const methods = useForm({
    defaultValues: {
      metadata: {
        bookerLayouts: {
          enabledLayouts: ["MONTH_VIEW", "WEEK_VIEW", "DAY_VIEW"],
          defaultLayout: "MONTH_VIEW",
        },
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <BookerLayoutSelector
        title={state.title.value}
        description={state.description.value}
        fallbackToUserSettings={state.fallbackToUserSettings.value}
        isDark={state.isDark.value}
        isDisabled={state.isDisabled.value}
        isOuterBorder={state.isOuterBorder.value}
        isLoading={state.isLoading.value}
        isUserLoading={state.isUserLoading.value}
        user={{
          defaultBookerLayouts: {
            enabledLayouts: ["MONTH_VIEW", "WEEK_VIEW"],
            defaultLayout: "WEEK_VIEW",
          },
        }}
      />
    </FormProvider>
  );
}