import React from 'react';
import { useParentState } from '../useIframeState';
import { BannerContainer } from '../../../../packages/features/shell/banners/LayoutBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamUpgradeBanner: {
      type: 'boolean',
      value: true,
      label: 'Show Team Upgrade Banner',
    },
    orgUpgradeBanner: {
      type: 'boolean',
      value: true,
      label: 'Show Org Upgrade Banner',
    },
    verifyEmailBanner: {
      type: 'boolean',
      value: true,
      label: 'Show Verify Email Banner',
    },
    adminPasswordBanner: {
      type: 'boolean',
      value: true,
      label: 'Show Admin Password Banner',
    },
    impersonationBanner: {
      type: 'boolean',
      value: true,
      label: 'Show Impersonation Banner',
    },
    calendarCredentialBanner: {
      type: 'boolean',
      value: true,
      label: 'Show Calendar Credential Banner',
    },
    invalidAppCredentialBanners: {
      type: 'boolean',
      value: true,
      label: 'Show Invalid App Credential Banners',
    },
  });

  const banners = {
    teamUpgradeBanner: state.teamUpgradeBanner.value,
    orgUpgradeBanner: state.orgUpgradeBanner.value,
    verifyEmailBanner: state.verifyEmailBanner.value,
    adminPasswordBanner: state.adminPasswordBanner.value,
    impersonationBanner: state.impersonationBanner.value,
    calendarCredentialBanner: state.calendarCredentialBanner.value,
    invalidAppCredentialBanners: state.invalidAppCredentialBanners.value,
  };

  return <BannerContainer banners={banners} />;
}