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

  // Implement translate function directly in the component
  const translate = (key: string) => {
    const translations: Record<string, string> = {
      locked: "Locked",
      unlocked: "Unlocked",
      locked_fields_admin_description: "This field is locked by admin",
      unlocked_fields_admin_description: "This field is unlocked by admin",
      locked_fields_member_description: "This field is locked by member",
      unlocked_fields_member_description: "This field is unlocked by member"
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

  const lockedFieldsManager = useLockedFieldsManager({
    eventType,
    translate,
    formMethods,
  });

  // Example usage of the hook's return values
  return (
    <div>
      <div>
        <label>Example Field</label>
        {lockedFieldsManager.shouldLockIndicator("exampleField")}
      </div>
      <div>
        <label>Another Field</label>
        {lockedFieldsManager.shouldLockIndicator("anotherField", { simple: true })}
      </div>
    </div>
  );
}