import React from 'react';
import { useParentState } from '../useIframeState';

// Mock components
const MockBanner = ({ children }) => <div className="mock-banner">{children}</div>;

// Override the actual BannerContainer with our simplified version
const BannerContainer = ({ banners }) => {
  return (
    <div className="banner-container">
      {banners.teamUpgradeBanner && (
        <MockBanner>Team Upgrade Banner</MockBanner>
      )}
      {banners.orgUpgradeBanner && (
        <MockBanner>Organization Upgrade Banner</MockBanner>
      )}
      {banners.verifyEmailBanner && (
        <MockBanner>Verify Email Banner</MockBanner>
      )}
      {banners.adminPasswordBanner && (
        <MockBanner>Admin Password Banner</MockBanner>
      )}
      {banners.impersonationBanner && (
        <MockBanner>Impersonation Banner</MockBanner>
      )}
      {banners.calendarCredentialBanner && (
        <MockBanner>Calendar Credential Banner</MockBanner>
      )}
      {banners.invalidAppCredentialBanners && (
        <MockBanner>Invalid App Credential Banners</MockBanner>
      )}
    </div>
  );
};

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

  try {
    return <BannerContainer banners={banners} />;
  } catch (error) {
    console.error('Error rendering BannerContainer:', error);
    return <div>Error rendering banners</div>;
  }
}