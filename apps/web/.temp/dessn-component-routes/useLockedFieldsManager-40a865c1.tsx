import React from 'react';
import useLockedFieldsManager from '../../../../packages/features/ee/managed-event-types/hooks/useLockedFieldsManager';
import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const eventType = {
    schedulingType: "MANAGED",
    userId: 1,
    metadata: {
      managedEventConfig: {
        unlockedFields: {}
      }
    },
    id: 1
  };

  // Simple translation function that just returns the key
  const translate = (key: string) => {
    const translations: Record<string, string> = {
      'locked': 'Locked',
      'unlocked': 'Unlocked',
      'locked_fields_admin_description': 'This field is locked by admin',
      'locked_fields_member_description': 'This field is locked by member',
      'unlocked_fields_admin_description': 'This field is unlocked by admin',
      'unlocked_fields_member_description': 'This field is unlocked by member'
    };
    return translations[key] || key;
  };

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
    eventType,
    translate,
    formMethods,
  });

  // Example usage of the hook's return values
  const titleFieldLock = useLockedLabel('title');
  const descriptionLockSwitch = useLockedSwitch('description');

  return (
    <div>
      <h3>Locked Fields Manager Demo</h3>
      <div>
        <p>Is Managed Event Type: {isManagedEventType ? 'Yes' : 'No'}</p>
        <p>Is Children Managed Event Type: {isChildrenManagedEventType ? 'Yes' : 'No'}</p>
        
        {/* Example field with lock indicator */}
        <div>
          <label>Title Field</label>
          <input
            type="text"
            disabled={titleFieldLock.disabled}
            placeholder="Enter title"
          />
          {titleFieldLock.LockedIcon}
        </div>

        {/* Example field with lock switch */}
        <div>
          <label>Description Field</label>
          <input
            type="text"
            placeholder="Enter description"
          />
          {descriptionLockSwitch()}
        </div>
      </div>
    </div>
  );
}