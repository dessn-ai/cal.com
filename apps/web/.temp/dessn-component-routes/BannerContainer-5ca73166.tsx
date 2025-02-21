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

  const mockBanners = {
    teamUpgradeBanner: state.teamUpgradeBanner.value ? [{
      team: {
        id: 1,
        name: "Team 1",
        slug: "team-1"
      },
      role: "OWNER",
      accepted: true,
      teamId: 1
    }] : null,
    orgUpgradeBanner: state.orgUpgradeBanner.value ? [{
      team: {
        id: 1,
        name: "Org 1",
        slug: "org-1"
      },
      role: "OWNER",
      accepted: true,
      teamId: 1
    }] : null,
    verifyEmailBanner: state.verifyEmailBanner.value ? {
      emailVerified: false,
      email: "test@example.com"
    } : null,
    adminPasswordBanner: state.adminPasswordBanner.value ? {
      user: {
        role: "ADMIN",
        username: "admin",
        defaultPassword: true
      }
    } : null,
    impersonationBanner: state.impersonationBanner.value ? {
      user: {
        username: "impersonated-user",
        impersonatedBy: {
          id: 1,
          username: "admin",
          role: "ADMIN"
        }
      }
    } : null,
    calendarCredentialBanner: state.calendarCredentialBanner.value ? {
      connectedCalendars: [],
      hasCalendarConnected: false,
      integrationRequested: true
    } : null,
    invalidAppCredentialBanners: state.invalidAppCredentialBanners.value ? [
      {
        name: "Google Calendar",
        slug: "google-calendar"
      },
      {
        name: "Office 365 Calendar",
        slug: "office365-calendar"
      }
    ] : null
  };

  return (
    <div className="w-full">
      <BannerContainer banners={mockBanners} />
    </div>
  );
}