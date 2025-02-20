import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/team/type-view';

import { Booker } from "@calcom/atoms/monorepo";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "team-event",
      label: "Slug",
    },
    user: {
      type: "string",
      value: "johndoe",
      label: "User",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Is Branding Hidden",
    },
    isInstantMeeting: {
      type: "boolean",
      value: false,
      label: "Is Instant Meeting",
    },
    orgBannerUrl: {
      type: "string",
      value: "https://example.com/banner.jpg",
      label: "Org Banner URL",
    },
    teamMemberEmail: {
      type: "string",
      value: "team@example.com",
      label: "Team Member Email",
    },
    crmOwnerRecordType: {
      type: "string",
      value: "default",
      label: "CRM Owner Record Type",
    },
    crmAppSlug: {
      type: "string",
      value: "crm-app",
      label: "CRM App Slug",
    },
  });

  const mockBooking = {};
  const mockEventData = {
    entity: {},
    eventTypeId: 1,
    metadata: {
      multipleDuration: [30, 60, 90],
    },
    length: 60,
  };

  return (
    <ImportedComponent
      slug={state.slug.value}
      user={state.user.value}
      booking={mockBooking}
      isBrandingHidden={state.isBrandingHidden.value}
      eventData={mockEventData}
      isInstantMeeting={state.isInstantMeeting.value}
      orgBannerUrl={state.orgBannerUrl.value}
      teamMemberEmail={state.teamMemberEmail.value}
      crmOwnerRecordType={state.crmOwnerRecordType.value}
      crmAppSlug={state.crmAppSlug.value}
      isEmbed={state.isEmbed.value}
    />
  );
}