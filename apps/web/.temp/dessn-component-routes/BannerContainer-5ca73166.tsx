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

  // Mock data for each banner type
  const mockBanners = {
    teamUpgradeBanner: state.teamUpgradeBanner.value ? 
      [{
        team: {
          name: "Test Team",
          slug: "test-team"
        },
        role: "MEMBER"
      }] : 
      [],
    orgUpgradeBanner: state.orgUpgradeBanner.value ? 
      [{
        team: {
          name: "Test Org",
          slug: "test-org"
        },
        role: "MEMBER"
      }] : 
      [],
    verifyEmailBanner: state.verifyEmailBanner.value ? {
      email: "test@example.com",
      isVerified: false
    } : null,
    adminPasswordBanner: state.adminPasswordBanner.value ? {
      user: {
        role: "ADMIN",
        username: "admin"
      },
      usedSettingsPage: false
    } : null,
    impersonationBanner: state.impersonationBanner.value ? {
      user: {
        impersonatedBy: {
          username: "admin",
          name: "Administrator"
        }
      }
    } : null,
    calendarCredentialBanner: state.calendarCredentialBanner.value ? {
      user: {
        hasCalendarIntegrations: false,
        hasBookings: true
      }
    } : null,
    invalidAppCredentialBanners: state.invalidAppCredentialBanners.value ? 
      [
        {
          appName: "Test App",
          appType: "calendar",
          title: "Invalid Credentials",
          message: "Please reconnect your calendar",
          integration: {
            name: "Test Integration",
            type: "calendar"
          }
        }
      ] : 
      []
  };

  // Only render banners that have data
  const filteredBanners = Object.fromEntries(
    Object.entries(mockBanners).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value !== null;
    })
  );

  try {
    return <BannerContainer banners={filteredBanners} />;
  } catch (error) {
    console.error('Error rendering BannerContainer:', error);
    return null;
  }
}