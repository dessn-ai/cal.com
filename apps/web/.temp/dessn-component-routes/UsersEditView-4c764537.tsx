import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/users/pages/users-edit-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    user: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        metadata: {},
        id: 1,
        role: "USER",
        email: "john@example.com",
        locale: "en",
        theme: "light",
        twoFactorSecret: null,
        emailVerified: new Date().toISOString(),
        identityProviderId: null,
        invitedTo: null,
        allowDynamicBooking: true,
        verified: true,
        username: "johndoe",
        bio: "A sample bio",
        avatarUrl: "https://example.com/avatar.jpg",
        timeZone: "UTC",
        weekStart: "Monday",
        startTime: 9,
        endTime: 17,
        bufferTime: 15,
        hideBranding: false,
        appTheme: null,
        createdDate: new Date().toISOString(),
        trialEndsAt: null,
        lastActiveAt: new Date().toISOString(),
        defaultScheduleId: null,
        completedOnboarding: true,
        timeFormat: 24,
        twoFactorEnabled: false,
        backupCodes: null,
        identityProvider: "CAL",
        brandColor: "#000000",
        darkBrandColor: "#FFFFFF",
        allowSEOIndexing: true,
        receiveMonthlyDigestEmail: true,
        disableImpersonation: false,
        organizationId: null,
        locked: false,
        movedToProfileId: null,
        isPlatformManaged: false,
        smsLockState: "UNLOCKED",
        smsLockReviewedByAdmin: false,
        referralLinkId: null,
        creationSource: null
      }),
      label: "User Data",
    },
  });

  const user = JSON.parse(state.user.value);

  const formMethods = useForm({
    defaultValues: user,
  });

  return (
    <ImportedComponent
      user={user}
    />
  );
}