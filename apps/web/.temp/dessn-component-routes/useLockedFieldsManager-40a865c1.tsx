import React from 'react';
import { useParentState } from '../useIframeState';
import useLockedFieldsManager from '../../../../packages/features/ee/managed-event-types/hooks/useLockedFieldsManager';
import { useForm } from 'react-hook-form';

const mockTranslations: Record<string, string> = {
  locked: "Locked",
  unlocked: "Unlocked",
  locked_fields_admin_description: "This field is locked",
  unlocked_fields_admin_description: "This field is unlocked",
  locked_fields_member_description: "This field is locked by admin",
  unlocked_fields_member_description: "This field is unlocked by admin"
};

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
    }
  });

  // Create a stable translate function that doesn't need to be passed through postMessage
  const translate = React.useCallback((key: string) => {
    return mockTranslations[key] || key;
  }, []);

  const formMethods = useForm<any>({
    defaultValues: {
      metadata: {
        managedEventConfig: {
          unlockedFields: {}
        }
      }
    }
  });

  const {
    shouldLockIndicator,
    shouldLockDisableProps,
    useLockedLabel,
    useLockedSwitch,
    isManagedEventType,
    isChildrenManagedEventType
  } = useLockedFieldsManager({
    eventType: state.eventType.value,
    translate,
    formMethods,
  });

  // Example usage of the hook's features
  const titleLockProps = shouldLockDisableProps('title');
  const LockSwitch = useLockedSwitch('title');

  return (
    <div className="space-y-4">
      <div>
        <h3>Lock Status Demo</h3>
        <div className="flex items-center gap-2">
          <span>Title Field:</span>
          {titleLockProps.LockedIcon}
          {LockSwitch && <LockSwitch />}
        </div>
        <input
          type="text"
          placeholder="Title field"
          disabled={titleLockProps.disabled}
          className="mt-2 block w-full rounded-md border p-2"
        />
      </div>
      <div>
        <p>Is Managed Event Type: {isManagedEventType ? 'Yes' : 'No'}</p>
        <p>Is Children Managed Event Type: {isChildrenManagedEventType ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}