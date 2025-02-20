import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/managed-event-types/hooks/useLockedFieldsManager';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        schedulingType: "MANAGED",
        userId: 1,
        metadata: {
          managedEventConfig: {
            unlockedFields: {}
          }
        },
        id: 1
      },
      label: "Event Type"
    },
    translate: {
      type: "function",
      value: (key: string) => key,
      label: "Translate Function"
    }
  });

  const formMethods = useForm<any>({
    defaultValues: {
      metadata: {
        managedEventConfig: {
          unlockedFields: {}
        }
      }
    }
  });

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      translate={state.translate.value}
      formMethods={formMethods}
    />
  );
}