import { lazy } from 'react';

export interface RouteConfig {
  path: string;
  label: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const routes: RouteConfig[] = [];

export function addRoute(config: {
  path: string;
  label: string;
  componentId: string;
}) {
  routes.push({
    path: config.path,
    label: config.label,
    component: lazy(
      () => import(`./dessn-component-routes/${config.componentId}.tsx`)
    ),
  });
}

// Add route for AppSettings-82e8d49e
addRoute({
  path: '/AppSettings-82e8d49e',
  label: 'AppSettings-82e8d49e',
  componentId: 'AppSettings-82e8d49e',
});
// Add route for DialogHeader-57f794de
addRoute({
  path: '/DialogHeader-57f794de',
  label: 'DialogHeader-57f794de',
  componentId: 'DialogHeader-57f794de',
});
// Add route for BookedByCell-d685947d
addRoute({
  path: '/BookedByCell-d685947d',
  label: 'BookedByCell-d685947d',
  componentId: 'BookedByCell-d685947d',
});
// Add route for CurrentTime-63e37576
addRoute({
  path: '/CurrentTime-63e37576',
  label: 'CurrentTime-63e37576',
  componentId: 'CurrentTime-63e37576',
});
// Add route for OverlayCalendarSettingsModal-9440f370
addRoute({
  path: '/OverlayCalendarSettingsModal-9440f370',
  label: 'OverlayCalendarSettingsModal-9440f370',
  componentId: 'OverlayCalendarSettingsModal-9440f370',
});
// Add route for FilterSelect-7e291970
addRoute({
  path: '/FilterSelect-7e291970',
  label: 'FilterSelect-7e291970',
  componentId: 'FilterSelect-7e291970',
});
// Add route for ManagedEventDialog-fdc1b89e
addRoute({
  path: '/ManagedEventDialog-fdc1b89e',
  label: 'ManagedEventDialog-fdc1b89e',
  componentId: 'ManagedEventDialog-fdc1b89e',
});
// Add route for createHydrateClient-40538f9b
addRoute({
  path: '/createHydrateClient-40538f9b',
  label: 'createHydrateClient-40538f9b',
  componentId: 'createHydrateClient-40538f9b',
});
// Add route for Page-7dd3f8cd
addRoute({
  path: '/Page-7dd3f8cd',
  label: 'Page-7dd3f8cd',
  componentId: 'Page-7dd3f8cd',
});
// Add route for AttendeeAwaitingPaymentEmail-ed601637
addRoute({
  path: '/AttendeeAwaitingPaymentEmail-ed601637',
  label: 'AttendeeAwaitingPaymentEmail-ed601637',
  componentId: 'AttendeeAwaitingPaymentEmail-ed601637',
});
// Add route for SkeletonLoader-117974e8
addRoute({
  path: '/SkeletonLoader-117974e8',
  label: 'SkeletonLoader-117974e8',
  componentId: 'SkeletonLoader-117974e8',
});
// Add route for SkeletonButton-9bc6b401
addRoute({
  path: '/SkeletonButton-9bc6b401',
  label: 'SkeletonButton-9bc6b401',
  componentId: 'SkeletonButton-9bc6b401',
});
// Add route for VerticalDivider-30631592
addRoute({
  path: '/VerticalDivider-30631592',
  label: 'VerticalDivider-30631592',
  componentId: 'VerticalDivider-30631592',
});
// Add route for EventTypeAppSettingsInterface-cf833187
addRoute({
  path: '/EventTypeAppSettingsInterface-cf833187',
  label: 'EventTypeAppSettingsInterface-cf833187',
  componentId: 'EventTypeAppSettingsInterface-cf833187',
});
// Add route for BookingPageTagManager-d80f814d
addRoute({
  path: '/BookingPageTagManager-d80f814d',
  label: 'BookingPageTagManager-d80f814d',
  componentId: 'BookingPageTagManager-d80f814d',
});
// Add route for Error-f5e7c65c
addRoute({
  path: '/Error-f5e7c65c',
  label: 'Error-f5e7c65c',
  componentId: 'Error-f5e7c65c',
});
// Add route for RoutingFormResponsesTable-b5097f64
addRoute({
  path: '/RoutingFormResponsesTable-b5097f64',
  label: 'RoutingFormResponsesTable-b5097f64',
  componentId: 'RoutingFormResponsesTable-b5097f64',
});
// Add route for AddVariablesPlugin-c39a2781
addRoute({
  path: '/AddVariablesPlugin-c39a2781',
  label: 'AddVariablesPlugin-c39a2781',
  componentId: 'AddVariablesPlugin-c39a2781',
});
// Add route for QueryCell-18bd2b83
addRoute({
  path: '/QueryCell-18bd2b83',
  label: 'QueryCell-18bd2b83',
  componentId: 'QueryCell-18bd2b83',
});
// Add route for SkeletonLoader-c644e4cc
addRoute({
  path: '/SkeletonLoader-c644e4cc',
  label: 'SkeletonLoader-c644e4cc',
  componentId: 'SkeletonLoader-c644e4cc',
});
// Add route for CommandGroup-8539b5ed
addRoute({
  path: '/CommandGroup-8539b5ed',
  label: 'CommandGroup-8539b5ed',
  componentId: 'CommandGroup-8539b5ed',
});
// Add route for InstalledApps-a5fbc225
addRoute({
  path: '/InstalledApps-a5fbc225',
  label: 'InstalledApps-a5fbc225',
  componentId: 'InstalledApps-a5fbc225',
});
// Add route for AdminUser-b0f24470
addRoute({
  path: '/AdminUser-b0f24470',
  label: 'AdminUser-b0f24470',
  componentId: 'AdminUser-b0f24470',
});
// Add route for Page-e36066ec
addRoute({
  path: '/Page-e36066ec',
  label: 'Page-e36066ec',
  componentId: 'Page-e36066ec',
});
// Add route for SkeletonLoader-2818d12c
addRoute({
  path: '/SkeletonLoader-2818d12c',
  label: 'SkeletonLoader-2818d12c',
  componentId: 'SkeletonLoader-2818d12c',
});
// Add route for CreateANewOrganizationForm-cd133f6e
addRoute({
  path: '/CreateANewOrganizationForm-cd133f6e',
  label: 'CreateANewOrganizationForm-cd133f6e',
  componentId: 'CreateANewOrganizationForm-cd133f6e',
});
// Add route for Login-bde06c3d
addRoute({
  path: '/Login-bde06c3d',
  label: 'Login-bde06c3d',
  componentId: 'Login-bde06c3d',
});
// Add route for NotFound-e682df8a
addRoute({
  path: '/NotFound-e682df8a',
  label: 'NotFound-e682df8a',
  componentId: 'NotFound-e682df8a',
});
// Add route for AppProviders-25ee4f5f
addRoute({
  path: '/AppProviders-25ee4f5f',
  label: 'AppProviders-25ee4f5f',
  componentId: 'AppProviders-25ee4f5f',
});
// Add route for Page-e8d82b98
addRoute({
  path: '/Page-e8d82b98',
  label: 'Page-e8d82b98',
  componentId: 'Page-e8d82b98',
});
// Add route for StorybookTrpcProvider-309240c1
addRoute({
  path: '/StorybookTrpcProvider-309240c1',
  label: 'StorybookTrpcProvider-309240c1',
  componentId: 'StorybookTrpcProvider-309240c1',
});
// Add route for DatePicker-0d8effeb
addRoute({
  path: '/DatePicker-0d8effeb',
  label: 'DatePicker-0d8effeb',
  componentId: 'DatePicker-0d8effeb',
});
// Add route for SideBar-bdf69862
addRoute({
  path: '/SideBar-bdf69862',
  label: 'SideBar-bdf69862',
  componentId: 'SideBar-bdf69862',
});
// Add route for WizardForm-7111e737
addRoute({
  path: '/WizardForm-7111e737',
  label: 'WizardForm-7111e737',
  componentId: 'WizardForm-7111e737',
});
// Add route for SheetFooter-fc56f4fa
addRoute({
  path: '/SheetFooter-fc56f4fa',
  label: 'SheetFooter-fc56f4fa',
  componentId: 'SheetFooter-fc56f4fa',
});
// Add route for NewScheduleButton-0c7e0fe7
addRoute({
  path: '/NewScheduleButton-0c7e0fe7',
  label: 'NewScheduleButton-0c7e0fe7',
  componentId: 'NewScheduleButton-0c7e0fe7',
});
// Add route for Navigation-8d6d220e
addRoute({
  path: '/Navigation-8d6d220e',
  label: 'Navigation-8d6d220e',
  componentId: 'Navigation-8d6d220e',
});
// Add route for EmbedDialogProvider-4025390e
addRoute({
  path: '/EmbedDialogProvider-4025390e',
  label: 'EmbedDialogProvider-4025390e',
  componentId: 'EmbedDialogProvider-4025390e',
});
// Add route for BookingKPICards-62fdc761
addRoute({
  path: '/BookingKPICards-62fdc761',
  label: 'BookingKPICards-62fdc761',
  componentId: 'BookingKPICards-62fdc761',
});
// Add route for ServerPage-466331bc
addRoute({
  path: '/ServerPage-466331bc',
  label: 'ServerPage-466331bc',
  componentId: 'ServerPage-466331bc',
});
// Add route for AIEventController-ea7bddec
addRoute({
  path: '/AIEventController-ea7bddec',
  label: 'AIEventController-ea7bddec',
  componentId: 'AIEventController-ea7bddec',
});
// Add route for ServerPage-4d4de060
addRoute({
  path: '/ServerPage-4d4de060',
  label: 'ServerPage-4d4de060',
  componentId: 'ServerPage-4d4de060',
});
// Add route for SeatsAvailabilityText-c28a26df
addRoute({
  path: '/SeatsAvailabilityText-c28a26df',
  label: 'SeatsAvailabilityText-c28a26df',
  componentId: 'SeatsAvailabilityText-c28a26df',
});
// Add route for AppSettings-34dfdd6a
addRoute({
  path: '/AppSettings-34dfdd6a',
  label: 'AppSettings-34dfdd6a',
  componentId: 'AppSettings-34dfdd6a',
});
// Add route for AboutOrganizationForm-217695dd
addRoute({
  path: '/AboutOrganizationForm-217695dd',
  label: 'AboutOrganizationForm-217695dd',
  componentId: 'AboutOrganizationForm-217695dd',
});
// Add route for LayoutWrapper-e6b6ae9d
addRoute({
  path: '/LayoutWrapper-e6b6ae9d',
  label: 'LayoutWrapper-e6b6ae9d',
  componentId: 'LayoutWrapper-e6b6ae9d',
});
// Add route for PlatformPricing-eeb5570f
addRoute({
  path: '/PlatformPricing-eeb5570f',
  label: 'PlatformPricing-eeb5570f',
  componentId: 'PlatformPricing-eeb5570f',
});
// Add route for MobileNavigationContainer-8d6d220e
addRoute({
  path: '/MobileNavigationContainer-8d6d220e',
  label: 'MobileNavigationContainer-8d6d220e',
  componentId: 'MobileNavigationContainer-8d6d220e',
});
// Add route for OverlayCalendarSwitch-53845668
addRoute({
  path: '/OverlayCalendarSwitch-53845668',
  label: 'OverlayCalendarSwitch-53845668',
  componentId: 'OverlayCalendarSwitch-53845668',
});
// Add route for CellWithOverflowX-24744bda
addRoute({
  path: '/CellWithOverflowX-24744bda',
  label: 'CellWithOverflowX-24744bda',
  componentId: 'CellWithOverflowX-24744bda',
});
// Add route for DialogClose-57f794de
addRoute({
  path: '/DialogClose-57f794de',
  label: 'DialogClose-57f794de',
  componentId: 'DialogClose-57f794de',
});
// Add route for EventDetails-61630078
addRoute({
  path: '/EventDetails-61630078',
  label: 'EventDetails-61630078',
  componentId: 'EventDetails-61630078',
});
// Add route for FormEditPage-c19818b7
addRoute({
  path: '/FormEditPage-c19818b7',
  label: 'FormEditPage-c19818b7',
  componentId: 'FormEditPage-c19818b7',
});
// Add route for DisableUserImpersonation-ee301e45
addRoute({
  path: '/DisableUserImpersonation-ee301e45',
  label: 'DisableUserImpersonation-ee301e45',
  componentId: 'DisableUserImpersonation-ee301e45',
});
// Add route for OptionComponent-b921da27
addRoute({
  path: '/OptionComponent-b921da27',
  label: 'OptionComponent-b921da27',
  componentId: 'OptionComponent-b921da27',
});
// Add route for BaseEmailHtml-0ed7e7f8
addRoute({
  path: '/BaseEmailHtml-0ed7e7f8',
  label: 'BaseEmailHtml-0ed7e7f8',
  componentId: 'BaseEmailHtml-0ed7e7f8',
});
// Add route for OIDCConnection-e6a074d8
addRoute({
  path: '/OIDCConnection-e6a074d8',
  label: 'OIDCConnection-e6a074d8',
  componentId: 'OIDCConnection-e6a074d8',
});
// Add route for UserCalendarSwitch-48ab30b6
addRoute({
  path: '/UserCalendarSwitch-48ab30b6',
  label: 'UserCalendarSwitch-48ab30b6',
  componentId: 'UserCalendarSwitch-48ab30b6',
});
// Add route for BillingView-4adac0a6
addRoute({
  path: '/BillingView-4adac0a6',
  label: 'BillingView-4adac0a6',
  componentId: 'BillingView-4adac0a6',
});
// Add route for BookerSection-f8cab7dd
addRoute({
  path: '/BookerSection-f8cab7dd',
  label: 'BookerSection-f8cab7dd',
  componentId: 'BookerSection-f8cab7dd',
});
// Add route for EventWebhooksTab-a52028a3
addRoute({
  path: '/EventWebhooksTab-a52028a3',
  label: 'EventWebhooksTab-a52028a3',
  componentId: 'EventWebhooksTab-a52028a3',
});
// Add route for PageWrapperLayout-1f292898
addRoute({
  path: '/PageWrapperLayout-1f292898',
  label: 'PageWrapperLayout-1f292898',
  componentId: 'PageWrapperLayout-1f292898',
});
// Add route for Toaster-eb102044
addRoute({
  path: '/Toaster-eb102044',
  label: 'Toaster-eb102044',
  componentId: 'Toaster-eb102044',
});
// Add route for LockedIndicator-40a865c1
addRoute({
  path: '/LockedIndicator-40a865c1',
  label: 'LockedIndicator-40a865c1',
  componentId: 'LockedIndicator-40a865c1',
});
// Add route for PriceIcon-35f43740
addRoute({
  path: '/PriceIcon-35f43740',
  label: 'PriceIcon-35f43740',
  componentId: 'PriceIcon-35f43740',
});
// Add route for ExchangeSetup-f490c19d
addRoute({
  path: '/ExchangeSetup-f490c19d',
  label: 'ExchangeSetup-f490c19d',
  componentId: 'ExchangeSetup-f490c19d',
});
// Add route for AppsStatus-0be4644b
addRoute({
  path: '/AppsStatus-0be4644b',
  label: 'AppsStatus-0be4644b',
  componentId: 'AppsStatus-0be4644b',
});
// Add route for FormBuilderField-3d514742
addRoute({
  path: '/FormBuilderField-3d514742',
  label: 'FormBuilderField-3d514742',
  componentId: 'FormBuilderField-3d514742',
});
// Add route for ChangeUserRoleModal-b95c474a
addRoute({
  path: '/ChangeUserRoleModal-b95c474a',
  label: 'ChangeUserRoleModal-b95c474a',
  componentId: 'ChangeUserRoleModal-b95c474a',
});
// Add route for CreateAttributesPage-e220513e
addRoute({
  path: '/CreateAttributesPage-e220513e',
  label: 'CreateAttributesPage-e220513e',
  componentId: 'CreateAttributesPage-e220513e',
});
// Add route for OAuthClientForm-16c160c4
addRoute({
  path: '/OAuthClientForm-16c160c4',
  label: 'OAuthClientForm-16c160c4',
  componentId: 'OAuthClientForm-16c160c4',
});
// Add route for ListItem-2afc4dd7
addRoute({
  path: '/ListItem-2afc4dd7',
  label: 'ListItem-2afc4dd7',
  componentId: 'ListItem-2afc4dd7',
});
// Add route for Page-b8e77f64
addRoute({
  path: '/Page-b8e77f64',
  label: 'Page-b8e77f64',
  componentId: 'Page-b8e77f64',
});
// Add route for Page-674b7b57
addRoute({
  path: '/Page-674b7b57',
  label: 'Page-674b7b57',
  componentId: 'Page-674b7b57',
});
// Add route for WorkflowsPage-ef1f9fec
addRoute({
  path: '/WorkflowsPage-ef1f9fec',
  label: 'WorkflowsPage-ef1f9fec',
  componentId: 'WorkflowsPage-ef1f9fec',
});
// Add route for AppCategoryNavigation-0b8dbf57
addRoute({
  path: '/AppCategoryNavigation-0b8dbf57',
  label: 'AppCategoryNavigation-0b8dbf57',
  componentId: 'AppCategoryNavigation-0b8dbf57',
});
// Add route for CheckboxField-c8ff2385
addRoute({
  path: '/CheckboxField-c8ff2385',
  label: 'CheckboxField-c8ff2385',
  componentId: 'CheckboxField-c8ff2385',
});
// Add route for InviteLinkSettingsModal-abc1ef43
addRoute({
  path: '/InviteLinkSettingsModal-abc1ef43',
  label: 'InviteLinkSettingsModal-abc1ef43',
  componentId: 'InviteLinkSettingsModal-abc1ef43',
});
// Add route for Page-22044c7d
addRoute({
  path: '/Page-22044c7d',
  label: 'Page-22044c7d',
  componentId: 'Page-22044c7d',
});
// Add route for AdminPasswordBanner-2ca1d9a8
addRoute({
  path: '/AdminPasswordBanner-2ca1d9a8',
  label: 'AdminPasswordBanner-2ca1d9a8',
  componentId: 'AdminPasswordBanner-2ca1d9a8',
});
// Add route for TeamInviteBadge-0885630d
addRoute({
  path: '/TeamInviteBadge-0885630d',
  label: 'TeamInviteBadge-0885630d',
  componentId: 'TeamInviteBadge-0885630d',
});
// Add route for DropdownMenuItem-1e023307
addRoute({
  path: '/DropdownMenuItem-1e023307',
  label: 'DropdownMenuItem-1e023307',
  componentId: 'DropdownMenuItem-1e023307',
});
// Add route for SkeletonAvatar-9bc6b401
addRoute({
  path: '/SkeletonAvatar-9bc6b401',
  label: 'SkeletonAvatar-9bc6b401',
  componentId: 'SkeletonAvatar-9bc6b401',
});
// Add route for Stepper-6bfb575b
addRoute({
  path: '/Stepper-6bfb575b',
  label: 'Stepper-6bfb575b',
  componentId: 'Stepper-6bfb575b',
});
// Add route for UsernameAvailabilityField-d33acdaf
addRoute({
  path: '/UsernameAvailabilityField-d33acdaf',
  label: 'UsernameAvailabilityField-d33acdaf',
  componentId: 'UsernameAvailabilityField-d33acdaf',
});
// Add route for Booker-91463a97
addRoute({
  path: '/Booker-91463a97',
  label: 'Booker-91463a97',
  componentId: 'Booker-91463a97',
});
// Add route for TableActions-5463f74e
addRoute({
  path: '/TableActions-5463f74e',
  label: 'TableActions-5463f74e',
  componentId: 'TableActions-5463f74e',
});
// Add route for CallToActionTable-a8eed944
addRoute({
  path: '/CallToActionTable-a8eed944',
  label: 'CallToActionTable-a8eed944',
  componentId: 'CallToActionTable-a8eed944',
});
// Add route for RoutedToPerPeriod-844a59d9
addRoute({
  path: '/RoutedToPerPeriod-844a59d9',
  label: 'RoutedToPerPeriod-844a59d9',
  componentId: 'RoutedToPerPeriod-844a59d9',
});
// Add route for NoSSR-0176c9c5
addRoute({
  path: '/NoSSR-0176c9c5',
  label: 'NoSSR-0176c9c5',
  componentId: 'NoSSR-0176c9c5',
});
// Add route for AddressInput-513f5d54
addRoute({
  path: '/AddressInput-513f5d54',
  label: 'AddressInput-513f5d54',
  componentId: 'AddressInput-513f5d54',
});
// Add route for ToastClose-cd4ba3bb
addRoute({
  path: '/ToastClose-cd4ba3bb',
  label: 'ToastClose-cd4ba3bb',
  componentId: 'ToastClose-cd4ba3bb',
});
// Add route for ServerPage-c269ae6b
addRoute({
  path: '/ServerPage-c269ae6b',
  label: 'ServerPage-c269ae6b',
  componentId: 'ServerPage-c269ae6b',
});
// Add route for RoutingLink-2dd2043a
addRoute({
  path: '/RoutingLink-2dd2043a',
  label: 'RoutingLink-2dd2043a',
  componentId: 'RoutingLink-2dd2043a',
});
// Add route for EmptyCell-74586bd0
addRoute({
  path: '/EmptyCell-74586bd0',
  label: 'EmptyCell-74586bd0',
  componentId: 'EmptyCell-74586bd0',
});
// Add route for ServerPage-ce0a7481
addRoute({
  path: '/ServerPage-ce0a7481',
  label: 'ServerPage-ce0a7481',
  componentId: 'ServerPage-ce0a7481',
});
// Add route for TwoFactorModalHeader-d225edaa
addRoute({
  path: '/TwoFactorModalHeader-d225edaa',
  label: 'TwoFactorModalHeader-d225edaa',
  componentId: 'TwoFactorModalHeader-d225edaa',
});
// Add route for Layout-d0a5e0f4
addRoute({
  path: '/Layout-d0a5e0f4',
  label: 'Layout-d0a5e0f4',
  componentId: 'Layout-d0a5e0f4',
});
// Add route for SecondaryEmailConfirmModal-25d4447c
addRoute({
  path: '/SecondaryEmailConfirmModal-25d4447c',
  label: 'SecondaryEmailConfirmModal-25d4447c',
  componentId: 'SecondaryEmailConfirmModal-25d4447c',
});
// Add route for AvailableTimesSkeleton-1347bea0
addRoute({
  path: '/AvailableTimesSkeleton-1347bea0',
  label: 'AvailableTimesSkeleton-1347bea0',
  componentId: 'AvailableTimesSkeleton-1347bea0',
});
// Add route for DialogTitle-3556910a
addRoute({
  path: '/DialogTitle-3556910a',
  label: 'DialogTitle-3556910a',
  componentId: 'DialogTitle-3556910a',
});
// Add route for AddNewTeamMembers-5a80ea5b
addRoute({
  path: '/AddNewTeamMembers-5a80ea5b',
  label: 'AddNewTeamMembers-5a80ea5b',
  componentId: 'AddNewTeamMembers-5a80ea5b',
});
// Add route for SuccessToast-75615def
addRoute({
  path: '/SuccessToast-75615def',
  label: 'SuccessToast-75615def',
  componentId: 'SuccessToast-75615def',
});
// Add route for SkeletonLoader-2b744789
addRoute({
  path: '/SkeletonLoader-2b744789',
  label: 'SkeletonLoader-2b744789',
  componentId: 'SkeletonLoader-2b744789',
});
// Add route for LeastBookedTeamMembersTable-ad727dd7
addRoute({
  path: '/LeastBookedTeamMembersTable-ad727dd7',
  label: 'LeastBookedTeamMembersTable-ad727dd7',
  componentId: 'LeastBookedTeamMembersTable-ad727dd7',
});
// Add route for DisableTwoFactorAuthModal-5d9ac255
addRoute({
  path: '/DisableTwoFactorAuthModal-5d9ac255',
  label: 'DisableTwoFactorAuthModal-5d9ac255',
  componentId: 'DisableTwoFactorAuthModal-5d9ac255',
});
// Add route for CreateButton-68938fe9
addRoute({
  path: '/CreateButton-68938fe9',
  label: 'CreateButton-68938fe9',
  componentId: 'CreateButton-68938fe9',
});
// Add route for CommandDialog-8539b5ed
addRoute({
  path: '/CommandDialog-8539b5ed',
  label: 'CommandDialog-8539b5ed',
  componentId: 'CommandDialog-8539b5ed',
});
// Add route for TeamsListing-3142f4cc
addRoute({
  path: '/TeamsListing-3142f4cc',
  label: 'TeamsListing-3142f4cc',
  componentId: 'TeamsListing-3142f4cc',
});
// Add route for DateRangeFilter-d42af04a
addRoute({
  path: '/DateRangeFilter-d42af04a',
  label: 'DateRangeFilter-d42af04a',
  componentId: 'DateRangeFilter-d42af04a',
});
// Add route for ServerPage-6514d71d
addRoute({
  path: '/ServerPage-6514d71d',
  label: 'ServerPage-6514d71d',
  componentId: 'ServerPage-6514d71d',
});
// Add route for TextAreaField-f4982884
addRoute({
  path: '/TextAreaField-f4982884',
  label: 'TextAreaField-f4982884',
  componentId: 'TextAreaField-f4982884',
});
// Add route for ServerPage-88f020c5
addRoute({
  path: '/ServerPage-88f020c5',
  label: 'ServerPage-88f020c5',
  componentId: 'ServerPage-88f020c5',
});
// Add route for Page-98a329c5
addRoute({
  path: '/Page-98a329c5',
  label: 'Page-98a329c5',
  componentId: 'Page-98a329c5',
});
// Add route for Page-fa868fff
addRoute({
  path: '/Page-fa868fff',
  label: 'Page-fa868fff',
  componentId: 'Page-fa868fff',
});
// Add route for CalDavCalendarSetup-afbc79ba
addRoute({
  path: '/CalDavCalendarSetup-afbc79ba',
  label: 'CalDavCalendarSetup-afbc79ba',
  componentId: 'CalDavCalendarSetup-afbc79ba',
});
// Add route for AppSetDefaultLinkDialog-e572900c
addRoute({
  path: '/AppSetDefaultLinkDialog-e572900c',
  label: 'AppSetDefaultLinkDialog-e572900c',
  componentId: 'AppSetDefaultLinkDialog-e572900c',
});
// Add route for AppSettings-fac53ccc
addRoute({
  path: '/AppSettings-fac53ccc',
  label: 'AppSettings-fac53ccc',
  componentId: 'AppSettings-fac53ccc',
});
// Add route for OrganizerRequestEmailV2-4563e725
addRoute({
  path: '/OrganizerRequestEmailV2-4563e725',
  label: 'OrganizerRequestEmailV2-4563e725',
  componentId: 'OrganizerRequestEmailV2-4563e725',
});
// Add route for EventTypeAppCard-a9997b0a
addRoute({
  path: '/EventTypeAppCard-a9997b0a',
  label: 'EventTypeAppCard-a9997b0a',
  componentId: 'EventTypeAppCard-a9997b0a',
});
// Add route for BrandColorsForm-f74bd9e6
addRoute({
  path: '/BrandColorsForm-f74bd9e6',
  label: 'BrandColorsForm-f74bd9e6',
  componentId: 'BrandColorsForm-f74bd9e6',
});
// Add route for SkeletonText-9bc6b401
addRoute({
  path: '/SkeletonText-9bc6b401',
  label: 'SkeletonText-9bc6b401',
  componentId: 'SkeletonText-9bc6b401',
});
// Add route for TeamInviteEmail-53d11e36
addRoute({
  path: '/TeamInviteEmail-53d11e36',
  label: 'TeamInviteEmail-53d11e36',
  componentId: 'TeamInviteEmail-53d11e36',
});
// Add route for BannerUploader-8d2bf839
addRoute({
  path: '/BannerUploader-8d2bf839',
  label: 'BannerUploader-8d2bf839',
  componentId: 'BannerUploader-8d2bf839',
});
// Add route for FilterCheckboxField-5f2b1d9e
addRoute({
  path: '/FilterCheckboxField-5f2b1d9e',
  label: 'FilterCheckboxField-5f2b1d9e',
  componentId: 'FilterCheckboxField-5f2b1d9e',
});
// Add route for OrganizerRequestedToRescheduleEmail-8643961d
addRoute({
  path: '/OrganizerRequestedToRescheduleEmail-8643961d',
  label: 'OrganizerRequestedToRescheduleEmail-8643961d',
  componentId: 'OrganizerRequestedToRescheduleEmail-8643961d',
});
// Add route for InfiniteSkeletonLoader-c644e4cc
addRoute({
  path: '/InfiniteSkeletonLoader-c644e4cc',
  label: 'InfiniteSkeletonLoader-c644e4cc',
  componentId: 'InfiniteSkeletonLoader-c644e4cc',
});
// Add route for ScheduleListItem-9827be07
addRoute({
  path: '/ScheduleListItem-9827be07',
  label: 'ScheduleListItem-9827be07',
  componentId: 'ScheduleListItem-9827be07',
});
// Add route for AvailableCellsForDay-74586bd0
addRoute({
  path: '/AvailableCellsForDay-74586bd0',
  label: 'AvailableCellsForDay-74586bd0',
  componentId: 'AvailableCellsForDay-74586bd0',
});
// Add route for TeamPage-0535ae57
addRoute({
  path: '/TeamPage-0535ae57',
  label: 'TeamPage-0535ae57',
  componentId: 'TeamPage-0535ae57',
});
// Add route for EventTypeAppCard-5eec8125
addRoute({
  path: '/EventTypeAppCard-5eec8125',
  label: 'EventTypeAppCard-5eec8125',
  componentId: 'EventTypeAppCard-5eec8125',
});
// Add route for EmailField-f4982884
addRoute({
  path: '/EmailField-f4982884',
  label: 'EmailField-f4982884',
  componentId: 'EmailField-f4982884',
});
// Add route for FiltersContainer-6617fe0b
addRoute({
  path: '/FiltersContainer-6617fe0b',
  label: 'FiltersContainer-6617fe0b',
  componentId: 'FiltersContainer-6617fe0b',
});
// Add route for OrgAttributesEditPageWrapper-1afcfbec
addRoute({
  path: '/OrgAttributesEditPageWrapper-1afcfbec',
  label: 'OrgAttributesEditPageWrapper-1afcfbec',
  componentId: 'OrgAttributesEditPageWrapper-1afcfbec',
});
// Add route for UsernameAvailability-d33acdaf
addRoute({
  path: '/UsernameAvailability-d33acdaf',
  label: 'UsernameAvailability-d33acdaf',
  componentId: 'UsernameAvailability-d33acdaf',
});
// Add route for OrgAppearanceViewWrapper-16bd5c14
addRoute({
  path: '/OrgAppearanceViewWrapper-16bd5c14',
  label: 'OrgAppearanceViewWrapper-16bd5c14',
  componentId: 'OrgAppearanceViewWrapper-16bd5c14',
});
// Add route for SetupAvailability-6d0c881b
addRoute({
  path: '/SetupAvailability-6d0c881b',
  label: 'SetupAvailability-6d0c881b',
  componentId: 'SetupAvailability-6d0c881b',
});
// Add route for RootLayout-147784be
addRoute({
  path: '/RootLayout-147784be',
  label: 'RootLayout-147784be',
  componentId: 'RootLayout-147784be',
});
// Add route for Breadcrumb-002bc113
addRoute({
  path: '/Breadcrumb-002bc113',
  label: 'Breadcrumb-002bc113',
  componentId: 'Breadcrumb-002bc113',
});
// Add route for FeedbackTable-72b93ee1
addRoute({
  path: '/FeedbackTable-72b93ee1',
  label: 'FeedbackTable-72b93ee1',
  componentId: 'FeedbackTable-72b93ee1',
});
// Add route for AppStoreCategories-4be09033
addRoute({
  path: '/AppStoreCategories-4be09033',
  label: 'AppStoreCategories-4be09033',
  componentId: 'AppStoreCategories-4be09033',
});
// Add route for createImage-152179c5
addRoute({
  path: '/createImage-152179c5',
  label: 'createImage-152179c5',
  componentId: 'createImage-152179c5',
});
// Add route for DeleteDialog-048e6439
addRoute({
  path: '/DeleteDialog-048e6439',
  label: 'DeleteDialog-048e6439',
  componentId: 'DeleteDialog-048e6439',
});
// Add route for AvailableEventLocations-521c57fc
addRoute({
  path: '/AvailableEventLocations-521c57fc',
  label: 'AvailableEventLocations-521c57fc',
  componentId: 'AvailableEventLocations-521c57fc',
});
// Add route for Page-20410cc0
addRoute({
  path: '/Page-20410cc0',
  label: 'Page-20410cc0',
  componentId: 'Page-20410cc0',
});
// Add route for SingleSelectFilterOptions-96fa6e40
addRoute({
  path: '/SingleSelectFilterOptions-96fa6e40',
  label: 'SingleSelectFilterOptions-96fa6e40',
  componentId: 'SingleSelectFilterOptions-96fa6e40',
});
// Add route for ArrowButton-1b812d4b
addRoute({
  path: '/ArrowButton-1b812d4b',
  label: 'ArrowButton-1b812d4b',
  componentId: 'ArrowButton-1b812d4b',
});
// Add route for AppConfiguration-1893fa49
addRoute({
  path: '/AppConfiguration-1893fa49',
  label: 'AppConfiguration-1893fa49',
  componentId: 'AppConfiguration-1893fa49',
});
// Add route for Page-8c5ad18d
addRoute({
  path: '/Page-8c5ad18d',
  label: 'Page-8c5ad18d',
  componentId: 'Page-8c5ad18d',
});
// Add route for DeleteDialog-1e8661b1
addRoute({
  path: '/DeleteDialog-1e8661b1',
  label: 'DeleteDialog-1e8661b1',
  componentId: 'DeleteDialog-1e8661b1',
});
// Add route for ConnectedCalendarItem-b5832dcd
addRoute({
  path: '/ConnectedCalendarItem-b5832dcd',
  label: 'ConnectedCalendarItem-b5832dcd',
  componentId: 'ConnectedCalendarItem-b5832dcd',
});
// Add route for GoogleTagManagerComponent-65e14aad
addRoute({
  path: '/GoogleTagManagerComponent-65e14aad',
  label: 'GoogleTagManagerComponent-65e14aad',
  componentId: 'GoogleTagManagerComponent-65e14aad',
});
// Add route for AdminOrganizationNotificationEmail-26abc43b
addRoute({
  path: '/AdminOrganizationNotificationEmail-26abc43b',
  label: 'AdminOrganizationNotificationEmail-26abc43b',
  componentId: 'AdminOrganizationNotificationEmail-26abc43b',
});
// Add route for MemberChangeRoleModal-434cd6d6
addRoute({
  path: '/MemberChangeRoleModal-434cd6d6',
  label: 'MemberChangeRoleModal-434cd6d6',
  componentId: 'MemberChangeRoleModal-434cd6d6',
});
// Add route for AvailableTimeSlots-55f2513e
addRoute({
  path: '/AvailableTimeSlots-55f2513e',
  label: 'AvailableTimeSlots-55f2513e',
  componentId: 'AvailableTimeSlots-55f2513e',
});
// Add route for Meeting-b7fbf4a7
addRoute({
  path: '/Meeting-b7fbf4a7',
  label: 'Meeting-b7fbf4a7',
  componentId: 'Meeting-b7fbf4a7',
});
// Add route for BookingRedirectEmailNotification-fb55611d
addRoute({
  path: '/BookingRedirectEmailNotification-fb55611d',
  label: 'BookingRedirectEmailNotification-fb55611d',
  componentId: 'BookingRedirectEmailNotification-fb55611d',
});
// Add route for LastUsed-c5c81e3f
addRoute({
  path: '/LastUsed-c5c81e3f',
  label: 'LastUsed-c5c81e3f',
  componentId: 'LastUsed-c5c81e3f',
});
// Add route for AdminOrgTable-bd0a7fbc
addRoute({
  path: '/AdminOrgTable-bd0a7fbc',
  label: 'AdminOrgTable-bd0a7fbc',
  componentId: 'AdminOrgTable-bd0a7fbc',
});
// Add route for UserAvatarGroup-bf7f904b
addRoute({
  path: '/UserAvatarGroup-bf7f904b',
  label: 'UserAvatarGroup-bf7f904b',
  componentId: 'UserAvatarGroup-bf7f904b',
});
// Add route for HoverCard-f32f8bfd
addRoute({
  path: '/HoverCard-f32f8bfd',
  label: 'HoverCard-f32f8bfd',
  componentId: 'HoverCard-f32f8bfd',
});
// Add route for RequiresConfirmationController-c37a5298
addRoute({
  path: '/RequiresConfirmationController-c37a5298',
  label: 'RequiresConfirmationController-c37a5298',
  componentId: 'RequiresConfirmationController-c37a5298',
});
// Add route for EventAITab-fb5bb96f
addRoute({
  path: '/EventAITab-fb5bb96f',
  label: 'EventAITab-fb5bb96f',
  componentId: 'EventAITab-fb5bb96f',
});
// Add route for NumberInput-f4982884
addRoute({
  path: '/NumberInput-f4982884',
  label: 'NumberInput-f4982884',
  componentId: 'NumberInput-f4982884',
});
// Add route for TeamAvailabilityModal-64727773
addRoute({
  path: '/TeamAvailabilityModal-64727773',
  label: 'TeamAvailabilityModal-64727773',
  componentId: 'TeamAvailabilityModal-64727773',
});
// Add route for SheetHeader-fc56f4fa
addRoute({
  path: '/SheetHeader-fc56f4fa',
  label: 'SheetHeader-fc56f4fa',
  componentId: 'SheetHeader-fc56f4fa',
});
// Add route for ForgotPassword-66cb74df
addRoute({
  path: '/ForgotPassword-66cb74df',
  label: 'ForgotPassword-66cb74df',
  componentId: 'ForgotPassword-66cb74df',
});
// Add route for EditForm-058dd038
addRoute({
  path: '/EditForm-058dd038',
  label: 'EditForm-058dd038',
  componentId: 'EditForm-058dd038',
});
// Add route for OnboardingPage-b821d050
addRoute({
  path: '/OnboardingPage-b821d050',
  label: 'OnboardingPage-b821d050',
  componentId: 'OnboardingPage-b821d050',
});
// Add route for CreateDirectory-9d0bfc46
addRoute({
  path: '/CreateDirectory-9d0bfc46',
  label: 'CreateDirectory-9d0bfc46',
  componentId: 'CreateDirectory-9d0bfc46',
});
// Add route for Page-c2a14168
addRoute({
  path: '/Page-c2a14168',
  label: 'Page-c2a14168',
  componentId: 'Page-c2a14168',
});
// Add route for OAuthClientCard-f235550d
addRoute({
  path: '/OAuthClientCard-f235550d',
  label: 'OAuthClientCard-f235550d',
  componentId: 'OAuthClientCard-f235550d',
});
// Add route for BooleanToggleGroupField-8681b1b9
addRoute({
  path: '/BooleanToggleGroupField-8681b1b9',
  label: 'BooleanToggleGroupField-8681b1b9',
  componentId: 'BooleanToggleGroupField-8681b1b9',
});
// Add route for Generic-b7fbf4a7
addRoute({
  path: '/Generic-b7fbf4a7',
  label: 'Generic-b7fbf4a7',
  componentId: 'Generic-b7fbf4a7',
});
// Add route for StepCard-d4735813
addRoute({
  path: '/StepCard-d4735813',
  label: 'StepCard-d4735813',
  componentId: 'StepCard-d4735813',
});
// Add route for SelectWithValidation-51e1c4ea
addRoute({
  path: '/SelectWithValidation-51e1c4ea',
  label: 'SelectWithValidation-51e1c4ea',
  componentId: 'SelectWithValidation-51e1c4ea',
});
// Add route for FilterCheckboxFieldsContainer-5f2b1d9e
addRoute({
  path: '/FilterCheckboxFieldsContainer-5f2b1d9e',
  label: 'FilterCheckboxFieldsContainer-5f2b1d9e',
  componentId: 'FilterCheckboxFieldsContainer-5f2b1d9e',
});
// Add route for IncompleteBookingPage-36050490
addRoute({
  path: '/IncompleteBookingPage-36050490',
  label: 'IncompleteBookingPage-36050490',
  componentId: 'IncompleteBookingPage-36050490',
});
// Add route for CheckedTeamSelect-9c54e087
addRoute({
  path: '/CheckedTeamSelect-9c54e087',
  label: 'CheckedTeamSelect-9c54e087',
  componentId: 'CheckedTeamSelect-9c54e087',
});
// Add route for Verify-d9e5dcf3
addRoute({
  path: '/Verify-d9e5dcf3',
  label: 'Verify-d9e5dcf3',
  componentId: 'Verify-d9e5dcf3',
});
// Add route for Dropdown-1e023307
addRoute({
  path: '/Dropdown-1e023307',
  label: 'Dropdown-1e023307',
  componentId: 'Dropdown-1e023307',
});
// Add route for ServerPageWrapper-77154dee
addRoute({
  path: '/ServerPageWrapper-77154dee',
  label: 'ServerPageWrapper-77154dee',
  componentId: 'ServerPageWrapper-77154dee',
});
// Add route for RoutingFormOptions-3779c3f9
addRoute({
  path: '/RoutingFormOptions-3779c3f9',
  label: 'RoutingFormOptions-3779c3f9',
  componentId: 'RoutingFormOptions-3779c3f9',
});
// Add route for MembersPage-7bfad88c
addRoute({
  path: '/MembersPage-7bfad88c',
  label: 'MembersPage-7bfad88c',
  componentId: 'MembersPage-7bfad88c',
});
// Add route for BooleanToggleGroup-8681b1b9
addRoute({
  path: '/BooleanToggleGroup-8681b1b9',
  label: 'BooleanToggleGroup-8681b1b9',
  componentId: 'BooleanToggleGroup-8681b1b9',
});
// Add route for SelectWithValidation-038f8497
addRoute({
  path: '/SelectWithValidation-038f8497',
  label: 'SelectWithValidation-038f8497',
  componentId: 'SelectWithValidation-038f8497',
});
// Add route for EditWeightsForAllTeamMembers-dfb48519
addRoute({
  path: '/EditWeightsForAllTeamMembers-dfb48519',
  label: 'EditWeightsForAllTeamMembers-dfb48519',
  componentId: 'EditWeightsForAllTeamMembers-dfb48519',
});
// Add route for DialogFooter-57f794de
addRoute({
  path: '/DialogFooter-57f794de',
  label: 'DialogFooter-57f794de',
  componentId: 'DialogFooter-57f794de',
});
// Add route for ImageUploader-0be00c2e
addRoute({
  path: '/ImageUploader-0be00c2e',
  label: 'ImageUploader-0be00c2e',
  componentId: 'ImageUploader-0be00c2e',
});
// Add route for ServerPage-6b5e188a
addRoute({
  path: '/ServerPage-6b5e188a',
  label: 'ServerPage-6b5e188a',
  componentId: 'ServerPage-6b5e188a',
});
// Add route for ProfileImpersonationViewWrapper-ba3d27b4
addRoute({
  path: '/ProfileImpersonationViewWrapper-ba3d27b4',
  label: 'ProfileImpersonationViewWrapper-ba3d27b4',
  componentId: 'ProfileImpersonationViewWrapper-ba3d27b4',
});
// Add route for ServerPageWrapper-7777124c
addRoute({
  path: '/ServerPageWrapper-7777124c',
  label: 'ServerPageWrapper-7777124c',
  componentId: 'ServerPageWrapper-7777124c',
});
// Add route for ScrollableArea-eecb6e07
addRoute({
  path: '/ScrollableArea-eecb6e07',
  label: 'ScrollableArea-eecb6e07',
  componentId: 'ScrollableArea-eecb6e07',
});
// Add route for HorizontalLines-a6bacd5a
addRoute({
  path: '/HorizontalLines-a6bacd5a',
  label: 'HorizontalLines-a6bacd5a',
  componentId: 'HorizontalLines-a6bacd5a',
});
// Add route for Dialog-3556910a
addRoute({
  path: '/Dialog-3556910a',
  label: 'Dialog-3556910a',
  componentId: 'Dialog-3556910a',
});
// Add route for ServerPage-ca832dc2
addRoute({
  path: '/ServerPage-ca832dc2',
  label: 'ServerPage-ca832dc2',
  componentId: 'ServerPage-ca832dc2',
});
// Add route for MemberInvitationModal-f8e9969c
addRoute({
  path: '/MemberInvitationModal-f8e9969c',
  label: 'MemberInvitationModal-f8e9969c',
  componentId: 'MemberInvitationModal-f8e9969c',
});
// Add route for ComponentForField-3d514742
addRoute({
  path: '/ComponentForField-3d514742',
  label: 'ComponentForField-3d514742',
  componentId: 'ComponentForField-3d514742',
});
// Add route for MassAssignAttributesBulkAction-ddc60947
addRoute({
  path: '/MassAssignAttributesBulkAction-ddc60947',
  label: 'MassAssignAttributesBulkAction-ddc60947',
  componentId: 'MassAssignAttributesBulkAction-ddc60947',
});
// Add route for OtherTeamsListing-61be7c76
addRoute({
  path: '/OtherTeamsListing-61be7c76',
  label: 'OtherTeamsListing-61be7c76',
  componentId: 'OtherTeamsListing-61be7c76',
});
// Add route for OrganizerPaymentRefundFailedEmail-68ded3c3
addRoute({
  path: '/OrganizerPaymentRefundFailedEmail-68ded3c3',
  label: 'OrganizerPaymentRefundFailedEmail-68ded3c3',
  componentId: 'OrganizerPaymentRefundFailedEmail-68ded3c3',
});
// Add route for LineChart-49bee913
addRoute({
  path: '/LineChart-49bee913',
  label: 'LineChart-49bee913',
  componentId: 'LineChart-49bee913',
});
// Add route for ZapierSetup-8dc19455
addRoute({
  path: '/ZapierSetup-8dc19455',
  label: 'ZapierSetup-8dc19455',
  componentId: 'ZapierSetup-8dc19455',
});
// Add route for SlugReplacementEmail-89c5a52e
addRoute({
  path: '/SlugReplacementEmail-89c5a52e',
  label: 'SlugReplacementEmail-89c5a52e',
  componentId: 'SlugReplacementEmail-89c5a52e',
});
// Add route for Success-6a3db11b
addRoute({
  path: '/Success-6a3db11b',
  label: 'Success-6a3db11b',
  componentId: 'Success-6a3db11b',
});
// Add route for Page-12c90068
addRoute({
  path: '/Page-12c90068',
  label: 'Page-12c90068',
  componentId: 'Page-12c90068',
});
// Add route for V2BaseEmailHtml-e543661b
addRoute({
  path: '/V2BaseEmailHtml-e543661b',
  label: 'V2BaseEmailHtml-e543661b',
  componentId: 'V2BaseEmailHtml-e543661b',
});
// Add route for AdminAppsList-7bb059eb
addRoute({
  path: '/AdminAppsList-7bb059eb',
  label: 'AdminAppsList-7bb059eb',
  componentId: 'AdminAppsList-7bb059eb',
});
// Add route for UnpublishedEntity-733b4827
addRoute({
  path: '/UnpublishedEntity-733b4827',
  label: 'UnpublishedEntity-733b4827',
  componentId: 'UnpublishedEntity-733b4827',
});
// Add route for DataTableWrapper-0ce9febf
addRoute({
  path: '/DataTableWrapper-0ce9febf',
  label: 'DataTableWrapper-0ce9febf',
  componentId: 'DataTableWrapper-0ce9febf',
});
// Add route for LicenseRequired-39958e98
addRoute({
  path: '/LicenseRequired-39958e98',
  label: 'LicenseRequired-39958e98',
  componentId: 'LicenseRequired-39958e98',
});
// Add route for Page-81d5b705
addRoute({
  path: '/Page-81d5b705',
  label: 'Page-81d5b705',
  componentId: 'Page-81d5b705',
});
// Add route for ServerPageWrapper-8a40c4bb
addRoute({
  path: '/ServerPageWrapper-8a40c4bb',
  label: 'ServerPageWrapper-8a40c4bb',
  componentId: 'ServerPageWrapper-8a40c4bb',
});
// Add route for AvailabilitySettingsPlatformWrapper-758a9e94
addRoute({
  path: '/AvailabilitySettingsPlatformWrapper-758a9e94',
  label: 'AvailabilitySettingsPlatformWrapper-758a9e94',
  componentId: 'AvailabilitySettingsPlatformWrapper-758a9e94',
});
// Add route for BrokenIntegrationEmail-d4741ddd
addRoute({
  path: '/BrokenIntegrationEmail-d4741ddd',
  label: 'BrokenIntegrationEmail-d4741ddd',
  componentId: 'BrokenIntegrationEmail-d4741ddd',
});
// Add route for AttendeeRequestEmail-448cee51
addRoute({
  path: '/AttendeeRequestEmail-448cee51',
  label: 'AttendeeRequestEmail-448cee51',
  componentId: 'AttendeeRequestEmail-448cee51',
});
// Add route for CommandSeparator-8539b5ed
addRoute({
  path: '/CommandSeparator-8539b5ed',
  label: 'CommandSeparator-8539b5ed',
  componentId: 'CommandSeparator-8539b5ed',
});
// Add route for WebhooksViewServerWrapper-32c9a7fc
addRoute({
  path: '/WebhooksViewServerWrapper-32c9a7fc',
  label: 'WebhooksViewServerWrapper-32c9a7fc',
  componentId: 'WebhooksViewServerWrapper-32c9a7fc',
});
// Add route for AvailabilitySliderTable-2b315953
addRoute({
  path: '/AvailabilitySliderTable-2b315953',
  label: 'AvailabilitySliderTable-2b315953',
  componentId: 'AvailabilitySliderTable-2b315953',
});
// Add route for WorkspacePlatformsPage-672b8282
addRoute({
  path: '/WorkspacePlatformsPage-672b8282',
  label: 'WorkspacePlatformsPage-672b8282',
  componentId: 'WorkspacePlatformsPage-672b8282',
});
// Add route for RerouteDialog-88c1be28
addRoute({
  path: '/RerouteDialog-88c1be28',
  label: 'RerouteDialog-88c1be28',
  componentId: 'RerouteDialog-88c1be28',
});
// Add route for Type-733465e2
addRoute({
  path: '/Type-733465e2',
  label: 'Type-733465e2',
  componentId: 'Type-733465e2',
});
// Add route for EventTypeEmbedButton-570f8f7e
addRoute({
  path: '/EventTypeEmbedButton-570f8f7e',
  label: 'EventTypeEmbedButton-570f8f7e',
  componentId: 'EventTypeEmbedButton-570f8f7e',
});
// Add route for SkeletonLoader-8b75522f
addRoute({
  path: '/SkeletonLoader-8b75522f',
  label: 'SkeletonLoader-8b75522f',
  componentId: 'SkeletonLoader-8b75522f',
});
// Add route for ProfileViewWrapper-095f7568
addRoute({
  path: '/ProfileViewWrapper-095f7568',
  label: 'ProfileViewWrapper-095f7568',
  componentId: 'ProfileViewWrapper-095f7568',
});
// Add route for SheetBody-fc56f4fa
addRoute({
  path: '/SheetBody-fc56f4fa',
  label: 'SheetBody-fc56f4fa',
  componentId: 'SheetBody-fc56f4fa',
});
// Add route for FormActionsProvider-a7afc660
addRoute({
  path: '/FormActionsProvider-a7afc660',
  label: 'FormActionsProvider-a7afc660',
  componentId: 'FormActionsProvider-a7afc660',
});
// Add route for SetupInformation-abc98e35
addRoute({
  path: '/SetupInformation-abc98e35',
  label: 'SetupInformation-abc98e35',
  componentId: 'SetupInformation-abc98e35',
});
// Add route for UserProfile-2b7f371e
addRoute({
  path: '/UserProfile-2b7f371e',
  label: 'UserProfile-2b7f371e',
  componentId: 'UserProfile-2b7f371e',
});
// Add route for StepHeader-eb43ba66
addRoute({
  path: '/StepHeader-eb43ba66',
  label: 'StepHeader-eb43ba66',
  componentId: 'StepHeader-eb43ba66',
});
// Add route for ClearFiltersButton-0419b6cb
addRoute({
  path: '/ClearFiltersButton-0419b6cb',
  label: 'ClearFiltersButton-0419b6cb',
  componentId: 'ClearFiltersButton-0419b6cb',
});
// Add route for KBarRoot-56f2316f
addRoute({
  path: '/KBarRoot-56f2316f',
  label: 'KBarRoot-56f2316f',
  componentId: 'KBarRoot-56f2316f',
});
// Add route for DataTableProvider-3efc4c43
addRoute({
  path: '/DataTableProvider-3efc4c43',
  label: 'DataTableProvider-3efc4c43',
  componentId: 'DataTableProvider-3efc4c43',
});
// Add route for DisconnectIntegrationComponent-e32bd45f
addRoute({
  path: '/DisconnectIntegrationComponent-e32bd45f',
  label: 'DisconnectIntegrationComponent-e32bd45f',
  componentId: 'DisconnectIntegrationComponent-e32bd45f',
});
// Add route for EventTypeAppCard-f1bf7cbd
addRoute({
  path: '/EventTypeAppCard-f1bf7cbd',
  label: 'EventTypeAppCard-f1bf7cbd',
  componentId: 'EventTypeAppCard-f1bf7cbd',
});
// Add route for EnterprisePage-56710ce2
addRoute({
  path: '/EnterprisePage-56710ce2',
  label: 'EnterprisePage-56710ce2',
  componentId: 'EnterprisePage-56710ce2',
});
// Add route for OtherTeamProfileView-65bd01a0
addRoute({
  path: '/OtherTeamProfileView-65bd01a0',
  label: 'OtherTeamProfileView-65bd01a0',
  componentId: 'OtherTeamProfileView-65bd01a0',
});
// Add route for EventTypeAppCard-fa0052d1
addRoute({
  path: '/EventTypeAppCard-fa0052d1',
  label: 'EventTypeAppCard-fa0052d1',
  componentId: 'EventTypeAppCard-fa0052d1',
});
// Add route for KPICard-b6916eef
addRoute({
  path: '/KPICard-b6916eef',
  label: 'KPICard-b6916eef',
  componentId: 'KPICard-b6916eef',
});
// Add route for OAuthView-1aea8abc
addRoute({
  path: '/OAuthView-1aea8abc',
  label: 'OAuthView-1aea8abc',
  componentId: 'OAuthView-1aea8abc',
});
// Add route for TextField-85de7318
addRoute({
  path: '/TextField-85de7318',
  label: 'TextField-85de7318',
  componentId: 'TextField-85de7318',
});
// Add route for Provider-bf26ee5b
addRoute({
  path: '/Provider-bf26ee5b',
  label: 'Provider-bf26ee5b',
  componentId: 'Provider-bf26ee5b',
});
// Add route for Editor-a1120813
addRoute({
  path: '/Editor-a1120813',
  label: 'Editor-a1120813',
  componentId: 'Editor-a1120813',
});
// Add route for InputFieldWithSelect-429e5e69
addRoute({
  path: '/InputFieldWithSelect-429e5e69',
  label: 'InputFieldWithSelect-429e5e69',
  componentId: 'InputFieldWithSelect-429e5e69',
});
// Add route for EventTypeAppSettingsInterface-bc947c42
addRoute({
  path: '/EventTypeAppSettingsInterface-bc947c42',
  label: 'EventTypeAppSettingsInterface-bc947c42',
  componentId: 'EventTypeAppSettingsInterface-bc947c42',
});
// Add route for DropdownMenuPortal-1e023307
addRoute({
  path: '/DropdownMenuPortal-1e023307',
  label: 'DropdownMenuPortal-1e023307',
  componentId: 'DropdownMenuPortal-1e023307',
});
// Add route for SpeculationRules-e636aa0e
addRoute({
  path: '/SpeculationRules-e636aa0e',
  label: 'SpeculationRules-e636aa0e',
  componentId: 'SpeculationRules-e636aa0e',
});
// Add route for PlainChat-6515ffcb
addRoute({
  path: '/PlainChat-6515ffcb',
  label: 'PlainChat-6515ffcb',
  componentId: 'PlainChat-6515ffcb',
});
// Add route for AppearancePage-3f227771
addRoute({
  path: '/AppearancePage-3f227771',
  label: 'AppearancePage-3f227771',
  componentId: 'AppearancePage-3f227771',
});
// Add route for AccountDialog-a48e285e
addRoute({
  path: '/AccountDialog-a48e285e',
  label: 'AccountDialog-a48e285e',
  componentId: 'AccountDialog-a48e285e',
});
// Add route for TimezoneSelectComponent-bf133f2d
addRoute({
  path: '/TimezoneSelectComponent-bf133f2d',
  label: 'TimezoneSelectComponent-bf133f2d',
  componentId: 'TimezoneSelectComponent-bf133f2d',
});
// Add route for MetaProvider-80e7bf29
addRoute({
  path: '/MetaProvider-80e7bf29',
  label: 'MetaProvider-80e7bf29',
  componentId: 'MetaProvider-80e7bf29',
});
// Add route for InstantEventController-06a6e53d
addRoute({
  path: '/InstantEventController-06a6e53d',
  label: 'InstantEventController-06a6e53d',
  componentId: 'InstantEventController-06a6e53d',
});
// Add route for FeedbackEmail-87483e06
addRoute({
  path: '/FeedbackEmail-87483e06',
  label: 'FeedbackEmail-87483e06',
  componentId: 'FeedbackEmail-87483e06',
});
// Add route for DataTable-86e34381
addRoute({
  path: '/DataTable-86e34381',
  label: 'DataTable-86e34381',
  componentId: 'DataTable-86e34381',
});
// Add route for Apps-829a27ef
addRoute({
  path: '/Apps-829a27ef',
  label: 'Apps-829a27ef',
  componentId: 'Apps-829a27ef',
});
// Add route for Page-a2eb37b2
addRoute({
  path: '/Page-a2eb37b2',
  label: 'Page-a2eb37b2',
  componentId: 'Page-a2eb37b2',
});
// Add route for ResponseEmail-5392b7c9
addRoute({
  path: '/ResponseEmail-5392b7c9',
  label: 'ResponseEmail-5392b7c9',
  componentId: 'ResponseEmail-5392b7c9',
});
// Add route for TroubleshooterPage-c37a576b
addRoute({
  path: '/TroubleshooterPage-c37a576b',
  label: 'TroubleshooterPage-c37a576b',
  componentId: 'TroubleshooterPage-c37a576b',
});
// Add route for TestFormDialog-64eaf91e
addRoute({
  path: '/TestFormDialog-64eaf91e',
  label: 'TestFormDialog-64eaf91e',
  componentId: 'TestFormDialog-64eaf91e',
});
// Add route for IconsPage-56dc2b77
addRoute({
  path: '/IconsPage-56dc2b77',
  label: 'IconsPage-56dc2b77',
  componentId: 'IconsPage-56dc2b77',
});
// Add route for Authorize-cd9c6675
addRoute({
  path: '/Authorize-cd9c6675',
  label: 'Authorize-cd9c6675',
  componentId: 'Authorize-cd9c6675',
});
// Add route for EventTypeAppCard-de0dc5d6
addRoute({
  path: '/EventTypeAppCard-de0dc5d6',
  label: 'EventTypeAppCard-de0dc5d6',
  componentId: 'EventTypeAppCard-de0dc5d6',
});
// Add route for OrganizerCancelledEmail-dd3b83d3
addRoute({
  path: '/OrganizerCancelledEmail-dd3b83d3',
  label: 'OrganizerCancelledEmail-dd3b83d3',
  componentId: 'OrganizerCancelledEmail-dd3b83d3',
});
// Add route for BaseScheduledEmail-0dd17f7f
addRoute({
  path: '/BaseScheduledEmail-0dd17f7f',
  label: 'BaseScheduledEmail-0dd17f7f',
  componentId: 'BaseScheduledEmail-0dd17f7f',
});
// Add route for useLockedFieldsManager-40a865c1
addRoute({
  path: '/useLockedFieldsManager-40a865c1',
  label: 'useLockedFieldsManager-40a865c1',
  componentId: 'useLockedFieldsManager-40a865c1',
});
// Add route for EventTypeAppCard-07ffbfd6
addRoute({
  path: '/EventTypeAppCard-07ffbfd6',
  label: 'EventTypeAppCard-07ffbfd6',
  componentId: 'EventTypeAppCard-07ffbfd6',
});
// Add route for Page-51e8aa20
addRoute({
  path: '/Page-51e8aa20',
  label: 'Page-51e8aa20',
  componentId: 'Page-51e8aa20',
});
// Add route for HorizontalTabs-bad1e453
addRoute({
  path: '/HorizontalTabs-bad1e453',
  label: 'HorizontalTabs-bad1e453',
  componentId: 'HorizontalTabs-bad1e453',
});
// Add route for SheetClose-fc56f4fa
addRoute({
  path: '/SheetClose-fc56f4fa',
  label: 'SheetClose-fc56f4fa',
  componentId: 'SheetClose-fc56f4fa',
});
// Add route for Header-27c92ef1
addRoute({
  path: '/Header-27c92ef1',
  label: 'Header-27c92ef1',
  componentId: 'Header-27c92ef1',
});
// Add route for EditWebhookView-e331bb3f
addRoute({
  path: '/EditWebhookView-e331bb3f',
  label: 'EditWebhookView-e331bb3f',
  componentId: 'EditWebhookView-e331bb3f',
});
// Add route for MakeSetup-59f34b96
addRoute({
  path: '/MakeSetup-59f34b96',
  label: 'MakeSetup-59f34b96',
  componentId: 'MakeSetup-59f34b96',
});
// Add route for WarningToast-75615def
addRoute({
  path: '/WarningToast-75615def',
  label: 'WarningToast-75615def',
  componentId: 'WarningToast-75615def',
});
// Add route for ProfileView-6773ab0f
addRoute({
  path: '/ProfileView-6773ab0f',
  label: 'ProfileView-6773ab0f',
  componentId: 'ProfileView-6773ab0f',
});
// Add route for LocationSelect-e30dfec2
addRoute({
  path: '/LocationSelect-e30dfec2',
  label: 'LocationSelect-e30dfec2',
  componentId: 'LocationSelect-e30dfec2',
});
// Add route for Loader-1e50c0b0
addRoute({
  path: '/Loader-1e50c0b0',
  label: 'Loader-1e50c0b0',
  componentId: 'Loader-1e50c0b0',
});
// Add route for CardInsights-501fd003
addRoute({
  path: '/CardInsights-501fd003',
  label: 'CardInsights-501fd003',
  componentId: 'CardInsights-501fd003',
});
// Add route for EventTypeWebWrapper-842057dd
addRoute({
  path: '/EventTypeWebWrapper-842057dd',
  label: 'EventTypeWebWrapper-842057dd',
  componentId: 'EventTypeWebWrapper-842057dd',
});
// Add route for UserForm-0b6bbe34
addRoute({
  path: '/UserForm-0b6bbe34',
  label: 'UserForm-0b6bbe34',
  componentId: 'UserForm-0b6bbe34',
});
// Add route for DayRanges-9ac5b094
addRoute({
  path: '/DayRanges-9ac5b094',
  label: 'DayRanges-9ac5b094',
  componentId: 'DayRanges-9ac5b094',
});
// Add route for ChooseLicense-9d9785e5
addRoute({
  path: '/ChooseLicense-9d9785e5',
  label: 'ChooseLicense-9d9785e5',
  componentId: 'ChooseLicense-9d9785e5',
});
// Add route for MultiSelectFilterOptions-bf063057
addRoute({
  path: '/MultiSelectFilterOptions-bf063057',
  label: 'MultiSelectFilterOptions-bf063057',
  componentId: 'MultiSelectFilterOptions-bf063057',
});
// Add route for FormStep-0e8618aa
addRoute({
  path: '/FormStep-0e8618aa',
  label: 'FormStep-0e8618aa',
  componentId: 'FormStep-0e8618aa',
});
// Add route for Type-8457f971
addRoute({
  path: '/Type-8457f971',
  label: 'Type-8457f971',
  componentId: 'Type-8457f971',
});
// Add route for ServerPage-4869ecb4
addRoute({
  path: '/ServerPage-4869ecb4',
  label: 'ServerPage-4869ecb4',
  componentId: 'ServerPage-4869ecb4',
});
// Add route for Credits-50986d36
addRoute({
  path: '/Credits-50986d36',
  label: 'Credits-50986d36',
  componentId: 'Credits-50986d36',
});
// Add route for Slider-f99c600e
addRoute({
  path: '/Slider-f99c600e',
  label: 'Slider-f99c600e',
  componentId: 'Slider-f99c600e',
});
// Add route for CalendarToggleContainer-fec9df03
addRoute({
  path: '/CalendarToggleContainer-fec9df03',
  label: 'CalendarToggleContainer-fec9df03',
  componentId: 'CalendarToggleContainer-fec9df03',
});
// Add route for Page-8a3eb745
addRoute({
  path: '/Page-8a3eb745',
  label: 'Page-8a3eb745',
  componentId: 'Page-8a3eb745',
});
// Add route for ViewRecordingsDialog-c22733cb
addRoute({
  path: '/ViewRecordingsDialog-c22733cb',
  label: 'ViewRecordingsDialog-c22733cb',
  componentId: 'ViewRecordingsDialog-c22733cb',
});
// Add route for MemberListItem-a9ce181d
addRoute({
  path: '/MemberListItem-a9ce181d',
  label: 'MemberListItem-a9ce181d',
  componentId: 'MemberListItem-a9ce181d',
});
// Add route for PasswordField-f4982884
addRoute({
  path: '/PasswordField-f4982884',
  label: 'PasswordField-f4982884',
  componentId: 'PasswordField-f4982884',
});
// Add route for ChangePasswordSection-ea025b84
addRoute({
  path: '/ChangePasswordSection-ea025b84',
  label: 'ChangePasswordSection-ea025b84',
  componentId: 'ChangePasswordSection-ea025b84',
});
// Add route for HoverCardTrigger-f32f8bfd
addRoute({
  path: '/HoverCardTrigger-f32f8bfd',
  label: 'HoverCardTrigger-f32f8bfd',
  componentId: 'HoverCardTrigger-f32f8bfd',
});
// Add route for MemberInvitationModalWithoutMembers-f8e9969c
addRoute({
  path: '/MemberInvitationModalWithoutMembers-f8e9969c',
  label: 'MemberInvitationModalWithoutMembers-f8e9969c',
  componentId: 'MemberInvitationModalWithoutMembers-f8e9969c',
});
// Add route for DataTableSkeleton-eaf48de6
addRoute({
  path: '/DataTableSkeleton-eaf48de6',
  label: 'DataTableSkeleton-eaf48de6',
  componentId: 'DataTableSkeleton-eaf48de6',
});
// Add route for Table-d8f2d822
addRoute({
  path: '/Table-d8f2d822',
  label: 'Table-d8f2d822',
  componentId: 'Table-d8f2d822',
});
// Add route for ServerPageWrapper-9209290e
addRoute({
  path: '/ServerPageWrapper-9209290e',
  label: 'ServerPageWrapper-9209290e',
  componentId: 'ServerPageWrapper-9209290e',
});
// Add route for ResponseValueCell-49378f29
addRoute({
  path: '/ResponseValueCell-49378f29',
  label: 'ResponseValueCell-49378f29',
  componentId: 'ResponseValueCell-49378f29',
});
// Add route for LayoutWrapper-721873e7
addRoute({
  path: '/LayoutWrapper-721873e7',
  label: 'LayoutWrapper-721873e7',
  componentId: 'LayoutWrapper-721873e7',
});
// Add route for DropdownItem-1e023307
addRoute({
  path: '/DropdownItem-1e023307',
  label: 'DropdownItem-1e023307',
  componentId: 'DropdownItem-1e023307',
});
// Add route for TurnstileWidget-fd83ba7c
addRoute({
  path: '/TurnstileWidget-fd83ba7c',
  label: 'TurnstileWidget-fd83ba7c',
  componentId: 'TurnstileWidget-fd83ba7c',
});
// Add route for ShellMain-fe9d1fd2
addRoute({
  path: '/ShellMain-fe9d1fd2',
  label: 'ShellMain-fe9d1fd2',
  componentId: 'ShellMain-fe9d1fd2',
});
// Add route for DatePickerWithRange-c4f5232a
addRoute({
  path: '/DatePickerWithRange-c4f5232a',
  label: 'DatePickerWithRange-c4f5232a',
  componentId: 'DatePickerWithRange-c4f5232a',
});
// Add route for ButtonOrLink-1e023307
addRoute({
  path: '/ButtonOrLink-1e023307',
  label: 'ButtonOrLink-1e023307',
  componentId: 'ButtonOrLink-1e023307',
});
// Add route for Steps-1cafbf36
addRoute({
  path: '/Steps-1cafbf36',
  label: 'Steps-1cafbf36',
  componentId: 'Steps-1cafbf36',
});
// Add route for DatePicker-a9624c54
addRoute({
  path: '/DatePicker-a9624c54',
  label: 'DatePicker-a9624c54',
  componentId: 'DatePicker-a9624c54',
});
// Add route for OrgTeamsFilter-7eacba61
addRoute({
  path: '/OrgTeamsFilter-7eacba61',
  label: 'OrgTeamsFilter-7eacba61',
  componentId: 'OrgTeamsFilter-7eacba61',
});
// Add route for InstallAppButton-80d9e418
addRoute({
  path: '/InstallAppButton-80d9e418',
  label: 'InstallAppButton-80d9e418',
  componentId: 'InstallAppButton-80d9e418',
});
// Add route for HavingTroubleFindingTime-989827cc
addRoute({
  path: '/HavingTroubleFindingTime-989827cc',
  label: 'HavingTroubleFindingTime-989827cc',
  componentId: 'HavingTroubleFindingTime-989827cc',
});
// Add route for OrganizationBanner-2019b246
addRoute({
  path: '/OrganizationBanner-2019b246',
  label: 'OrganizationBanner-2019b246',
  componentId: 'OrganizationBanner-2019b246',
});
// Add route for TableBody-d8f2d822
addRoute({
  path: '/TableBody-d8f2d822',
  label: 'TableBody-d8f2d822',
  componentId: 'TableBody-d8f2d822',
});
// Add route for DateOverrideInputDialog-863a7d8c
addRoute({
  path: '/DateOverrideInputDialog-863a7d8c',
  label: 'DateOverrideInputDialog-863a7d8c',
  componentId: 'DateOverrideInputDialog-863a7d8c',
});
// Add route for ServerPageWrapper-10f1a602
addRoute({
  path: '/ServerPageWrapper-10f1a602',
  label: 'ServerPageWrapper-10f1a602',
  componentId: 'ServerPageWrapper-10f1a602',
});
// Add route for ProfileView-5449a884
addRoute({
  path: '/ProfileView-5449a884',
  label: 'ProfileView-5449a884',
  componentId: 'ProfileView-5449a884',
});
// Add route for AddNewTeamMembersForm-5a80ea5b
addRoute({
  path: '/AddNewTeamMembersForm-5a80ea5b',
  label: 'AddNewTeamMembersForm-5a80ea5b',
  componentId: 'AddNewTeamMembersForm-5a80ea5b',
});
// Add route for EditUserSheet-8a9d3afb
addRoute({
  path: '/EditUserSheet-8a9d3afb',
  label: 'EditUserSheet-8a9d3afb',
  componentId: 'EditUserSheet-8a9d3afb',
});
// Add route for SettingsLayoutAppDirClient-b5242080
addRoute({
  path: '/SettingsLayoutAppDirClient-b5242080',
  label: 'SettingsLayoutAppDirClient-b5242080',
  componentId: 'SettingsLayoutAppDirClient-b5242080',
});
// Add route for EventOccurences-9b8ccb31
addRoute({
  path: '/EventOccurences-9b8ccb31',
  label: 'EventOccurences-9b8ccb31',
  componentId: 'EventOccurences-9b8ccb31',
});
// Add route for EventTypeAppCard-c2fd3d4e
addRoute({
  path: '/EventTypeAppCard-c2fd3d4e',
  label: 'EventTypeAppCard-c2fd3d4e',
  componentId: 'EventTypeAppCard-c2fd3d4e',
});
// Add route for SAMLLogin-02cdbc1f
addRoute({
  path: '/SAMLLogin-02cdbc1f',
  label: 'SAMLLogin-02cdbc1f',
  componentId: 'SAMLLogin-02cdbc1f',
});
// Add route for SecondaryEmailModal-2efa54a2
addRoute({
  path: '/SecondaryEmailModal-2efa54a2',
  label: 'SecondaryEmailModal-2efa54a2',
  componentId: 'SecondaryEmailModal-2efa54a2',
});
// Add route for TroubleshooterHeader-f4730804
addRoute({
  path: '/TroubleshooterHeader-f4730804',
  label: 'TroubleshooterHeader-f4730804',
  componentId: 'TroubleshooterHeader-f4730804',
});
// Add route for EventLimitsTab-99b7ab66
addRoute({
  path: '/EventLimitsTab-99b7ab66',
  label: 'EventLimitsTab-99b7ab66',
  componentId: 'EventLimitsTab-99b7ab66',
});
// Add route for EventTypeAppSettingsInterface-cf5327f1
addRoute({
  path: '/EventTypeAppSettingsInterface-cf5327f1',
  label: 'EventTypeAppSettingsInterface-cf5327f1',
  componentId: 'EventTypeAppSettingsInterface-cf5327f1',
});
// Add route for PaymentComponent-bab67fab
addRoute({
  path: '/PaymentComponent-bab67fab',
  label: 'PaymentComponent-bab67fab',
  componentId: 'PaymentComponent-bab67fab',
});
// Add route for LockedSwitch-40a865c1
addRoute({
  path: '/LockedSwitch-40a865c1',
  label: 'LockedSwitch-40a865c1',
  componentId: 'LockedSwitch-40a865c1',
});
// Add route for Avatar-72403f10
addRoute({
  path: '/Avatar-72403f10',
  label: 'Avatar-72403f10',
  componentId: 'Avatar-72403f10',
});
// Add route for Info-5df7a2ed
addRoute({
  path: '/Info-5df7a2ed',
  label: 'Info-5df7a2ed',
  componentId: 'Info-5df7a2ed',
});
// Add route for FieldsetLegend-f4982884
addRoute({
  path: '/FieldsetLegend-f4982884',
  label: 'FieldsetLegend-f4982884',
  componentId: 'FieldsetLegend-f4982884',
});
// Add route for Page-0d4ae93d
addRoute({
  path: '/Page-0d4ae93d',
  label: 'Page-0d4ae93d',
  componentId: 'Page-0d4ae93d',
});
// Add route for TextFilterOptions-c917d953
addRoute({
  path: '/TextFilterOptions-c917d953',
  label: 'TextFilterOptions-c917d953',
  componentId: 'TextFilterOptions-c917d953',
});
// Add route for DestinationCalendarSettingsWebWrapper-4e913c02
addRoute({
  path: '/DestinationCalendarSettingsWebWrapper-4e913c02',
  label: 'DestinationCalendarSettingsWebWrapper-4e913c02',
  componentId: 'DestinationCalendarSettingsWebWrapper-4e913c02',
});
// Add route for Troubleshooter-d123399c
addRoute({
  path: '/Troubleshooter-d123399c',
  label: 'Troubleshooter-d123399c',
  componentId: 'Troubleshooter-d123399c',
});
// Add route for MinutesField-11e67f04
addRoute({
  path: '/MinutesField-11e67f04',
  label: 'MinutesField-11e67f04',
  componentId: 'MinutesField-11e67f04',
});
// Add route for DynamicComponent-7f9b3e0d
addRoute({
  path: '/DynamicComponent-7f9b3e0d',
  label: 'DynamicComponent-7f9b3e0d',
  componentId: 'DynamicComponent-7f9b3e0d',
});
// Add route for TeamSettingsViewWrapper-1171eeec
addRoute({
  path: '/TeamSettingsViewWrapper-1171eeec',
  label: 'TeamSettingsViewWrapper-1171eeec',
  componentId: 'TeamSettingsViewWrapper-1171eeec',
});
// Add route for InputComponent-e25c4bfb
addRoute({
  path: '/InputComponent-e25c4bfb',
  label: 'InputComponent-e25c4bfb',
  componentId: 'InputComponent-e25c4bfb',
});
// Add route for Slider-152179c5
addRoute({
  path: '/Slider-152179c5',
  label: 'Slider-152179c5',
  componentId: 'Slider-152179c5',
});
// Add route for SelectedCalendarsSettings-661332e5
addRoute({
  path: '/SelectedCalendarsSettings-661332e5',
  label: 'SelectedCalendarsSettings-661332e5',
  componentId: 'SelectedCalendarsSettings-661332e5',
});
// Add route for VerifyAccountEmail-808affc2
addRoute({
  path: '/VerifyAccountEmail-808affc2',
  label: 'VerifyAccountEmail-808affc2',
  componentId: 'VerifyAccountEmail-808affc2',
});
// Add route for ServerPage-f23f580b
addRoute({
  path: '/ServerPage-f23f580b',
  label: 'ServerPage-f23f580b',
  componentId: 'ServerPage-f23f580b',
});
// Add route for Input-85de7318
addRoute({
  path: '/Input-85de7318',
  label: 'Input-85de7318',
  componentId: 'Input-85de7318',
});
// Add route for IconLeading-b921da27
addRoute({
  path: '/IconLeading-b921da27',
  label: 'IconLeading-b921da27',
  componentId: 'IconLeading-b921da27',
});
// Add route for TimeTimeUnitInput-20d6e900
addRoute({
  path: '/TimeTimeUnitInput-20d6e900',
  label: 'TimeTimeUnitInput-20d6e900',
  componentId: 'TimeTimeUnitInput-20d6e900',
});
// Add route for DatePicker-20d22580
addRoute({
  path: '/DatePicker-20d22580',
  label: 'DatePicker-20d22580',
  componentId: 'DatePicker-20d22580',
});
// Add route for Shell-fe9d1fd2
addRoute({
  path: '/Shell-fe9d1fd2',
  label: 'Shell-fe9d1fd2',
  componentId: 'Shell-fe9d1fd2',
});
// Add route for AppCard-fa80d75d
addRoute({
  path: '/AppCard-fa80d75d',
  label: 'AppCard-fa80d75d',
  componentId: 'AppCard-fa80d75d',
});
// Add route for EmailSchedulingBodyDivider-898c9fde
addRoute({
  path: '/EmailSchedulingBodyDivider-898c9fde',
  label: 'EmailSchedulingBodyDivider-898c9fde',
  componentId: 'EmailSchedulingBodyDivider-898c9fde',
});
// Add route for EventRecurringWebWrapper-f051a4e4
addRoute({
  path: '/EventRecurringWebWrapper-f051a4e4',
  label: 'EventRecurringWebWrapper-f051a4e4',
  componentId: 'EventRecurringWebWrapper-f051a4e4',
});
// Add route for RadioAreaGroup-1c0a2c73
addRoute({
  path: '/RadioAreaGroup-1c0a2c73',
  label: 'RadioAreaGroup-1c0a2c73',
  componentId: 'RadioAreaGroup-1c0a2c73',
});
// Add route for IconGrid-1998b5df
addRoute({
  path: '/IconGrid-1998b5df',
  label: 'IconGrid-1998b5df',
  componentId: 'IconGrid-1998b5df',
});
// Add route for UsersEditView-4c764537
addRoute({
  path: '/UsersEditView-4c764537',
  label: 'UsersEditView-4c764537',
  componentId: 'UsersEditView-4c764537',
});
// Add route for ChargeCardDialog-59374fc0
addRoute({
  path: '/ChargeCardDialog-59374fc0',
  label: 'ChargeCardDialog-59374fc0',
  componentId: 'ChargeCardDialog-59374fc0',
});
// Add route for Shell-1851bb15
addRoute({
  path: '/Shell-1851bb15',
  label: 'Shell-1851bb15',
  componentId: 'Shell-1851bb15',
});
// Add route for SAMLSSO-d3edc55f
addRoute({
  path: '/SAMLSSO-d3edc55f',
  label: 'SAMLSSO-d3edc55f',
  componentId: 'SAMLSSO-d3edc55f',
});
// Add route for ModalContainer-85bcea0b
addRoute({
  path: '/ModalContainer-85bcea0b',
  label: 'ModalContainer-85bcea0b',
  componentId: 'ModalContainer-85bcea0b',
});
// Add route for CreateNewWebhookButton-239dbf52
addRoute({
  path: '/CreateNewWebhookButton-239dbf52',
  label: 'CreateNewWebhookButton-239dbf52',
  componentId: 'CreateNewWebhookButton-239dbf52',
});
// Add route for InputComponent-038f8497
addRoute({
  path: '/InputComponent-038f8497',
  label: 'InputComponent-038f8497',
  componentId: 'InputComponent-038f8497',
});
// Add route for DropdownMenuCheckboxItem-1e023307
addRoute({
  path: '/DropdownMenuCheckboxItem-1e023307',
  label: 'DropdownMenuCheckboxItem-1e023307',
  componentId: 'DropdownMenuCheckboxItem-1e023307',
});
// Add route for MeetingUnavailable-41ae776c
addRoute({
  path: '/MeetingUnavailable-41ae776c',
  label: 'MeetingUnavailable-41ae776c',
  componentId: 'MeetingUnavailable-41ae776c',
});
// Add route for AppDependencyComponent-a5b04c94
addRoute({
  path: '/AppDependencyComponent-a5b04c94',
  label: 'AppDependencyComponent-a5b04c94',
  componentId: 'AppDependencyComponent-a5b04c94',
});
// Add route for DialogPortal-3556910a
addRoute({
  path: '/DialogPortal-3556910a',
  label: 'DialogPortal-3556910a',
  componentId: 'DialogPortal-3556910a',
});
// Add route for ServerPage-2e79329a
addRoute({
  path: '/ServerPage-2e79329a',
  label: 'ServerPage-2e79329a',
  componentId: 'ServerPage-2e79329a',
});
// Add route for SelectSkeletonLoader-9bc6b401
addRoute({
  path: '/SelectSkeletonLoader-9bc6b401',
  label: 'SelectSkeletonLoader-9bc6b401',
  componentId: 'SelectSkeletonLoader-9bc6b401',
});
// Add route for Type-15207a43
addRoute({
  path: '/Type-15207a43',
  label: 'Type-15207a43',
  componentId: 'Type-15207a43',
});
// Add route for CustomEventTypeModal-a9032116
addRoute({
  path: '/CustomEventTypeModal-a9032116',
  label: 'CustomEventTypeModal-a9032116',
  componentId: 'CustomEventTypeModal-a9032116',
});
// Add route for InfoBadge-5843e765
addRoute({
  path: '/InfoBadge-5843e765',
  label: 'InfoBadge-5843e765',
  componentId: 'InfoBadge-5843e765',
});
// Add route for SingleAppPage-6ba5c8e9
addRoute({
  path: '/SingleAppPage-6ba5c8e9',
  label: 'SingleAppPage-6ba5c8e9',
  componentId: 'SingleAppPage-6ba5c8e9',
});
// Add route for StepConnectionLoader-b3458405
addRoute({
  path: '/StepConnectionLoader-b3458405',
  label: 'StepConnectionLoader-b3458405',
  componentId: 'StepConnectionLoader-b3458405',
});
// Add route for SelectedCalendarsSettingsWebWrapperSkeleton-3f8e6fb9
addRoute({
  path: '/SelectedCalendarsSettingsWebWrapperSkeleton-3f8e6fb9',
  label: 'SelectedCalendarsSettingsWebWrapperSkeleton-3f8e6fb9',
  componentId: 'SelectedCalendarsSettingsWebWrapperSkeleton-3f8e6fb9',
});
// Add route for CommandInput-8539b5ed
addRoute({
  path: '/CommandInput-8539b5ed',
  label: 'CommandInput-8539b5ed',
  componentId: 'CommandInput-8539b5ed',
});
// Add route for RecentFeedbackTable-efbc9864
addRoute({
  path: '/RecentFeedbackTable-efbc9864',
  label: 'RecentFeedbackTable-efbc9864',
  componentId: 'RecentFeedbackTable-efbc9864',
});
// Add route for SelectGifInput-48b1b6a9
addRoute({
  path: '/SelectGifInput-48b1b6a9',
  label: 'SelectGifInput-48b1b6a9',
  componentId: 'SelectGifInput-48b1b6a9',
});
// Add route for ServerPage-0df2140a
addRoute({
  path: '/ServerPage-0df2140a',
  label: 'ServerPage-0df2140a',
  componentId: 'ServerPage-0df2140a',
});
// Add route for SubHeadingTitleWithConnections-1b151bc7
addRoute({
  path: '/SubHeadingTitleWithConnections-1b151bc7',
  label: 'SubHeadingTitleWithConnections-1b151bc7',
  componentId: 'SubHeadingTitleWithConnections-1b151bc7',
});
// Add route for TwoFactor-b82ce90c
addRoute({
  path: '/TwoFactor-b82ce90c',
  label: 'TwoFactor-b82ce90c',
  componentId: 'TwoFactor-b82ce90c',
});
// Add route for CtaRow-4adac0a6
addRoute({
  path: '/CtaRow-4adac0a6',
  label: 'CtaRow-4adac0a6',
  componentId: 'CtaRow-4adac0a6',
});
// Add route for ServerPage-0c6053df
addRoute({
  path: '/ServerPage-0c6053df',
  label: 'ServerPage-0c6053df',
  componentId: 'ServerPage-0c6053df',
});
// Add route for InsightsPage-ee42b1f7
addRoute({
  path: '/InsightsPage-ee42b1f7',
  label: 'InsightsPage-ee42b1f7',
  componentId: 'InsightsPage-ee42b1f7',
});
// Add route for Page-043d5137
addRoute({
  path: '/Page-043d5137',
  label: 'Page-043d5137',
  componentId: 'Page-043d5137',
});
// Add route for UserDropdown-a94d1c45
addRoute({
  path: '/UserDropdown-a94d1c45',
  label: 'UserDropdown-a94d1c45',
  componentId: 'UserDropdown-a94d1c45',
});
// Add route for AverageEventDurationChart-ad2ee14d
addRoute({
  path: '/AverageEventDurationChart-ad2ee14d',
  label: 'AverageEventDurationChart-ad2ee14d',
  componentId: 'AverageEventDurationChart-ad2ee14d',
});
// Add route for CreateButtonWithTeamsList-da856c45
addRoute({
  path: '/CreateButtonWithTeamsList-da856c45',
  label: 'CreateButtonWithTeamsList-da856c45',
  componentId: 'CreateButtonWithTeamsList-da856c45',
});
// Add route for MemberList-d2c23317
addRoute({
  path: '/MemberList-d2c23317',
  label: 'MemberList-d2c23317',
  componentId: 'MemberList-d2c23317',
});
// Add route for Page-7eabd6b1
addRoute({
  path: '/Page-7eabd6b1',
  label: 'Page-7eabd6b1',
  componentId: 'Page-7eabd6b1',
});
// Add route for UsersAddView-a6f1805a
addRoute({
  path: '/UsersAddView-a6f1805a',
  label: 'UsersAddView-a6f1805a',
  componentId: 'UsersAddView-a6f1805a',
});
// Add route for AppConnectionItem-6f88c83c
addRoute({
  path: '/AppConnectionItem-6f88c83c',
  label: 'AppConnectionItem-6f88c83c',
  componentId: 'AppConnectionItem-6f88c83c',
});
// Add route for OrganizerRescheduledEmail-18137e22
addRoute({
  path: '/OrganizerRescheduledEmail-18137e22',
  label: 'OrganizerRescheduledEmail-18137e22',
  componentId: 'OrganizerRescheduledEmail-18137e22',
});
// Add route for Spinner-5112c619
addRoute({
  path: '/Spinner-5112c619',
  label: 'Spinner-5112c619',
  componentId: 'Spinner-5112c619',
});
// Add route for RoutingFormEmbedDialog-25bcc31a
addRoute({
  path: '/RoutingFormEmbedDialog-25bcc31a',
  label: 'RoutingFormEmbedDialog-25bcc31a',
  componentId: 'RoutingFormEmbedDialog-25bcc31a',
});
// Add route for MeetingNotStarted-dfafe71a
addRoute({
  path: '/MeetingNotStarted-dfafe71a',
  label: 'MeetingNotStarted-dfafe71a',
  componentId: 'MeetingNotStarted-dfafe71a',
});
// Add route for OrganisationAccountVerifyEmail-5c8c3059
addRoute({
  path: '/OrganisationAccountVerifyEmail-5c8c3059',
  label: 'OrganisationAccountVerifyEmail-5c8c3059',
  componentId: 'OrganisationAccountVerifyEmail-5c8c3059',
});
// Add route for Router-254954b4
addRoute({
  path: '/Router-254954b4',
  label: 'Router-254954b4',
  componentId: 'Router-254954b4',
});
// Add route for UsernameTextfield-a0153757
addRoute({
  path: '/UsernameTextfield-a0153757',
  label: 'UsernameTextfield-a0153757',
  componentId: 'UsernameTextfield-a0153757',
});
// Add route for Page-5813ba34
addRoute({
  path: '/Page-5813ba34',
  label: 'Page-5813ba34',
  componentId: 'Page-5813ba34',
});
// Add route for HeadSeo-2a61f1f1
addRoute({
  path: '/HeadSeo-2a61f1f1',
  label: 'HeadSeo-2a61f1f1',
  componentId: 'HeadSeo-2a61f1f1',
});
// Add route for AvailabilityCTA-44cb669d
addRoute({
  path: '/AvailabilityCTA-44cb669d',
  label: 'AvailabilityCTA-44cb669d',
  componentId: 'AvailabilityCTA-44cb669d',
});
// Add route for Table-c6f53f89
addRoute({
  path: '/Table-c6f53f89',
  label: 'Table-c6f53f89',
  componentId: 'Table-c6f53f89',
});
// Add route for PopularAppsSlider-93668114
addRoute({
  path: '/PopularAppsSlider-93668114',
  label: 'PopularAppsSlider-93668114',
  componentId: 'PopularAppsSlider-93668114',
});
// Add route for InsightsRoutingFormResponsesPage-9e81ca6c
addRoute({
  path: '/InsightsRoutingFormResponsesPage-9e81ca6c',
  label: 'InsightsRoutingFormResponsesPage-9e81ca6c',
  componentId: 'InsightsRoutingFormResponsesPage-9e81ca6c',
});
// Add route for Icon-80df850e
addRoute({
  path: '/Icon-80df850e',
  label: 'Icon-80df850e',
  componentId: 'Icon-80df850e',
});
// Add route for UsersTable-2d5d66f0
addRoute({
  path: '/UsersTable-2d5d66f0',
  label: 'UsersTable-2d5d66f0',
  componentId: 'UsersTable-2d5d66f0',
});
// Add route for BookerWebWrapper-c29ce3ed
addRoute({
  path: '/BookerWebWrapper-c29ce3ed',
  label: 'BookerWebWrapper-c29ce3ed',
  componentId: 'BookerWebWrapper-c29ce3ed',
});
// Add route for OrganizerRequestReminderEmail-7b66471d
addRoute({
  path: '/OrganizerRequestReminderEmail-7b66471d',
  label: 'OrganizerRequestReminderEmail-7b66471d',
  componentId: 'OrganizerRequestReminderEmail-7b66471d',
});
// Add route for OrgAttributesCreatePageWrapper-1fe4751b
addRoute({
  path: '/OrgAttributesCreatePageWrapper-1fe4751b',
  label: 'OrgAttributesCreatePageWrapper-1fe4751b',
  componentId: 'OrgAttributesCreatePageWrapper-1fe4751b',
});
// Add route for ListLinkItem-2afc4dd7
addRoute({
  path: '/ListLinkItem-2afc4dd7',
  label: 'ListLinkItem-2afc4dd7',
  componentId: 'ListLinkItem-2afc4dd7',
});
// Add route for ToolbarPlugin-a80184d6
addRoute({
  path: '/ToolbarPlugin-a80184d6',
  label: 'ToolbarPlugin-a80184d6',
  componentId: 'ToolbarPlugin-a80184d6',
});
// Add route for SideBarContainer-bdf69862
addRoute({
  path: '/SideBarContainer-bdf69862',
  label: 'SideBarContainer-bdf69862',
  componentId: 'SideBarContainer-bdf69862',
});
// Add route for Event-3de5b7ad
addRoute({
  path: '/Event-3de5b7ad',
  label: 'Event-3de5b7ad',
  componentId: 'Event-3de5b7ad',
});
// Add route for FormSkeleton-f1a08f21
addRoute({
  path: '/FormSkeleton-f1a08f21',
  label: 'FormSkeleton-f1a08f21',
  componentId: 'FormSkeleton-f1a08f21',
});
// Add route for ImpersonatingBanner-67020f6e
addRoute({
  path: '/ImpersonatingBanner-67020f6e',
  label: 'ImpersonatingBanner-67020f6e',
  componentId: 'ImpersonatingBanner-67020f6e',
});
// Add route for WebhookListSkeleton-31ecd22e
addRoute({
  path: '/WebhookListSkeleton-31ecd22e',
  label: 'WebhookListSkeleton-31ecd22e',
  componentId: 'WebhookListSkeleton-31ecd22e',
});
// Add route for BannerContainer-5ca73166
addRoute({
  path: '/BannerContainer-5ca73166',
  label: 'BannerContainer-5ca73166',
  componentId: 'BannerContainer-5ca73166',
});
// Add route for TroubleshooterListItemHeader-42bb11bc
addRoute({
  path: '/TroubleshooterListItemHeader-42bb11bc',
  label: 'TroubleshooterListItemHeader-42bb11bc',
  componentId: 'TroubleshooterListItemHeader-42bb11bc',
});
// Add route for FlagListingView-176423ea
addRoute({
  path: '/FlagListingView-176423ea',
  label: 'FlagListingView-176423ea',
  componentId: 'FlagListingView-176423ea',
});
// Add route for WorkflowDetailsPage-fae903c3
addRoute({
  path: '/WorkflowDetailsPage-fae903c3',
  label: 'WorkflowDetailsPage-fae903c3',
  componentId: 'WorkflowDetailsPage-fae903c3',
});
// Add route for SplitButton-3d2be6b9
addRoute({
  path: '/SplitButton-3d2be6b9',
  label: 'SplitButton-3d2be6b9',
  componentId: 'SplitButton-3d2be6b9',
});
// Add route for ImpersonationView-43da18c2
addRoute({
  path: '/ImpersonationView-43da18c2',
  label: 'ImpersonationView-43da18c2',
  componentId: 'ImpersonationView-43da18c2',
});
// Add route for VerifyEmailPage-ee41e03f
addRoute({
  path: '/VerifyEmailPage-ee41e03f',
  label: 'VerifyEmailPage-ee41e03f',
  componentId: 'VerifyEmailPage-ee41e03f',
});
// Add route for HitpayPaymentComponent-b67bb841
addRoute({
  path: '/HitpayPaymentComponent-b67bb841',
  label: 'HitpayPaymentComponent-b67bb841',
  componentId: 'HitpayPaymentComponent-b67bb841',
});
// Add route for HoverCardContent-f32f8bfd
addRoute({
  path: '/HoverCardContent-f32f8bfd',
  label: 'HoverCardContent-f32f8bfd',
  componentId: 'HoverCardContent-f32f8bfd',
});
// Add route for Page-89ec9727
addRoute({
  path: '/Page-89ec9727',
  label: 'Page-89ec9727',
  componentId: 'Page-89ec9727',
});
// Add route for TroubleshooterLayout-61b75ead
addRoute({
  path: '/TroubleshooterLayout-61b75ead',
  label: 'TroubleshooterLayout-61b75ead',
  componentId: 'TroubleshooterLayout-61b75ead',
});
// Add route for DestinationCalendarSelector-13916a22
addRoute({
  path: '/DestinationCalendarSelector-13916a22',
  label: 'DestinationCalendarSelector-13916a22',
  componentId: 'DestinationCalendarSelector-13916a22',
});
// Add route for EventTypePageWrapper-4199603c
addRoute({
  path: '/EventTypePageWrapper-4199603c',
  label: 'EventTypePageWrapper-4199603c',
  componentId: 'EventTypePageWrapper-4199603c',
});
// Add route for EventReservationSchema-8af5d16d
addRoute({
  path: '/EventReservationSchema-8af5d16d',
  label: 'EventReservationSchema-8af5d16d',
  componentId: 'EventReservationSchema-8af5d16d',
});
// Add route for OrganizationCreationEmail-1f9caed3
addRoute({
  path: '/OrganizationCreationEmail-1f9caed3',
  label: 'OrganizationCreationEmail-1f9caed3',
  componentId: 'OrganizationCreationEmail-1f9caed3',
});
// Add route for OptionComponent-13916a22
addRoute({
  path: '/OptionComponent-13916a22',
  label: 'OptionComponent-13916a22',
  componentId: 'OptionComponent-13916a22',
});
// Add route for EventTypeSelect-b66befa5
addRoute({
  path: '/EventTypeSelect-b66befa5',
  label: 'EventTypeSelect-b66befa5',
  componentId: 'EventTypeSelect-b66befa5',
});
// Add route for EventTitle-7c57289b
addRoute({
  path: '/EventTitle-7c57289b',
  label: 'EventTitle-7c57289b',
  componentId: 'EventTitle-7c57289b',
});
// Add route for LargeCalendar-8af388ab
addRoute({
  path: '/LargeCalendar-8af388ab',
  label: 'LargeCalendar-8af388ab',
  componentId: 'LargeCalendar-8af388ab',
});
// Add route for GroupNameCell-a96daedc
addRoute({
  path: '/GroupNameCell-a96daedc',
  label: 'GroupNameCell-a96daedc',
  componentId: 'GroupNameCell-a96daedc',
});
// Add route for RecentAppsSlider-bd1146f3
addRoute({
  path: '/RecentAppsSlider-bd1146f3',
  label: 'RecentAppsSlider-bd1146f3',
  componentId: 'RecentAppsSlider-bd1146f3',
});
// Add route for BaseTable-d09a866d
addRoute({
  path: '/BaseTable-d09a866d',
  label: 'BaseTable-d09a866d',
  componentId: 'BaseTable-d09a866d',
});
// Add route for EmptyScreen-09a2fafb
addRoute({
  path: '/EmptyScreen-09a2fafb',
  label: 'EmptyScreen-09a2fafb',
  componentId: 'EmptyScreen-09a2fafb',
});
// Add route for UserPage-96071f20
addRoute({
  path: '/UserPage-96071f20',
  label: 'UserPage-96071f20',
  componentId: 'UserPage-96071f20',
});
// Add route for AdminLayoutAppDir-ff17cc21
addRoute({
  path: '/AdminLayoutAppDir-ff17cc21',
  label: 'AdminLayoutAppDir-ff17cc21',
  componentId: 'AdminLayoutAppDir-ff17cc21',
});
// Add route for TopNavContainer-9354447d
addRoute({
  path: '/TopNavContainer-9354447d',
  label: 'TopNavContainer-9354447d',
  componentId: 'TopNavContainer-9354447d',
});
// Add route for Page-3a0ccfd9
addRoute({
  path: '/Page-3a0ccfd9',
  label: 'Page-3a0ccfd9',
  componentId: 'Page-3a0ccfd9',
});
// Add route for RoutingNavBar-772df229
addRoute({
  path: '/RoutingNavBar-772df229',
  label: 'RoutingNavBar-772df229',
  componentId: 'RoutingNavBar-772df229',
});
// Add route for ServerPage-50204489
addRoute({
  path: '/ServerPage-50204489',
  label: 'ServerPage-50204489',
  componentId: 'ServerPage-50204489',
});
// Add route for EventTypeDescriptionSafeHTML-638a47bc
addRoute({
  path: '/EventTypeDescriptionSafeHTML-638a47bc',
  label: 'EventTypeDescriptionSafeHTML-638a47bc',
  componentId: 'EventTypeDescriptionSafeHTML-638a47bc',
});
// Add route for DialogContent-57f794de
addRoute({
  path: '/DialogContent-57f794de',
  label: 'DialogContent-57f794de',
  componentId: 'DialogContent-57f794de',
});
// Add route for AttendeeDeclinedEmail-ed1a2153
addRoute({
  path: '/AttendeeDeclinedEmail-ed1a2153',
  label: 'AttendeeDeclinedEmail-ed1a2153',
  componentId: 'AttendeeDeclinedEmail-ed1a2153',
});
// Add route for AddMembersWithSwitchWrapper-9a2b037e
addRoute({
  path: '/AddMembersWithSwitchWrapper-9a2b037e',
  label: 'AddMembersWithSwitchWrapper-9a2b037e',
  componentId: 'AddMembersWithSwitchWrapper-9a2b037e',
});
// Add route for Card-d249e982
addRoute({
  path: '/Card-d249e982',
  label: 'Card-d249e982',
  componentId: 'Card-d249e982',
});
// Add route for Label-caa432b7
addRoute({
  path: '/Label-caa432b7',
  label: 'Label-caa432b7',
  componentId: 'Label-caa432b7',
});
// Add route for ServerPage-a0f761d1
addRoute({
  path: '/ServerPage-a0f761d1',
  label: 'ServerPage-a0f761d1',
  componentId: 'ServerPage-a0f761d1',
});
// Add route for DynamicLink-60790d4b
addRoute({
  path: '/DynamicLink-60790d4b',
  label: 'DynamicLink-60790d4b',
  componentId: 'DynamicLink-60790d4b',
});
// Add route for StepDone-1f68c816
addRoute({
  path: '/StepDone-1f68c816',
  label: 'StepDone-1f68c816',
  componentId: 'StepDone-1f68c816',
});
// Add route for LockEventTypeSwitch-4f21d87a
addRoute({
  path: '/LockEventTypeSwitch-4f21d87a',
  label: 'LockEventTypeSwitch-4f21d87a',
  componentId: 'LockEventTypeSwitch-4f21d87a',
});
// Add route for TeamInviteList-2b74412f
addRoute({
  path: '/TeamInviteList-2b74412f',
  label: 'TeamInviteList-2b74412f',
  componentId: 'TeamInviteList-2b74412f',
});
// Add route for AvailableTimesHeader-36a99c67
addRoute({
  path: '/AvailableTimesHeader-36a99c67',
  label: 'AvailableTimesHeader-36a99c67',
  componentId: 'AvailableTimesHeader-36a99c67',
});
// Add route for UserSettings-9bb65ca7
addRoute({
  path: '/UserSettings-9bb65ca7',
  label: 'UserSettings-9bb65ca7',
  componentId: 'UserSettings-9bb65ca7',
});
// Add route for OrgForm-07afb594
addRoute({
  path: '/OrgForm-07afb594',
  label: 'OrgForm-07afb594',
  componentId: 'OrgForm-07afb594',
});
// Add route for Error403-d2857dc8
addRoute({
  path: '/Error403-d2857dc8',
  label: 'Error403-d2857dc8',
  componentId: 'Error403-d2857dc8',
});
// Add route for CreateEventTypeForm-6ff803df
addRoute({
  path: '/CreateEventTypeForm-6ff803df',
  label: 'CreateEventTypeForm-6ff803df',
  componentId: 'CreateEventTypeForm-6ff803df',
});
// Add route for EventTypesList-cc7fe5bb
addRoute({
  path: '/EventTypesList-cc7fe5bb',
  label: 'EventTypesList-cc7fe5bb',
  componentId: 'EventTypesList-cc7fe5bb',
});
// Add route for TeamListItem-b3cb7590
addRoute({
  path: '/TeamListItem-b3cb7590',
  label: 'TeamListItem-b3cb7590',
  componentId: 'TeamListItem-b3cb7590',
});
// Add route for DataTableSelectionBar-0ff95549
addRoute({
  path: '/DataTableSelectionBar-0ff95549',
  label: 'DataTableSelectionBar-0ff95549',
  componentId: 'DataTableSelectionBar-0ff95549',
});
// Add route for InfoLostWarningDialog-8b2755e6
addRoute({
  path: '/InfoLostWarningDialog-8b2755e6',
  label: 'InfoLostWarningDialog-8b2755e6',
  componentId: 'InfoLostWarningDialog-8b2755e6',
});
// Add route for DataTableToolbar-bceca64e
addRoute({
  path: '/DataTableToolbar-bceca64e',
  label: 'DataTableToolbar-bceca64e',
  componentId: 'DataTableToolbar-bceca64e',
});
// Add route for DialogDescription-3556910a
addRoute({
  path: '/DialogDescription-3556910a',
  label: 'DialogDescription-3556910a',
  componentId: 'DialogDescription-3556910a',
});
// Add route for AlbyPriceComponent-ce29824c
addRoute({
  path: '/AlbyPriceComponent-ce29824c',
  label: 'AlbyPriceComponent-ce29824c',
  componentId: 'AlbyPriceComponent-ce29824c',
});
// Add route for DomainWideDelegationListPage-81cb080a
addRoute({
  path: '/DomainWideDelegationListPage-81cb080a',
  label: 'DomainWideDelegationListPage-81cb080a',
  componentId: 'DomainWideDelegationListPage-81cb080a',
});
// Add route for Spinner-76a1b1bb
addRoute({
  path: '/Spinner-76a1b1bb',
  label: 'Spinner-76a1b1bb',
  componentId: 'Spinner-76a1b1bb',
});
// Add route for ServerPageWrapper-da1cf0ef
addRoute({
  path: '/ServerPageWrapper-da1cf0ef',
  label: 'ServerPageWrapper-da1cf0ef',
  componentId: 'ServerPageWrapper-da1cf0ef',
});
// Add route for TeamInviteFromOrg-b400d552
addRoute({
  path: '/TeamInviteFromOrg-b400d552',
  label: 'TeamInviteFromOrg-b400d552',
  componentId: 'TeamInviteFromOrg-b400d552',
});
// Add route for Alert-5fde7b6d
addRoute({
  path: '/Alert-5fde7b6d',
  label: 'Alert-5fde7b6d',
  componentId: 'Alert-5fde7b6d',
});
// Add route for EventTeamAssignmentTabWebWrapper-2059bfe0
addRoute({
  path: '/EventTeamAssignmentTabWebWrapper-2059bfe0',
  label: 'EventTeamAssignmentTabWebWrapper-2059bfe0',
  componentId: 'EventTeamAssignmentTabWebWrapper-2059bfe0',
});
// Add route for AppList-7840a6c2
addRoute({
  path: '/AppList-7840a6c2',
  label: 'AppList-7840a6c2',
  componentId: 'AppList-7840a6c2',
});
// Add route for UserAvatar-79939b5b
addRoute({
  path: '/UserAvatar-79939b5b',
  label: 'UserAvatar-79939b5b',
  componentId: 'UserAvatar-79939b5b',
});
// Add route for EventRecurringTab-ecae8f98
addRoute({
  path: '/EventRecurringTab-ecae8f98',
  label: 'EventRecurringTab-ecae8f98',
  componentId: 'EventRecurringTab-ecae8f98',
});
// Add route for PaypalPaymentComponent-16e81d70
addRoute({
  path: '/PaypalPaymentComponent-16e81d70',
  label: 'PaypalPaymentComponent-16e81d70',
  componentId: 'PaypalPaymentComponent-16e81d70',
});
// Add route for EventTypesCTA-b42c32d8
addRoute({
  path: '/EventTypesCTA-b42c32d8',
  label: 'EventTypesCTA-b42c32d8',
  componentId: 'EventTypesCTA-b42c32d8',
});
// Add route for PersonInfo-d5d06e1b
addRoute({
  path: '/PersonInfo-d5d06e1b',
  label: 'PersonInfo-d5d06e1b',
  componentId: 'PersonInfo-d5d06e1b',
});
// Add route for PlatformMembersView-bd19cdd9
addRoute({
  path: '/PlatformMembersView-bd19cdd9',
  label: 'PlatformMembersView-bd19cdd9',
  componentId: 'PlatformMembersView-bd19cdd9',
});
// Add route for PaymentPage-2cf25ab8
addRoute({
  path: '/PaymentPage-2cf25ab8',
  label: 'PaymentPage-2cf25ab8',
  componentId: 'PaymentPage-2cf25ab8',
});
// Add route for EditOAuthClientWebhooks-0b8e0b77
addRoute({
  path: '/EditOAuthClientWebhooks-0b8e0b77',
  label: 'EditOAuthClientWebhooks-0b8e0b77',
  componentId: 'EditOAuthClientWebhooks-0b8e0b77',
});
// Add route for DeleteBulkTeamMembers-887363cc
addRoute({
  path: '/DeleteBulkTeamMembers-887363cc',
  label: 'DeleteBulkTeamMembers-887363cc',
  componentId: 'DeleteBulkTeamMembers-887363cc',
});
// Add route for InvalidAppCredentialBanner-d1f94e1f
addRoute({
  path: '/InvalidAppCredentialBanner-d1f94e1f',
  label: 'InvalidAppCredentialBanner-d1f94e1f',
  componentId: 'InvalidAppCredentialBanner-d1f94e1f',
});
// Add route for CallToActionIcon-4567b69c
addRoute({
  path: '/CallToActionIcon-4567b69c',
  label: 'CallToActionIcon-4567b69c',
  componentId: 'CallToActionIcon-4567b69c',
});
// Add route for OrganizationAdminNoSlotsEmail-4bc21b4e
addRoute({
  path: '/OrganizationAdminNoSlotsEmail-4bc21b4e',
  label: 'OrganizationAdminNoSlotsEmail-4bc21b4e',
  componentId: 'OrganizationAdminNoSlotsEmail-4bc21b4e',
});
// Add route for ErrorPage-a418a05e
addRoute({
  path: '/ErrorPage-a418a05e',
  label: 'ErrorPage-a418a05e',
  componentId: 'ErrorPage-a418a05e',
});
// Add route for EventTypeAppSettingsInterface-bc3a1c64
addRoute({
  path: '/EventTypeAppSettingsInterface-bc3a1c64',
  label: 'EventTypeAppSettingsInterface-bc3a1c64',
  componentId: 'EventTypeAppSettingsInterface-bc3a1c64',
});
// Add route for OrganizerAddGuestsEmail-72bae318
addRoute({
  path: '/OrganizerAddGuestsEmail-72bae318',
  label: 'OrganizerAddGuestsEmail-72bae318',
  componentId: 'OrganizerAddGuestsEmail-72bae318',
});
// Add route for SettingInputContainer-71ba2c76
addRoute({
  path: '/SettingInputContainer-71ba2c76',
  label: 'SettingInputContainer-71ba2c76',
  componentId: 'SettingInputContainer-71ba2c76',
});
// Add route for EventTypesPage-b42c32d8
addRoute({
  path: '/EventTypesPage-b42c32d8',
  label: 'EventTypesPage-b42c32d8',
  componentId: 'EventTypesPage-b42c32d8',
});
// Add route for ApiKeyDialogForm-5ee426be
addRoute({
  path: '/ApiKeyDialogForm-5ee426be',
  label: 'ApiKeyDialogForm-5ee426be',
  componentId: 'ApiKeyDialogForm-5ee426be',
});
// Add route for OverlayCalendar-d4483b05
addRoute({
  path: '/OverlayCalendar-d4483b05',
  label: 'OverlayCalendar-d4483b05',
  componentId: 'OverlayCalendar-d4483b05',
});
// Add route for ServerPage-ff73cec6
addRoute({
  path: '/ServerPage-ff73cec6',
  label: 'ServerPage-ff73cec6',
  componentId: 'ServerPage-ff73cec6',
});
// Add route for BookingStatusBadge-e5c30da8
addRoute({
  path: '/BookingStatusBadge-e5c30da8',
  label: 'BookingStatusBadge-e5c30da8',
  componentId: 'BookingStatusBadge-e5c30da8',
});
// Add route for Header-c1e8dd15
addRoute({
  path: '/Header-c1e8dd15',
  label: 'Header-c1e8dd15',
  componentId: 'Header-c1e8dd15',
});
// Add route for Group-caa432b7
addRoute({
  path: '/Group-caa432b7',
  label: 'Group-caa432b7',
  componentId: 'Group-caa432b7',
});
// Add route for Setup-aac810cd
addRoute({
  path: '/Setup-aac810cd',
  label: 'Setup-aac810cd',
  componentId: 'Setup-aac810cd',
});
// Add route for SelectSkeletonLoader-53b46915
addRoute({
  path: '/SelectSkeletonLoader-53b46915',
  label: 'SelectSkeletonLoader-53b46915',
  componentId: 'SelectSkeletonLoader-53b46915',
});
// Add route for EmbedButton-dfe251be
addRoute({
  path: '/EmbedButton-dfe251be',
  label: 'EmbedButton-dfe251be',
  componentId: 'EmbedButton-dfe251be',
});
// Add route for DisabledAppEmail-d3ede1b9
addRoute({
  path: '/DisabledAppEmail-d3ede1b9',
  label: 'DisabledAppEmail-d3ede1b9',
  componentId: 'DisabledAppEmail-d3ede1b9',
});
// Add route for ConfirmDialog-042f1111
addRoute({
  path: '/ConfirmDialog-042f1111',
  label: 'ConfirmDialog-042f1111',
  componentId: 'ConfirmDialog-042f1111',
});
// Add route for InstallAppButton-492fd313
addRoute({
  path: '/InstallAppButton-492fd313',
  label: 'InstallAppButton-492fd313',
  componentId: 'InstallAppButton-492fd313',
});
// Add route for FromTime-54e352a3
addRoute({
  path: '/FromTime-54e352a3',
  label: 'FromTime-54e352a3',
  componentId: 'FromTime-54e352a3',
});
// Add route for getLayout-c00e20c2
addRoute({
  path: '/getLayout-c00e20c2',
  label: 'getLayout-c00e20c2',
  componentId: 'getLayout-c00e20c2',
});
// Add route for RedirectToInstantMeetingModal-744aa4bb
addRoute({
  path: '/RedirectToInstantMeetingModal-744aa4bb',
  label: 'RedirectToInstantMeetingModal-744aa4bb',
  componentId: 'RedirectToInstantMeetingModal-744aa4bb',
});
// Add route for EventTypeAppCard-7794b0fb
addRoute({
  path: '/EventTypeAppCard-7794b0fb',
  label: 'EventTypeAppCard-7794b0fb',
  componentId: 'EventTypeAppCard-7794b0fb',
});
// Add route for WorkflowPage-9d1e84ca
addRoute({
  path: '/WorkflowPage-9d1e84ca',
  label: 'WorkflowPage-9d1e84ca',
  componentId: 'WorkflowPage-9d1e84ca',
});
// Add route for ErrorToast-75615def
addRoute({
  path: '/ErrorToast-75615def',
  label: 'ErrorToast-75615def',
  componentId: 'ErrorToast-75615def',
});
// Add route for TwoFactorAuthView-c863466c
addRoute({
  path: '/TwoFactorAuthView-c863466c',
  label: 'TwoFactorAuthView-c863466c',
  componentId: 'TwoFactorAuthView-c863466c',
});
// Add route for Page-26ba7fe5
addRoute({
  path: '/Page-26ba7fe5',
  label: 'Page-26ba7fe5',
  componentId: 'Page-26ba7fe5',
});
// Add route for EventTypeAppCard-f28e7f37
addRoute({
  path: '/EventTypeAppCard-f28e7f37',
  label: 'EventTypeAppCard-f28e7f37',
  componentId: 'EventTypeAppCard-f28e7f37',
});
// Add route for Separator-28f1eb38
addRoute({
  path: '/Separator-28f1eb38',
  label: 'Separator-28f1eb38',
  componentId: 'Separator-28f1eb38',
});
// Add route for RecordingListSkeleton-dcaadd1f
addRoute({
  path: '/RecordingListSkeleton-dcaadd1f',
  label: 'RecordingListSkeleton-dcaadd1f',
  componentId: 'RecordingListSkeleton-dcaadd1f',
});
// Add route for Signin-defb627b
addRoute({
  path: '/Signin-defb627b',
  label: 'Signin-defb627b',
  componentId: 'Signin-defb627b',
});
// Add route for AppearanceSkeletonLoader-2a4d815a
addRoute({
  path: '/AppearanceSkeletonLoader-2a4d815a',
  label: 'AppearanceSkeletonLoader-2a4d815a',
  componentId: 'AppearanceSkeletonLoader-2a4d815a',
});
// Add route for DestinationCalendarSettings-f980c133
addRoute({
  path: '/DestinationCalendarSettings-f980c133',
  label: 'DestinationCalendarSettings-f980c133',
  componentId: 'DestinationCalendarSettings-f980c133',
});
// Add route for ShellMainAppDir-e10aa4e2
addRoute({
  path: '/ShellMainAppDir-e10aa4e2',
  label: 'ShellMainAppDir-e10aa4e2',
  componentId: 'ShellMainAppDir-e10aa4e2',
});
// Add route for Authorize-dacb6ab0
addRoute({
  path: '/Authorize-dacb6ab0',
  label: 'Authorize-dacb6ab0',
  componentId: 'Authorize-dacb6ab0',
});
// Add route for EventSetupTab-e39eb720
addRoute({
  path: '/EventSetupTab-e39eb720',
  label: 'EventSetupTab-e39eb720',
  componentId: 'EventSetupTab-e39eb720',
});
// Add route for DisconnectIntegrationModal-e3786d5f
addRoute({
  path: '/DisconnectIntegrationModal-e3786d5f',
  label: 'DisconnectIntegrationModal-e3786d5f',
  componentId: 'DisconnectIntegrationModal-e3786d5f',
});
// Add route for EventTypeAppSettingsInterface-268068d0
addRoute({
  path: '/EventTypeAppSettingsInterface-268068d0',
  label: 'EventTypeAppSettingsInterface-268068d0',
  componentId: 'EventTypeAppSettingsInterface-268068d0',
});
// Add route for InsightsLayout-ec05e4b7
addRoute({
  path: '/InsightsLayout-ec05e4b7',
  label: 'InsightsLayout-ec05e4b7',
  componentId: 'InsightsLayout-ec05e4b7',
});
// Add route for AddMembersWithSwitchPlatformWrapper-3a293d1a
addRoute({
  path: '/AddMembersWithSwitchPlatformWrapper-3a293d1a',
  label: 'AddMembersWithSwitchPlatformWrapper-3a293d1a',
  componentId: 'AddMembersWithSwitchPlatformWrapper-3a293d1a',
});
// Add route for ServerPage-7fd5e535
addRoute({
  path: '/ServerPage-7fd5e535',
  label: 'ServerPage-7fd5e535',
  componentId: 'ServerPage-7fd5e535',
});
// Add route for Radio-caa432b7
addRoute({
  path: '/Radio-caa432b7',
  label: 'Radio-caa432b7',
  componentId: 'Radio-caa432b7',
});
// Add route for Error500-7d708afe
addRoute({
  path: '/Error500-7d708afe',
  label: 'Error500-7d708afe',
  componentId: 'Error500-7d708afe',
});
// Add route for MembersView-80df06f7
addRoute({
  path: '/MembersView-80df06f7',
  label: 'MembersView-80df06f7',
  componentId: 'MembersView-80df06f7',
});
// Add route for FromToTime-54e352a3
addRoute({
  path: '/FromToTime-54e352a3',
  label: 'FromToTime-54e352a3',
  componentId: 'FromToTime-54e352a3',
});
// Add route for List-2afc4dd7
addRoute({
  path: '/List-2afc4dd7',
  label: 'List-2afc4dd7',
  componentId: 'List-2afc4dd7',
});
// Add route for CopyButton-ed9d971b
addRoute({
  path: '/CopyButton-ed9d971b',
  label: 'CopyButton-ed9d971b',
  componentId: 'CopyButton-ed9d971b',
});
// Add route for OverlayCalendarContinueModal-1d0f2870
addRoute({
  path: '/OverlayCalendarContinueModal-1d0f2870',
  label: 'OverlayCalendarContinueModal-1d0f2870',
  componentId: 'OverlayCalendarContinueModal-1d0f2870',
});
// Add route for TeamListingView-e1b92136
addRoute({
  path: '/TeamListingView-e1b92136',
  label: 'TeamListingView-e1b92136',
  componentId: 'TeamListingView-e1b92136',
});
// Add route for EventTypeAppSettingsInterface-0a8af8bb
addRoute({
  path: '/EventTypeAppSettingsInterface-0a8af8bb',
  label: 'EventTypeAppSettingsInterface-0a8af8bb',
  componentId: 'EventTypeAppSettingsInterface-0a8af8bb',
});
// Add route for LargeCalendar-13e879fa
addRoute({
  path: '/LargeCalendar-13e879fa',
  label: 'LargeCalendar-13e879fa',
  componentId: 'LargeCalendar-13e879fa',
});
// Add route for EmailScheduledBodyHeaderContent-ce3c450e
addRoute({
  path: '/EmailScheduledBodyHeaderContent-ce3c450e',
  label: 'EmailScheduledBodyHeaderContent-ce3c450e',
  componentId: 'EmailScheduledBodyHeaderContent-ce3c450e',
});
// Add route for InstantBooking-3ed457b4
addRoute({
  path: '/InstantBooking-3ed457b4',
  label: 'InstantBooking-3ed457b4',
  componentId: 'InstantBooking-3ed457b4',
});
// Add route for VerticalLines-96f89992
addRoute({
  path: '/VerticalLines-96f89992',
  label: 'VerticalLines-96f89992',
  componentId: 'VerticalLines-96f89992',
});
// Add route for AvailabilitySettingsWebWrapper-c8cbbbce
addRoute({
  path: '/AvailabilitySettingsWebWrapper-c8cbbbce',
  label: 'AvailabilitySettingsWebWrapper-c8cbbbce',
  componentId: 'AvailabilitySettingsWebWrapper-c8cbbbce',
});
// Add route for AttendeeScheduledEmail-95dceb24
addRoute({
  path: '/AttendeeScheduledEmail-95dceb24',
  label: 'AttendeeScheduledEmail-95dceb24',
  componentId: 'AttendeeScheduledEmail-95dceb24',
});
// Add route for BasePhoneInput-f50470c0
addRoute({
  path: '/BasePhoneInput-f50470c0',
  label: 'BasePhoneInput-f50470c0',
  componentId: 'BasePhoneInput-f50470c0',
});
// Add route for RecurringEventController-246fc293
addRoute({
  path: '/RecurringEventController-246fc293',
  label: 'RecurringEventController-246fc293',
  componentId: 'RecurringEventController-246fc293',
});
// Add route for Page-cd687620
addRoute({
  path: '/Page-cd687620',
  label: 'Page-cd687620',
  componentId: 'Page-cd687620',
});
// Add route for TableActions-3d2e037c
addRoute({
  path: '/TableActions-3d2e037c',
  label: 'TableActions-3d2e037c',
  componentId: 'TableActions-3d2e037c',
});
// Add route for MostBookedTeamMembersTable-0dc1c3a4
addRoute({
  path: '/MostBookedTeamMembersTable-0dc1c3a4',
  label: 'MostBookedTeamMembersTable-0dc1c3a4',
  componentId: 'MostBookedTeamMembersTable-0dc1c3a4',
});
// Add route for OnboardingPage-07cae914
addRoute({
  path: '/OnboardingPage-07cae914',
  label: 'OnboardingPage-07cae914',
  componentId: 'OnboardingPage-07cae914',
});
// Add route for CreateTeamEventType-6570dc44
addRoute({
  path: '/CreateTeamEventType-6570dc44',
  label: 'CreateTeamEventType-6570dc44',
  componentId: 'CreateTeamEventType-6570dc44',
});
// Add route for EventTypeAppCard-3b8d2836
addRoute({
  path: '/EventTypeAppCard-3b8d2836',
  label: 'EventTypeAppCard-3b8d2836',
  componentId: 'EventTypeAppCard-3b8d2836',
});
// Add route for ReassignDialog-fbacf63e
addRoute({
  path: '/ReassignDialog-fbacf63e',
  label: 'ReassignDialog-fbacf63e',
  componentId: 'ReassignDialog-fbacf63e',
});
// Add route for Logo-e1e1562b
addRoute({
  path: '/Logo-e1e1562b',
  label: 'Logo-e1e1562b',
  componentId: 'Logo-e1e1562b',
});
// Add route for CheckedSelect-2817b0b2
addRoute({
  path: '/CheckedSelect-2817b0b2',
  label: 'CheckedSelect-2817b0b2',
  componentId: 'CheckedSelect-2817b0b2',
});
// Add route for CalAiTranscribe-ac3deaf2
addRoute({
  path: '/CalAiTranscribe-ac3deaf2',
  label: 'CalAiTranscribe-ac3deaf2',
  componentId: 'CalAiTranscribe-ac3deaf2',
});
// Add route for Page-ebf1d841
addRoute({
  path: '/Page-ebf1d841',
  label: 'Page-ebf1d841',
  componentId: 'Page-ebf1d841',
});
// Add route for Custom404-fe028023
addRoute({
  path: '/Custom404-fe028023',
  label: 'Custom404-fe028023',
  componentId: 'Custom404-fe028023',
});
// Add route for LinkIconButton-05848fa2
addRoute({
  path: '/LinkIconButton-05848fa2',
  label: 'LinkIconButton-05848fa2',
  componentId: 'LinkIconButton-05848fa2',
});
// Add route for AppListCard-798cef26
addRoute({
  path: '/AppListCard-798cef26',
  label: 'AppListCard-798cef26',
  componentId: 'AppListCard-798cef26',
});
// Add route for WipeMyCalActionButton-9616ecca
addRoute({
  path: '/WipeMyCalActionButton-9616ecca',
  label: 'WipeMyCalActionButton-9616ecca',
  componentId: 'WipeMyCalActionButton-9616ecca',
});
// Add route for FormInputFields-4f8c71c0
addRoute({
  path: '/FormInputFields-4f8c71c0',
  label: 'FormInputFields-4f8c71c0',
  componentId: 'FormInputFields-4f8c71c0',
});
// Add route for BookingConfirmationForm-8098ee22
addRoute({
  path: '/BookingConfirmationForm-8098ee22',
  label: 'BookingConfirmationForm-8098ee22',
  componentId: 'BookingConfirmationForm-8098ee22',
});
// Add route for ServerPage-159fbe00
addRoute({
  path: '/ServerPage-159fbe00',
  label: 'ServerPage-159fbe00',
  componentId: 'ServerPage-159fbe00',
});
// Add route for TeamListBulkAction-a96dae49
addRoute({
  path: '/TeamListBulkAction-a96dae49',
  label: 'TeamListBulkAction-a96dae49',
  componentId: 'TeamListBulkAction-a96dae49',
});
// Add route for HintsOrErrors-42bb8729
addRoute({
  path: '/HintsOrErrors-42bb8729',
  label: 'HintsOrErrors-42bb8729',
  componentId: 'HintsOrErrors-42bb8729',
});
// Add route for OrganizerLocationChangeEmail-d4cadf3a
addRoute({
  path: '/OrganizerLocationChangeEmail-d4cadf3a',
  label: 'OrganizerLocationChangeEmail-d4cadf3a',
  componentId: 'OrganizerLocationChangeEmail-d4cadf3a',
});
// Add route for LayoutHandler-0fc81203
addRoute({
  path: '/LayoutHandler-0fc81203',
  label: 'LayoutHandler-0fc81203',
  componentId: 'LayoutHandler-0fc81203',
});
// Add route for OtherTeamListItem-c9692ee7
addRoute({
  path: '/OtherTeamListItem-c9692ee7',
  label: 'OtherTeamListItem-c9692ee7',
  componentId: 'OtherTeamListItem-c9692ee7',
});
// Add route for EventTypeAppCard-51266bf8
addRoute({
  path: '/EventTypeAppCard-51266bf8',
  label: 'EventTypeAppCard-51266bf8',
  componentId: 'EventTypeAppCard-51266bf8',
});
// Add route for EventTypeAppSettingsInterface-a0160d2f
addRoute({
  path: '/EventTypeAppSettingsInterface-a0160d2f',
  label: 'EventTypeAppSettingsInterface-a0160d2f',
  componentId: 'EventTypeAppSettingsInterface-a0160d2f',
});
// Add route for Page-a9404c13
addRoute({
  path: '/Page-a9404c13',
  label: 'Page-a9404c13',
  componentId: 'Page-a9404c13',
});
// Add route for Apps-9fc95727
addRoute({
  path: '/Apps-9fc95727',
  label: 'Apps-9fc95727',
  componentId: 'Apps-9fc95727',
});
// Add route for TotalUserFeedbackTable-31385a97
addRoute({
  path: '/TotalUserFeedbackTable-31385a97',
  label: 'TotalUserFeedbackTable-31385a97',
  componentId: 'TotalUserFeedbackTable-31385a97',
});
// Add route for Row-04c4762d
addRoute({
  path: '/Row-04c4762d',
  label: 'Row-04c4762d',
  componentId: 'Row-04c4762d',
});
// Add route for DisableAllEmailsSetting-43e2eefc
addRoute({
  path: '/DisableAllEmailsSetting-43e2eefc',
  label: 'DisableAllEmailsSetting-43e2eefc',
  componentId: 'DisableAllEmailsSetting-43e2eefc',
});
// Add route for DryRunMessage-930d7f4a
addRoute({
  path: '/DryRunMessage-930d7f4a',
  label: 'DryRunMessage-930d7f4a',
  componentId: 'DryRunMessage-930d7f4a',
});
// Add route for PlatformBillingCard-df75b971
addRoute({
  path: '/PlatformBillingCard-df75b971',
  label: 'PlatformBillingCard-df75b971',
  componentId: 'PlatformBillingCard-df75b971',
});
// Add route for TroubleshooterSidebar-798100de
addRoute({
  path: '/TroubleshooterSidebar-798100de',
  label: 'TroubleshooterSidebar-798100de',
  componentId: 'TroubleshooterSidebar-798100de',
});
// Add route for NoPlatformPlan-831434aa
addRoute({
  path: '/NoPlatformPlan-831434aa',
  label: 'NoPlatformPlan-831434aa',
  componentId: 'NoPlatformPlan-831434aa',
});
// Add route for SkeletonContainer-9bc6b401
addRoute({
  path: '/SkeletonContainer-9bc6b401',
  label: 'SkeletonContainer-9bc6b401',
  componentId: 'SkeletonContainer-9bc6b401',
});
// Add route for DialogTrigger-57f794de
addRoute({
  path: '/DialogTrigger-57f794de',
  label: 'DialogTrigger-57f794de',
  componentId: 'DialogTrigger-57f794de',
});
// Add route for Page-8331e8ea
addRoute({
  path: '/Page-8331e8ea',
  label: 'Page-8331e8ea',
  componentId: 'Page-8331e8ea',
});
// Add route for EventInstantTab-8378a858
addRoute({
  path: '/EventInstantTab-8378a858',
  label: 'EventInstantTab-8378a858',
  componentId: 'EventInstantTab-8378a858',
});
// Add route for OrgAutoInviteEmail-f423608e
addRoute({
  path: '/OrgAutoInviteEmail-f423608e',
  label: 'OrgAutoInviteEmail-f423608e',
  componentId: 'OrgAutoInviteEmail-f423608e',
});
// Add route for SectionBottomActions-7120eb32
addRoute({
  path: '/SectionBottomActions-7120eb32',
  label: 'SectionBottomActions-7120eb32',
  componentId: 'SectionBottomActions-7120eb32',
});
// Add route for BookEventForm-c38a406a
addRoute({
  path: '/BookEventForm-c38a406a',
  label: 'BookEventForm-c38a406a',
  componentId: 'BookEventForm-c38a406a',
});
// Add route for DisableTwoFactorAuthModal-c1ea99d6
addRoute({
  path: '/DisableTwoFactorAuthModal-c1ea99d6',
  label: 'DisableTwoFactorAuthModal-c1ea99d6',
  componentId: 'DisableTwoFactorAuthModal-c1ea99d6',
});
// Add route for NoMeetingFound-8353e749
addRoute({
  path: '/NoMeetingFound-8353e749',
  label: 'NoMeetingFound-8353e749',
  componentId: 'NoMeetingFound-8353e749',
});
// Add route for StartTimeFilters-aedebba2
addRoute({
  path: '/StartTimeFilters-aedebba2',
  label: 'StartTimeFilters-aedebba2',
  componentId: 'StartTimeFilters-aedebba2',
});
// Add route for ConnectedVideoStep-eff0cdd4
addRoute({
  path: '/ConnectedVideoStep-eff0cdd4',
  label: 'ConnectedVideoStep-eff0cdd4',
  componentId: 'ConnectedVideoStep-eff0cdd4',
});
// Add route for EventTypeAppCard-c005b11d
addRoute({
  path: '/EventTypeAppCard-c005b11d',
  label: 'EventTypeAppCard-c005b11d',
  componentId: 'EventTypeAppCard-c005b11d',
});
// Add route for RangeSliderPopover-3bfae8e8
addRoute({
  path: '/RangeSliderPopover-3bfae8e8',
  label: 'RangeSliderPopover-3bfae8e8',
  componentId: 'RangeSliderPopover-3bfae8e8',
});
// Add route for CalendarListContainer-76c0dc0b
addRoute({
  path: '/CalendarListContainer-76c0dc0b',
  label: 'CalendarListContainer-76c0dc0b',
  componentId: 'CalendarListContainer-76c0dc0b',
});
// Add route for AppleCalendarSetup-9286c55d
addRoute({
  path: '/AppleCalendarSetup-9286c55d',
  label: 'AppleCalendarSetup-9286c55d',
  componentId: 'AppleCalendarSetup-9286c55d',
});
// Add route for ToastProvider-cd4ba3bb
addRoute({
  path: '/ToastProvider-cd4ba3bb',
  label: 'ToastProvider-cd4ba3bb',
  componentId: 'ToastProvider-cd4ba3bb',
});
// Add route for ServerPage-af0e90a3
addRoute({
  path: '/ServerPage-af0e90a3',
  label: 'ServerPage-af0e90a3',
  componentId: 'ServerPage-af0e90a3',
});
// Add route for Page-e9c6cf36
addRoute({
  path: '/Page-e9c6cf36',
  label: 'Page-e9c6cf36',
  componentId: 'Page-e9c6cf36',
});
// Add route for KBarContent-56f2316f
addRoute({
  path: '/KBarContent-56f2316f',
  label: 'KBarContent-56f2316f',
  componentId: 'KBarContent-56f2316f',
});
// Add route for EmailHead-3abad10d
addRoute({
  path: '/EmailHead-3abad10d',
  label: 'EmailHead-3abad10d',
  componentId: 'EmailHead-3abad10d',
});
// Add route for ConfirmationContent-3d36f80f
addRoute({
  path: '/ConfirmationContent-3d36f80f',
  label: 'ConfirmationContent-3d36f80f',
  componentId: 'ConfirmationContent-3d36f80f',
});
// Add route for EventMetaSkeleton-ba26c714
addRoute({
  path: '/EventMetaSkeleton-ba26c714',
  label: 'EventMetaSkeleton-ba26c714',
  componentId: 'EventMetaSkeleton-ba26c714',
});
// Add route for Toast-cd4ba3bb
addRoute({
  path: '/Toast-cd4ba3bb',
  label: 'Toast-cd4ba3bb',
  componentId: 'Toast-cd4ba3bb',
});
// Add route for UpgradePage-a3edee68
addRoute({
  path: '/UpgradePage-a3edee68',
  label: 'UpgradePage-a3edee68',
  componentId: 'UpgradePage-a3edee68',
});
// Add route for UserAvatarGroupWithOrg-23275912
addRoute({
  path: '/UserAvatarGroupWithOrg-23275912',
  label: 'UserAvatarGroupWithOrg-23275912',
  componentId: 'UserAvatarGroupWithOrg-23275912',
});
// Add route for RoutingFormResponsesDownload-2db4b747
addRoute({
  path: '/RoutingFormResponsesDownload-2db4b747',
  label: 'RoutingFormResponsesDownload-2db4b747',
  componentId: 'RoutingFormResponsesDownload-2db4b747',
});
// Add route for InviteMemberModal-5208bf52
addRoute({
  path: '/InviteMemberModal-5208bf52',
  label: 'InviteMemberModal-5208bf52',
  componentId: 'InviteMemberModal-5208bf52',
});
// Add route for Sheet-fc56f4fa
addRoute({
  path: '/Sheet-fc56f4fa',
  label: 'Sheet-fc56f4fa',
  componentId: 'Sheet-fc56f4fa',
});
// Add route for Apps-4d448798
addRoute({
  path: '/Apps-4d448798',
  label: 'Apps-4d448798',
  componentId: 'Apps-4d448798',
});
// Add route for AuthContainer-f5c26472
addRoute({
  path: '/AuthContainer-f5c26472',
  label: 'AuthContainer-f5c26472',
  componentId: 'AuthContainer-f5c26472',
});
// Add route for Indicator-caa432b7
addRoute({
  path: '/Indicator-caa432b7',
  label: 'Indicator-caa432b7',
  componentId: 'Indicator-caa432b7',
});
// Add route for OrganizerReassignedEmail-46bf7968
addRoute({
  path: '/OrganizerReassignedEmail-46bf7968',
  label: 'OrganizerReassignedEmail-46bf7968',
  componentId: 'OrganizerReassignedEmail-46bf7968',
});
// Add route for InputError-4746a382
addRoute({
  path: '/InputError-4746a382',
  label: 'InputError-4746a382',
  componentId: 'InputError-4746a382',
});
// Add route for ServerPageWrapper-a1ea553a
addRoute({
  path: '/ServerPageWrapper-a1ea553a',
  label: 'ServerPageWrapper-a1ea553a',
  componentId: 'ServerPageWrapper-a1ea553a',
});
// Add route for Page-b17532bd
addRoute({
  path: '/Page-b17532bd',
  label: 'Page-b17532bd',
  componentId: 'Page-b17532bd',
});
// Add route for AppCard-fb3a1dbe
addRoute({
  path: '/AppCard-fb3a1dbe',
  label: 'AppCard-fb3a1dbe',
  componentId: 'AppCard-fb3a1dbe',
});
// Add route for EditOAuthClient-d92cd3aa
addRoute({
  path: '/EditOAuthClient-d92cd3aa',
  label: 'EditOAuthClient-d92cd3aa',
  componentId: 'EditOAuthClient-d92cd3aa',
});
// Add route for BaseCalProvider-c4d283ee
addRoute({
  path: '/BaseCalProvider-c4d283ee',
  label: 'BaseCalProvider-c4d283ee',
  componentId: 'BaseCalProvider-c4d283ee',
});
// Add route for DatePicker-7886dc1a
addRoute({
  path: '/DatePicker-7886dc1a',
  label: 'DatePicker-7886dc1a',
  componentId: 'DatePicker-7886dc1a',
});
// Add route for Switch-9b1c2e45
addRoute({
  path: '/Switch-9b1c2e45',
  label: 'Switch-9b1c2e45',
  componentId: 'Switch-9b1c2e45',
});
// Add route for PremiumTextfield-d216122b
addRoute({
  path: '/PremiumTextfield-d216122b',
  label: 'PremiumTextfield-d216122b',
  componentId: 'PremiumTextfield-d216122b',
});
// Add route for Locations-48939af0
addRoute({
  path: '/Locations-48939af0',
  label: 'Locations-48939af0',
  componentId: 'Locations-48939af0',
});
// Add route for RecordingListItemSkeleton-cac41507
addRoute({
  path: '/RecordingListItemSkeleton-cac41507',
  label: 'RecordingListItemSkeleton-cac41507',
  componentId: 'RecordingListItemSkeleton-cac41507',
});
// Add route for ListItemTitle-2afc4dd7
addRoute({
  path: '/ListItemTitle-2afc4dd7',
  label: 'ListItemTitle-2afc4dd7',
  componentId: 'ListItemTitle-2afc4dd7',
});
// Add route for BookingAtCell-8eb87447
addRoute({
  path: '/BookingAtCell-8eb87447',
  label: 'BookingAtCell-8eb87447',
  componentId: 'BookingAtCell-8eb87447',
});
// Add route for OAuthClientsList-74a871c3
addRoute({
  path: '/OAuthClientsList-74a871c3',
  label: 'OAuthClientsList-74a871c3',
  componentId: 'OAuthClientsList-74a871c3',
});
// Add route for EventTypeAppSettings-c1607e84
addRoute({
  path: '/EventTypeAppSettings-c1607e84',
  label: 'EventTypeAppSettings-c1607e84',
  componentId: 'EventTypeAppSettings-c1607e84',
});
// Add route for TableFooter-d8f2d822
addRoute({
  path: '/TableFooter-d8f2d822',
  label: 'TableFooter-d8f2d822',
  componentId: 'TableFooter-d8f2d822',
});
// Add route for NumberFilterOptions-5c8566c5
addRoute({
  path: '/NumberFilterOptions-5c8566c5',
  label: 'NumberFilterOptions-5c8566c5',
  componentId: 'NumberFilterOptions-5c8566c5',
});
// Add route for DeploymentUsersListPage-22c18a61
addRoute({
  path: '/DeploymentUsersListPage-22c18a61',
  label: 'DeploymentUsersListPage-22c18a61',
  componentId: 'DeploymentUsersListPage-22c18a61',
});
// Add route for SkeletonLoaderTeamList-784c5484
addRoute({
  path: '/SkeletonLoaderTeamList-784c5484',
  label: 'SkeletonLoaderTeamList-784c5484',
  componentId: 'SkeletonLoaderTeamList-784c5484',
});
// Add route for SheetFooterControls-c83d9740
addRoute({
  path: '/SheetFooterControls-c83d9740',
  label: 'SheetFooterControls-c83d9740',
  componentId: 'SheetFooterControls-c83d9740',
});
// Add route for DirectorySync-575ef1f3
addRoute({
  path: '/DirectorySync-575ef1f3',
  label: 'DirectorySync-575ef1f3',
  componentId: 'DirectorySync-575ef1f3',
});
// Add route for withLicenseRequired-39958e98
addRoute({
  path: '/withLicenseRequired-39958e98',
  label: 'withLicenseRequired-39958e98',
  componentId: 'withLicenseRequired-39958e98',
});
// Add route for AdditionalCalendarSelector-eb06ac95
addRoute({
  path: '/AdditionalCalendarSelector-eb06ac95',
  label: 'AdditionalCalendarSelector-eb06ac95',
  componentId: 'AdditionalCalendarSelector-eb06ac95',
});
// Add route for WeightDialog-1e42caa5
addRoute({
  path: '/WeightDialog-1e42caa5',
  label: 'WeightDialog-1e42caa5',
  componentId: 'WeightDialog-1e42caa5',
});
// Add route for EmptyScreen-72e24647
addRoute({
  path: '/EmptyScreen-72e24647',
  label: 'EmptyScreen-72e24647',
  componentId: 'EmptyScreen-72e24647',
});
// Add route for EditableHeading-23f955e5
addRoute({
  path: '/EditableHeading-23f955e5',
  label: 'EditableHeading-23f955e5',
  componentId: 'EditableHeading-23f955e5',
});
// Add route for ToastAction-cd4ba3bb
addRoute({
  path: '/ToastAction-cd4ba3bb',
  label: 'ToastAction-cd4ba3bb',
  componentId: 'ToastAction-cd4ba3bb',
});
// Add route for OrgBanner-4f01ed54
addRoute({
  path: '/OrgBanner-4f01ed54',
  label: 'OrgBanner-4f01ed54',
  componentId: 'OrgBanner-4f01ed54',
});
// Add route for ConfirmationDialogContent-3d36f80f
addRoute({
  path: '/ConfirmationDialogContent-3d36f80f',
  label: 'ConfirmationDialogContent-3d36f80f',
  componentId: 'ConfirmationDialogContent-3d36f80f',
});
// Add route for ServerPageWrapper-7ece0366
addRoute({
  path: '/ServerPageWrapper-7ece0366',
  label: 'ServerPageWrapper-7ece0366',
  componentId: 'ServerPageWrapper-7ece0366',
});
// Add route for MultiSelectCheckboxes-fd7157c7
addRoute({
  path: '/MultiSelectCheckboxes-fd7157c7',
  label: 'MultiSelectCheckboxes-fd7157c7',
  componentId: 'MultiSelectCheckboxes-fd7157c7',
});
// Add route for TestForm-64eaf91e
addRoute({
  path: '/TestForm-64eaf91e',
  label: 'TestForm-64eaf91e',
  componentId: 'TestForm-64eaf91e',
});
// Add route for WebhookTestDisclosure-342d3866
addRoute({
  path: '/WebhookTestDisclosure-342d3866',
  label: 'WebhookTestDisclosure-342d3866',
  componentId: 'WebhookTestDisclosure-342d3866',
});
// Add route for MorePage-ea668e4c
addRoute({
  path: '/MorePage-ea668e4c',
  label: 'MorePage-ea668e4c',
  componentId: 'MorePage-ea668e4c',
});
// Add route for Page-4c815c24
addRoute({
  path: '/Page-4c815c24',
  label: 'Page-4c815c24',
  componentId: 'Page-4c815c24',
});
// Add route for SheetTitle-fc56f4fa
addRoute({
  path: '/SheetTitle-fc56f4fa',
  label: 'SheetTitle-fc56f4fa',
  componentId: 'SheetTitle-fc56f4fa',
});
// Add route for WhoInfo-d5d06e1b
addRoute({
  path: '/WhoInfo-d5d06e1b',
  label: 'WhoInfo-d5d06e1b',
  componentId: 'WhoInfo-d5d06e1b',
});
// Add route for CalendarSwitch-48ab30b6
addRoute({
  path: '/CalendarSwitch-48ab30b6',
  label: 'CalendarSwitch-48ab30b6',
  componentId: 'CalendarSwitch-48ab30b6',
});
// Add route for AttendeeUpdatedEmail-54a603e3
addRoute({
  path: '/AttendeeUpdatedEmail-54a603e3',
  label: 'AttendeeUpdatedEmail-54a603e3',
  componentId: 'AttendeeUpdatedEmail-54a603e3',
});
// Add route for EventTypesList-c06947ea
addRoute({
  path: '/EventTypesList-c06947ea',
  label: 'EventTypesList-c06947ea',
  componentId: 'EventTypesList-c06947ea',
});
// Add route for RouteBuilder-be55984b
addRoute({
  path: '/RouteBuilder-be55984b',
  label: 'RouteBuilder-be55984b',
  componentId: 'RouteBuilder-be55984b',
});
// Add route for EventTypeAppSettingsInterface-3e087d6c
addRoute({
  path: '/EventTypeAppSettingsInterface-3e087d6c',
  label: 'EventTypeAppSettingsInterface-3e087d6c',
  componentId: 'EventTypeAppSettingsInterface-3e087d6c',
});
// Add route for NavigationItem-be636c36
addRoute({
  path: '/NavigationItem-be636c36',
  label: 'NavigationItem-be636c36',
  componentId: 'NavigationItem-be636c36',
});
// Add route for WorkflowListPage-0434a21a
addRoute({
  path: '/WorkflowListPage-0434a21a',
  label: 'WorkflowListPage-0434a21a',
  componentId: 'WorkflowListPage-0434a21a',
});
// Add route for EventTypeAppCard-1645e38a
addRoute({
  path: '/EventTypeAppCard-1645e38a',
  label: 'EventTypeAppCard-1645e38a',
  componentId: 'EventTypeAppCard-1645e38a',
});
// Add route for VerifyCodeDialog-fc6a8798
addRoute({
  path: '/VerifyCodeDialog-fc6a8798',
  label: 'VerifyCodeDialog-fc6a8798',
  componentId: 'VerifyCodeDialog-fc6a8798',
});
// Add route for TeamRole-d26dc51a
addRoute({
  path: '/TeamRole-d26dc51a',
  label: 'TeamRole-d26dc51a',
  componentId: 'TeamRole-d26dc51a',
});
// Add route for FilterOptions-23b4294a
addRoute({
  path: '/FilterOptions-23b4294a',
  label: 'FilterOptions-23b4294a',
  componentId: 'FilterOptions-23b4294a',
});
// Add route for BreadcrumbItem-002bc113
addRoute({
  path: '/BreadcrumbItem-002bc113',
  label: 'BreadcrumbItem-002bc113',
  componentId: 'BreadcrumbItem-002bc113',
});
// Add route for CommandEmpty-8539b5ed
addRoute({
  path: '/CommandEmpty-8539b5ed',
  label: 'CommandEmpty-8539b5ed',
  componentId: 'CommandEmpty-8539b5ed',
});
// Add route for CommandItem-8539b5ed
addRoute({
  path: '/CommandItem-8539b5ed',
  label: 'CommandItem-8539b5ed',
  componentId: 'CommandItem-8539b5ed',
});
// Add route for ServerPage-b7d87317
addRoute({
  path: '/ServerPage-b7d87317',
  label: 'ServerPage-b7d87317',
  componentId: 'ServerPage-b7d87317',
});
// Add route for DynamicAppComponent-0e8255d7
addRoute({
  path: '/DynamicAppComponent-0e8255d7',
  label: 'DynamicAppComponent-0e8255d7',
  componentId: 'DynamicAppComponent-0e8255d7',
});
// Add route for OutOfOfficeInSlots-14b82e5c
addRoute({
  path: '/OutOfOfficeInSlots-14b82e5c',
  label: 'OutOfOfficeInSlots-14b82e5c',
  componentId: 'OutOfOfficeInSlots-14b82e5c',
});
// Add route for EventTypeAppCard-7b108e94
addRoute({
  path: '/EventTypeAppCard-7b108e94',
  label: 'EventTypeAppCard-7b108e94',
  componentId: 'EventTypeAppCard-7b108e94',
});
// Add route for OrganizerAttendeeCancelledSeatEmail-ca617172
addRoute({
  path: '/OrganizerAttendeeCancelledSeatEmail-ca617172',
  label: 'OrganizerAttendeeCancelledSeatEmail-ca617172',
  componentId: 'OrganizerAttendeeCancelledSeatEmail-ca617172',
});
// Add route for ServerPage-232972b6
addRoute({
  path: '/ServerPage-232972b6',
  label: 'ServerPage-232972b6',
  componentId: 'ServerPage-232972b6',
});
// Add route for EnableTwoFactorModal-2831f663
addRoute({
  path: '/EnableTwoFactorModal-2831f663',
  label: 'EnableTwoFactorModal-2831f663',
  componentId: 'EnableTwoFactorModal-2831f663',
});
// Add route for PopularEventsTable-b8ed6223
addRoute({
  path: '/PopularEventsTable-b8ed6223',
  label: 'PopularEventsTable-b8ed6223',
  componentId: 'PopularEventsTable-b8ed6223',
});
// Add route for Tooltip-cf029c20
addRoute({
  path: '/Tooltip-cf029c20',
  label: 'Tooltip-cf029c20',
  componentId: 'Tooltip-cf029c20',
});
// Add route for CreateNewTeamPage-721873e7
addRoute({
  path: '/CreateNewTeamPage-721873e7',
  label: 'CreateNewTeamPage-721873e7',
  componentId: 'CreateNewTeamPage-721873e7',
});
// Add route for SettingsLayoutAppDir-e6f898f5
addRoute({
  path: '/SettingsLayoutAppDir-e6f898f5',
  label: 'SettingsLayoutAppDir-e6f898f5',
  componentId: 'SettingsLayoutAppDir-e6f898f5',
});
// Add route for TextArea-f4982884
addRoute({
  path: '/TextArea-f4982884',
  label: 'TextArea-f4982884',
  componentId: 'TextArea-f4982884',
});
// Add route for Dialog-57f794de
addRoute({
  path: '/Dialog-57f794de',
  label: 'Dialog-57f794de',
  componentId: 'Dialog-57f794de',
});
// Add route for Page-ba5a1a48
addRoute({
  path: '/Page-ba5a1a48',
  label: 'Page-ba5a1a48',
  componentId: 'Page-ba5a1a48',
});
// Add route for SSOConfiguration-fe2b4fa3
addRoute({
  path: '/SSOConfiguration-fe2b4fa3',
  label: 'SSOConfiguration-fe2b4fa3',
  componentId: 'SSOConfiguration-fe2b4fa3',
});
// Add route for UpgradeOrgsBadge-d8ff1dbc
addRoute({
  path: '/UpgradeOrgsBadge-d8ff1dbc',
  label: 'UpgradeOrgsBadge-d8ff1dbc',
  componentId: 'UpgradeOrgsBadge-d8ff1dbc',
});
// Add route for FilterPopover-8ce19110
addRoute({
  path: '/FilterPopover-8ce19110',
  label: 'FilterPopover-8ce19110',
  componentId: 'FilterPopover-8ce19110',
});
// Add route for CallToAction-c2b23457
addRoute({
  path: '/CallToAction-c2b23457',
  label: 'CallToAction-c2b23457',
  componentId: 'CallToAction-c2b23457',
});
// Add route for UpgradeTeamsBadge-3683ef0e
addRoute({
  path: '/UpgradeTeamsBadge-3683ef0e',
  label: 'UpgradeTeamsBadge-3683ef0e',
  componentId: 'UpgradeTeamsBadge-3683ef0e',
});
// Add route for ShellMainAppDirBackButton-4520c6c9
addRoute({
  path: '/ShellMainAppDirBackButton-4520c6c9',
  label: 'ShellMainAppDirBackButton-4520c6c9',
  componentId: 'ShellMainAppDirBackButton-4520c6c9',
});
// Add route for EventDuration-1cace426
addRoute({
  path: '/EventDuration-1cace426',
  label: 'EventDuration-1cace426',
  componentId: 'EventDuration-1cace426',
});
// Add route for DialogFooter-3556910a
addRoute({
  path: '/DialogFooter-3556910a',
  label: 'DialogFooter-3556910a',
  componentId: 'DialogFooter-3556910a',
});
// Add route for ScheduleDay-9ac5b094
addRoute({
  path: '/ScheduleDay-9ac5b094',
  label: 'ScheduleDay-9ac5b094',
  componentId: 'ScheduleDay-9ac5b094',
});
// Add route for TeamEventTypeForm-265a98d7
addRoute({
  path: '/TeamEventTypeForm-265a98d7',
  label: 'TeamEventTypeForm-265a98d7',
  componentId: 'TeamEventTypeForm-265a98d7',
});
// Add route for Bookings-d233ccf5
addRoute({
  path: '/Bookings-d233ccf5',
  label: 'Bookings-d233ccf5',
  componentId: 'Bookings-d233ccf5',
});
// Add route for InputComponent-b921da27
addRoute({
  path: '/InputComponent-b921da27',
  label: 'InputComponent-b921da27',
  componentId: 'InputComponent-b921da27',
});
// Add route for InstallAppButton-d94c98b7
addRoute({
  path: '/InstallAppButton-d94c98b7',
  label: 'InstallAppButton-d94c98b7',
  componentId: 'InstallAppButton-d94c98b7',
});
// Add route for ToastViewport-cd4ba3bb
addRoute({
  path: '/ToastViewport-cd4ba3bb',
  label: 'ToastViewport-cd4ba3bb',
  componentId: 'ToastViewport-cd4ba3bb',
});
// Add route for PeopleFilter-194dbd47
addRoute({
  path: '/PeopleFilter-194dbd47',
  label: 'PeopleFilter-194dbd47',
  componentId: 'PeopleFilter-194dbd47',
});
// Add route for ReporterWrapper-c1e7663d
addRoute({
  path: '/ReporterWrapper-c1e7663d',
  label: 'ReporterWrapper-c1e7663d',
  componentId: 'ReporterWrapper-c1e7663d',
});
// Add route for DropdownMenuSeparator-1e023307
addRoute({
  path: '/DropdownMenuSeparator-1e023307',
  label: 'DropdownMenuSeparator-1e023307',
  componentId: 'DropdownMenuSeparator-1e023307',
});
// Add route for TotalBookingUsersTable-1b9154bc
addRoute({
  path: '/TotalBookingUsersTable-1b9154bc',
  label: 'TotalBookingUsersTable-1b9154bc',
  componentId: 'TotalBookingUsersTable-1b9154bc',
});
// Add route for TeamsCTA-11b728d3
addRoute({
  path: '/TeamsCTA-11b728d3',
  label: 'TeamsCTA-11b728d3',
  componentId: 'TeamsCTA-11b728d3',
});
// Add route for TableCaption-d8f2d822
addRoute({
  path: '/TableCaption-d8f2d822',
  label: 'TableCaption-d8f2d822',
  componentId: 'TableCaption-d8f2d822',
});
// Add route for VerifyEmailChangeEmail-6056e721
addRoute({
  path: '/VerifyEmailChangeEmail-6056e721',
  label: 'VerifyEmailChangeEmail-6056e721',
  componentId: 'VerifyEmailChangeEmail-6056e721',
});
// Add route for KBarTrigger-56f2316f
addRoute({
  path: '/KBarTrigger-56f2316f',
  label: 'KBarTrigger-56f2316f',
  componentId: 'KBarTrigger-56f2316f',
});
// Add route for Divider-30631592
addRoute({
  path: '/Divider-30631592',
  label: 'Divider-30631592',
  componentId: 'Divider-30631592',
});
// Add route for ManageLink-12311252
addRoute({
  path: '/ManageLink-12311252',
  label: 'ManageLink-12311252',
  componentId: 'ManageLink-12311252',
});
// Add route for ConnectedCalendars-42666677
addRoute({
  path: '/ConnectedCalendars-42666677',
  label: 'ConnectedCalendars-42666677',
  componentId: 'ConnectedCalendars-42666677',
});
// Add route for FilterSearchField-f4982884
addRoute({
  path: '/FilterSearchField-f4982884',
  label: 'FilterSearchField-f4982884',
  componentId: 'FilterSearchField-f4982884',
});
// Add route for TimeDial-5c3779db
addRoute({
  path: '/TimeDial-5c3779db',
  label: 'TimeDial-5c3779db',
  componentId: 'TimeDial-5c3779db',
});
// Add route for PlatformManagedUsersTable-f3d2a3e9
addRoute({
  path: '/PlatformManagedUsersTable-f3d2a3e9',
  label: 'PlatformManagedUsersTable-f3d2a3e9',
  componentId: 'PlatformManagedUsersTable-f3d2a3e9',
});
// Add route for OrganizerScheduledEmail-3d93806d
addRoute({
  path: '/OrganizerScheduledEmail-3d93806d',
  label: 'OrganizerScheduledEmail-3d93806d',
  componentId: 'OrganizerScheduledEmail-3d93806d',
});
// Add route for OtherTeamListingView-3c2dd2e5
addRoute({
  path: '/OtherTeamListingView-3c2dd2e5',
  label: 'OtherTeamListingView-3c2dd2e5',
  componentId: 'OtherTeamListingView-3c2dd2e5',
});
// Add route for CreateTeamDialog-4cf45912
addRoute({
  path: '/CreateTeamDialog-4cf45912',
  label: 'CreateTeamDialog-4cf45912',
  componentId: 'CreateTeamDialog-4cf45912',
});
// Add route for EventAvailabilityTab-efa67857
addRoute({
  path: '/EventAvailabilityTab-efa67857',
  label: 'EventAvailabilityTab-efa67857',
  componentId: 'EventAvailabilityTab-efa67857',
});
// Add route for ControlComponent-b921da27
addRoute({
  path: '/ControlComponent-b921da27',
  label: 'ControlComponent-b921da27',
  componentId: 'ControlComponent-b921da27',
});
// Add route for MultiplePrivateLinksController-c7c23002
addRoute({
  path: '/MultiplePrivateLinksController-c7c23002',
  label: 'MultiplePrivateLinksController-c7c23002',
  componentId: 'MultiplePrivateLinksController-c7c23002',
});
// Add route for HighestNoShowHostTable-7d78ac4a
addRoute({
  path: '/HighestNoShowHostTable-7d78ac4a',
  label: 'HighestNoShowHostTable-7d78ac4a',
  componentId: 'HighestNoShowHostTable-7d78ac4a',
});
// Add route for OutOfOfficeEntriesList-4ab80e39
addRoute({
  path: '/OutOfOfficeEntriesList-4ab80e39',
  label: 'OutOfOfficeEntriesList-4ab80e39',
  componentId: 'OutOfOfficeEntriesList-4ab80e39',
});
// Add route for DataTablePagination-d10c9dac
addRoute({
  path: '/DataTablePagination-d10c9dac',
  label: 'DataTablePagination-d10c9dac',
  componentId: 'DataTablePagination-d10c9dac',
});
// Add route for Provider-85feba69
addRoute({
  path: '/Provider-85feba69',
  label: 'Provider-85feba69',
  componentId: 'Provider-85feba69',
});
// Add route for EventTypeAppCard-b0b1b07f
addRoute({
  path: '/EventTypeAppCard-b0b1b07f',
  label: 'EventTypeAppCard-b0b1b07f',
  componentId: 'EventTypeAppCard-b0b1b07f',
});
// Add route for CreateANewTeamForm-2ffddbc5
addRoute({
  path: '/CreateANewTeamForm-2ffddbc5',
  label: 'CreateANewTeamForm-2ffddbc5',
  componentId: 'CreateANewTeamForm-2ffddbc5',
});
// Add route for InstallAppButtonChild-66d978f0
addRoute({
  path: '/InstallAppButtonChild-66d978f0',
  label: 'InstallAppButtonChild-66d978f0',
  componentId: 'InstallAppButtonChild-66d978f0',
});
// Add route for EventAdvancedTab-58310fad
addRoute({
  path: '/EventAdvancedTab-58310fad',
  label: 'EventAdvancedTab-58310fad',
  componentId: 'EventAdvancedTab-58310fad',
});
// Add route for Calendar-437143e3
addRoute({
  path: '/Calendar-437143e3',
  label: 'Calendar-437143e3',
  componentId: 'Calendar-437143e3',
});
// Add route for UnconfirmedBookingBadge-2f0a39ed
addRoute({
  path: '/UnconfirmedBookingBadge-2f0a39ed',
  label: 'UnconfirmedBookingBadge-2f0a39ed',
  componentId: 'UnconfirmedBookingBadge-2f0a39ed',
});
// Add route for Page-19659b53
addRoute({
  path: '/Page-19659b53',
  label: 'Page-19659b53',
  componentId: 'Page-19659b53',
});
// Add route for TableCell-d8f2d822
addRoute({
  path: '/TableCell-d8f2d822',
  label: 'TableCell-d8f2d822',
  componentId: 'TableCell-d8f2d822',
});
// Add route for EventTypeEmbedDialog-570f8f7e
addRoute({
  path: '/EventTypeEmbedDialog-570f8f7e',
  label: 'EventTypeEmbedDialog-570f8f7e',
  componentId: 'EventTypeEmbedDialog-570f8f7e',
});
// Add route for MobileNavigationMoreItems-8d6d220e
addRoute({
  path: '/MobileNavigationMoreItems-8d6d220e',
  label: 'MobileNavigationMoreItems-8d6d220e',
  componentId: 'MobileNavigationMoreItems-8d6d220e',
});
// Add route for NewWebhookView-7dd05e93
addRoute({
  path: '/NewWebhookView-7dd05e93',
  label: 'NewWebhookView-7dd05e93',
  componentId: 'NewWebhookView-7dd05e93',
});
// Add route for EventTypeAppCard-3af9b7b6
addRoute({
  path: '/EventTypeAppCard-3af9b7b6',
  label: 'EventTypeAppCard-3af9b7b6',
  componentId: 'EventTypeAppCard-3af9b7b6',
});
// Add route for Day-0d8effeb
addRoute({
  path: '/Day-0d8effeb',
  label: 'Day-0d8effeb',
  componentId: 'Day-0d8effeb',
});
// Add route for Page-9a8e0109
addRoute({
  path: '/Page-9a8e0109',
  label: 'Page-9a8e0109',
  componentId: 'Page-9a8e0109',
});
// Add route for ImpersonationMemberModal-a67d260f
addRoute({
  path: '/ImpersonationMemberModal-a67d260f',
  label: 'ImpersonationMemberModal-a67d260f',
  componentId: 'ImpersonationMemberModal-a67d260f',
});
// Add route for ChildrenEventTypeSelect-8df00efe
addRoute({
  path: '/ChildrenEventTypeSelect-8df00efe',
  label: 'ChildrenEventTypeSelect-8df00efe',
  componentId: 'ChildrenEventTypeSelect-8df00efe',
});
// Add route for ScheduleComponent-9ac5b094
addRoute({
  path: '/ScheduleComponent-9ac5b094',
  label: 'ScheduleComponent-9ac5b094',
  componentId: 'ScheduleComponent-9ac5b094',
});
// Add route for Page-d173c78b
addRoute({
  path: '/Page-d173c78b',
  label: 'Page-d173c78b',
  componentId: 'Page-d173c78b',
});
// Add route for MakeTeamPrivateSwitch-50636073
addRoute({
  path: '/MakeTeamPrivateSwitch-50636073',
  label: 'MakeTeamPrivateSwitch-50636073',
  componentId: 'MakeTeamPrivateSwitch-50636073',
});
// Add route for DisplayInfo-926e2d3e
addRoute({
  path: '/DisplayInfo-926e2d3e',
  label: 'DisplayInfo-926e2d3e',
  componentId: 'DisplayInfo-926e2d3e',
});
// Add route for AlbyPaymentComponent-6ac4e796
addRoute({
  path: '/AlbyPaymentComponent-6ac4e796',
  label: 'AlbyPaymentComponent-6ac4e796',
  componentId: 'AlbyPaymentComponent-6ac4e796',
});
// Add route for TableHeader-d8f2d822
addRoute({
  path: '/TableHeader-d8f2d822',
  label: 'TableHeader-d8f2d822',
  componentId: 'TableHeader-d8f2d822',
});
// Add route for EventTypeFilter-fdd7f3f6
addRoute({
  path: '/EventTypeFilter-fdd7f3f6',
  label: 'EventTypeFilter-fdd7f3f6',
  componentId: 'EventTypeFilter-fdd7f3f6',
});
// Add route for CreateAttributesPage-04bfddca
addRoute({
  path: '/CreateAttributesPage-04bfddca',
  label: 'CreateAttributesPage-04bfddca',
  componentId: 'CreateAttributesPage-04bfddca',
});
// Add route for DateOverrideList-60fe34b8
addRoute({
  path: '/DateOverrideList-60fe34b8',
  label: 'DateOverrideList-60fe34b8',
  componentId: 'DateOverrideList-60fe34b8',
});
// Add route for TeamList-16a7d460
addRoute({
  path: '/TeamList-16a7d460',
  label: 'TeamList-16a7d460',
  componentId: 'TeamList-16a7d460',
});
// Add route for ServerPageWrapper-ff287314
addRoute({
  path: '/ServerPageWrapper-ff287314',
  label: 'ServerPageWrapper-ff287314',
  componentId: 'ServerPageWrapper-ff287314',
});
// Add route for RoutingForms-0b83342f
addRoute({
  path: '/RoutingForms-0b83342f',
  label: 'RoutingForms-0b83342f',
  componentId: 'RoutingForms-0b83342f',
});
// Add route for AddMembersWithSwitchWebWrapper-af92ac1d
addRoute({
  path: '/AddMembersWithSwitchWebWrapper-af92ac1d',
  label: 'AddMembersWithSwitchWebWrapper-af92ac1d',
  componentId: 'AddMembersWithSwitchWebWrapper-af92ac1d',
});
// Add route for Platform-afad4727
addRoute({
  path: '/Platform-afad4727',
  label: 'Platform-afad4727',
  componentId: 'Platform-afad4727',
});
// Add route for MembersView-6a651bfb
addRoute({
  path: '/MembersView-6a651bfb',
  label: 'MembersView-6a651bfb',
  componentId: 'MembersView-6a651bfb',
});
// Add route for AlbySetup-d79ad933
addRoute({
  path: '/AlbySetup-d79ad933',
  label: 'AlbySetup-d79ad933',
  componentId: 'AlbySetup-d79ad933',
});
// Add route for SelectedCalendarsSettingsWebWrapper-3f8e6fb9
addRoute({
  path: '/SelectedCalendarsSettingsWebWrapper-3f8e6fb9',
  label: 'SelectedCalendarsSettingsWebWrapper-3f8e6fb9',
  componentId: 'SelectedCalendarsSettingsWebWrapper-3f8e6fb9',
});
// Add route for ActiveFilters-10273c2e
addRoute({
  path: '/ActiveFilters-10273c2e',
  label: 'ActiveFilters-10273c2e',
  componentId: 'ActiveFilters-10273c2e',
});
// Add route for ConfigureStepCard-163a019f
addRoute({
  path: '/ConfigureStepCard-163a019f',
  label: 'ConfigureStepCard-163a019f',
  componentId: 'ConfigureStepCard-163a019f',
});
// Add route for InputField-85de7318
addRoute({
  path: '/InputField-85de7318',
  label: 'InputField-85de7318',
  componentId: 'InputField-85de7318',
});
// Add route for LocationInfo-3d745c7b
addRoute({
  path: '/LocationInfo-3d745c7b',
  label: 'LocationInfo-3d745c7b',
  componentId: 'LocationInfo-3d745c7b',
});
// Add route for MaintenancePage-3a5b49c8
addRoute({
  path: '/MaintenancePage-3a5b49c8',
  label: 'MaintenancePage-3a5b49c8',
  componentId: 'MaintenancePage-3a5b49c8',
});
// Add route for EventTypeAppCard-38cc0a64
addRoute({
  path: '/EventTypeAppCard-38cc0a64',
  label: 'EventTypeAppCard-38cc0a64',
  componentId: 'EventTypeAppCard-38cc0a64',
});
// Add route for AttendeeCancelledEmail-87bbbd7a
addRoute({
  path: '/AttendeeCancelledEmail-87bbbd7a',
  label: 'AttendeeCancelledEmail-87bbbd7a',
  componentId: 'AttendeeCancelledEmail-87bbbd7a',
});
// Add route for AssignAllTeamMembers-f281984c
addRoute({
  path: '/AssignAllTeamMembers-f281984c',
  label: 'AssignAllTeamMembers-f281984c',
  componentId: 'AssignAllTeamMembers-f281984c',
});
// Add route for Page-a655a457
addRoute({
  path: '/Page-a655a457',
  label: 'Page-a655a457',
  componentId: 'Page-a655a457',
});
// Add route for DropdownMenuTrigger-1e023307
addRoute({
  path: '/DropdownMenuTrigger-1e023307',
  label: 'DropdownMenuTrigger-1e023307',
  componentId: 'DropdownMenuTrigger-1e023307',
});
// Add route for PoweredByCal-9c83213a
addRoute({
  path: '/PoweredByCal-9c83213a',
  label: 'PoweredByCal-9c83213a',
  componentId: 'PoweredByCal-9c83213a',
});
// Add route for OrganizationAttributesPage-3cd45375
addRoute({
  path: '/OrganizationAttributesPage-3cd45375',
  label: 'OrganizationAttributesPage-3cd45375',
  componentId: 'OrganizationAttributesPage-3cd45375',
});
// Add route for FormBuilder-0c9dd3e7
addRoute({
  path: '/FormBuilder-0c9dd3e7',
  label: 'FormBuilder-0c9dd3e7',
  componentId: 'FormBuilder-0c9dd3e7',
});
// Add route for CellHighlightContainer-05d629d0
addRoute({
  path: '/CellHighlightContainer-05d629d0',
  label: 'CellHighlightContainer-05d629d0',
  componentId: 'CellHighlightContainer-05d629d0',
});
// Add route for MobileNavigationMoreItem-be636c36
addRoute({
  path: '/MobileNavigationMoreItem-be636c36',
  label: 'MobileNavigationMoreItem-be636c36',
  componentId: 'MobileNavigationMoreItem-be636c36',
});
// Add route for ConfigureDirectorySync-f055e5ed
addRoute({
  path: '/ConfigureDirectorySync-f055e5ed',
  label: 'ConfigureDirectorySync-f055e5ed',
  componentId: 'ConfigureDirectorySync-f055e5ed',
});
// Add route for TroubleshooterListItemContainer-42bb11bc
addRoute({
  path: '/TroubleshooterListItemContainer-42bb11bc',
  label: 'TroubleshooterListItemContainer-42bb11bc',
  componentId: 'TroubleshooterListItemContainer-42bb11bc',
});
// Add route for Popover-497a550c
addRoute({
  path: '/Popover-497a550c',
  label: 'Popover-497a550c',
  componentId: 'Popover-497a550c',
});
// Add route for CustomEmailTextField-f6885918
addRoute({
  path: '/CustomEmailTextField-f6885918',
  label: 'CustomEmailTextField-f6885918',
  componentId: 'CustomEmailTextField-f6885918',
});
// Add route for Button-3e82cba7
addRoute({
  path: '/Button-3e82cba7',
  label: 'Button-3e82cba7',
  componentId: 'Button-3e82cba7',
});
// Add route for CalendarSwitchComponent-229b8ed4
addRoute({
  path: '/CalendarSwitchComponent-229b8ed4',
  label: 'CalendarSwitchComponent-229b8ed4',
  componentId: 'CalendarSwitchComponent-229b8ed4',
});
// Add route for ApiKeyListItem-ccabc2db
addRoute({
  path: '/ApiKeyListItem-ccabc2db',
  label: 'ApiKeyListItem-ccabc2db',
  componentId: 'ApiKeyListItem-ccabc2db',
});
// Add route for InstallAppButton-a5b04c94
addRoute({
  path: '/InstallAppButton-a5b04c94',
  label: 'InstallAppButton-a5b04c94',
  componentId: 'InstallAppButton-a5b04c94',
});
// Add route for ListSkeleton-110113b4
addRoute({
  path: '/ListSkeleton-110113b4',
  label: 'ListSkeleton-110113b4',
  componentId: 'ListSkeleton-110113b4',
});
// Add route for PlatformPlans-b450f6b9
addRoute({
  path: '/PlatformPlans-b450f6b9',
  label: 'PlatformPlans-b450f6b9',
  componentId: 'PlatformPlans-b450f6b9',
});
// Add route for LayoutWrapper-6570dc44
addRoute({
  path: '/LayoutWrapper-6570dc44',
  label: 'LayoutWrapper-6570dc44',
  componentId: 'LayoutWrapper-6570dc44',
});
// Add route for InsightsVirtualQueuesPage-a4546e1d
addRoute({
  path: '/InsightsVirtualQueuesPage-a4546e1d',
  label: 'InsightsVirtualQueuesPage-a4546e1d',
  componentId: 'InsightsVirtualQueuesPage-a4546e1d',
});
// Add route for Badge-db0b4515
addRoute({
  path: '/Badge-db0b4515',
  label: 'Badge-db0b4515',
  componentId: 'Badge-db0b4515',
});
// Add route for PrivacyView-2477696f
addRoute({
  path: '/PrivacyView-2477696f',
  label: 'PrivacyView-2477696f',
  componentId: 'PrivacyView-2477696f',
});
// Add route for ServerPage-c1e73d4a
addRoute({
  path: '/ServerPage-c1e73d4a',
  label: 'ServerPage-c1e73d4a',
  componentId: 'ServerPage-c1e73d4a',
});
// Add route for VerifyEmailByCode-69c7619f
addRoute({
  path: '/VerifyEmailByCode-69c7619f',
  label: 'VerifyEmailByCode-69c7619f',
  componentId: 'VerifyEmailByCode-69c7619f',
});
// Add route for CreateEventsOnCalendarSelect-333a0aa3
addRoute({
  path: '/CreateEventsOnCalendarSelect-333a0aa3',
  label: 'CreateEventsOnCalendarSelect-333a0aa3',
  componentId: 'CreateEventsOnCalendarSelect-333a0aa3',
});
// Add route for ForgotPasswordEmail-3cc12130
addRoute({
  path: '/ForgotPasswordEmail-3cc12130',
  label: 'ForgotPasswordEmail-3cc12130',
  componentId: 'ForgotPasswordEmail-3cc12130',
});
// Add route for Skeleton-9bc6b401
addRoute({
  path: '/Skeleton-9bc6b401',
  label: 'Skeleton-9bc6b401',
  componentId: 'Skeleton-9bc6b401',
});
// Add route for FreshChatScript-5cd72cc1
addRoute({
  path: '/FreshChatScript-5cd72cc1',
  label: 'FreshChatScript-5cd72cc1',
  componentId: 'FreshChatScript-5cd72cc1',
});
// Add route for PaymentFormComponent-bab67fab
addRoute({
  path: '/PaymentFormComponent-bab67fab',
  label: 'PaymentFormComponent-bab67fab',
  componentId: 'PaymentFormComponent-bab67fab',
});
// Add route for GeneralQueryView-ef57bbfb
addRoute({
  path: '/GeneralQueryView-ef57bbfb',
  label: 'GeneralQueryView-ef57bbfb',
  componentId: 'GeneralQueryView-ef57bbfb',
});
// Add route for ToastDescription-cd4ba3bb
addRoute({
  path: '/ToastDescription-cd4ba3bb',
  label: 'ToastDescription-cd4ba3bb',
  componentId: 'ToastDescription-cd4ba3bb',
});
// Add route for KeyField-af3a35e2
addRoute({
  path: '/KeyField-af3a35e2',
  label: 'KeyField-af3a35e2',
  componentId: 'KeyField-af3a35e2',
});
// Add route for EventAdvancedWebWrapper-acac8393
addRoute({
  path: '/EventAdvancedWebWrapper-acac8393',
  label: 'EventAdvancedWebWrapper-acac8393',
  componentId: 'EventAdvancedWebWrapper-acac8393',
});
// Add route for SearchDialog-018e2d7a
addRoute({
  path: '/SearchDialog-018e2d7a',
  label: 'SearchDialog-018e2d7a',
  componentId: 'SearchDialog-018e2d7a',
});
// Add route for ConnectAndJoin-aece3bed
addRoute({
  path: '/ConnectAndJoin-aece3bed',
  label: 'ConnectAndJoin-aece3bed',
  componentId: 'ConnectAndJoin-aece3bed',
});
// Add route for InstallAppButtonWithoutPlanCheck-a5b04c94
addRoute({
  path: '/InstallAppButtonWithoutPlanCheck-a5b04c94',
  label: 'InstallAppButtonWithoutPlanCheck-a5b04c94',
  componentId: 'InstallAppButtonWithoutPlanCheck-a5b04c94',
});
// Add route for EventTypeAppSettingsInterface-5d483178
addRoute({
  path: '/EventTypeAppSettingsInterface-5d483178',
  label: 'EventTypeAppSettingsInterface-5d483178',
  componentId: 'EventTypeAppSettingsInterface-5d483178',
});
// Add route for ServerPage-7510ccc4
addRoute({
  path: '/ServerPage-7510ccc4',
  label: 'ServerPage-7510ccc4',
  componentId: 'ServerPage-7510ccc4',
});
// Add route for ToggleGroup-b9984fb0
addRoute({
  path: '/ToggleGroup-b9984fb0',
  label: 'ToggleGroup-b9984fb0',
  componentId: 'ToggleGroup-b9984fb0',
});
// Add route for TeamsUpgradeBanner-74244134
addRoute({
  path: '/TeamsUpgradeBanner-74244134',
  label: 'TeamsUpgradeBanner-74244134',
  componentId: 'TeamsUpgradeBanner-74244134',
});
// Add route for Page-6f3caa6e
addRoute({
  path: '/Page-6f3caa6e',
  label: 'Page-6f3caa6e',
  componentId: 'Page-6f3caa6e',
});
// Add route for AddCalendarButton-ca0b24b2
addRoute({
  path: '/AddCalendarButton-ca0b24b2',
  label: 'AddCalendarButton-ca0b24b2',
  componentId: 'AddCalendarButton-ca0b24b2',
});
// Add route for PayIcon-18a755c9
addRoute({
  path: '/PayIcon-18a755c9',
  label: 'PayIcon-18a755c9',
  componentId: 'PayIcon-18a755c9',
});
// Add route for EventTypeAppCard-bde52ee6
addRoute({
  path: '/EventTypeAppCard-bde52ee6',
  label: 'EventTypeAppCard-bde52ee6',
  componentId: 'EventTypeAppCard-bde52ee6',
});
// Add route for AvailableTimes-1347bea0
addRoute({
  path: '/AvailableTimes-1347bea0',
  label: 'AvailableTimes-1347bea0',
  componentId: 'AvailableTimes-1347bea0',
});
// Add route for MeetingTimeInTimezones-125e0652
addRoute({
  path: '/MeetingTimeInTimezones-125e0652',
  label: 'MeetingTimeInTimezones-125e0652',
  componentId: 'MeetingTimeInTimezones-125e0652',
});
// Add route for Pagination-88cbc536
addRoute({
  path: '/Pagination-88cbc536',
  label: 'Pagination-88cbc536',
  componentId: 'Pagination-88cbc536',
});
// Add route for ServerPage-87bb95ba
addRoute({
  path: '/ServerPage-87bb95ba',
  label: 'ServerPage-87bb95ba',
  componentId: 'ServerPage-87bb95ba',
});
// Add route for HoverCardPortal-f32f8bfd
addRoute({
  path: '/HoverCardPortal-f32f8bfd',
  label: 'HoverCardPortal-f32f8bfd',
  componentId: 'HoverCardPortal-f32f8bfd',
});
// Add route for MonthlyDigestEmail-85f33101
addRoute({
  path: '/MonthlyDigestEmail-85f33101',
  label: 'MonthlyDigestEmail-85f33101',
  componentId: 'MonthlyDigestEmail-85f33101',
});
// Add route for Page-39d56cc8
addRoute({
  path: '/Page-39d56cc8',
  label: 'Page-39d56cc8',
  componentId: 'Page-39d56cc8',
});
// Add route for Calendar-8580d1b1
addRoute({
  path: '/Calendar-8580d1b1',
  label: 'Calendar-8580d1b1',
  componentId: 'Calendar-8580d1b1',
});
// Add route for Page-a397ef86
addRoute({
  path: '/Page-a397ef86',
  label: 'Page-a397ef86',
  componentId: 'Page-a397ef86',
});
// Add route for CreateNewOutOfOfficeEntry-7af6a0b2
addRoute({
  path: '/CreateNewOutOfOfficeEntry-7af6a0b2',
  label: 'CreateNewOutOfOfficeEntry-7af6a0b2',
  componentId: 'CreateNewOutOfOfficeEntry-7af6a0b2',
});
// Add route for DropdownMenuTriggerItem-1e023307
addRoute({
  path: '/DropdownMenuTriggerItem-1e023307',
  label: 'DropdownMenuTriggerItem-1e023307',
  componentId: 'DropdownMenuTriggerItem-1e023307',
});
// Add route for WebhookListItem-c3f17413
addRoute({
  path: '/WebhookListItem-c3f17413',
  label: 'WebhookListItem-c3f17413',
  componentId: 'WebhookListItem-c3f17413',
});
// Add route for Segment-ea376725
addRoute({
  path: '/Segment-ea376725',
  label: 'Segment-ea376725',
  componentId: 'Segment-ea376725',
});
// Add route for TwoFactor-7388fe86
addRoute({
  path: '/TwoFactor-7388fe86',
  label: 'TwoFactor-7388fe86',
  componentId: 'TwoFactor-7388fe86',
});
// Add route for Schedule-9ac5b094
addRoute({
  path: '/Schedule-9ac5b094',
  label: 'Schedule-9ac5b094',
  componentId: 'Schedule-9ac5b094',
});
// Add route for SAMLSSO-b83cee6b
addRoute({
  path: '/SAMLSSO-b83cee6b',
  label: 'SAMLSSO-b83cee6b',
  componentId: 'SAMLSSO-b83cee6b',
});
// Add route for TravelScheduleModal-439f1863
addRoute({
  path: '/TravelScheduleModal-439f1863',
  label: 'TravelScheduleModal-439f1863',
  componentId: 'TravelScheduleModal-439f1863',
});
// Add route for ServerPageWrapper-59db34f0
addRoute({
  path: '/ServerPageWrapper-59db34f0',
  label: 'ServerPageWrapper-59db34f0',
  componentId: 'ServerPageWrapper-59db34f0',
});
// Add route for BookEventFormWrapperComponent-3b804aef
addRoute({
  path: '/BookEventFormWrapperComponent-3b804aef',
  label: 'BookEventFormWrapperComponent-3b804aef',
  componentId: 'BookEventFormWrapperComponent-3b804aef',
});
// Add route for TopBanner-4bd2c8f7
addRoute({
  path: '/TopBanner-4bd2c8f7',
  label: 'TopBanner-4bd2c8f7',
  componentId: 'TopBanner-4bd2c8f7',
});
// Add route for CommandList-8539b5ed
addRoute({
  path: '/CommandList-8539b5ed',
  label: 'CommandList-8539b5ed',
  componentId: 'CommandList-8539b5ed',
});
// Add route for SendgridSetup-3f0b13c0
addRoute({
  path: '/SendgridSetup-3f0b13c0',
  label: 'SendgridSetup-3f0b13c0',
  componentId: 'SendgridSetup-3f0b13c0',
});
// Add route for PageWrapper-7a159005
addRoute({
  path: '/PageWrapper-7a159005',
  label: 'PageWrapper-7a159005',
  componentId: 'PageWrapper-7a159005',
});
// Add route for Exchange2013CalendarSetup-8ddb3e24
addRoute({
  path: '/Exchange2013CalendarSetup-8ddb3e24',
  label: 'Exchange2013CalendarSetup-8ddb3e24',
  componentId: 'Exchange2013CalendarSetup-8ddb3e24',
});
// Add route for BookingStatusLineChart-b92bde5d
addRoute({
  path: '/BookingStatusLineChart-b92bde5d',
  label: 'BookingStatusLineChart-b92bde5d',
  componentId: 'BookingStatusLineChart-b92bde5d',
});
// Add route for CreateOrEditOutOfOfficeEntryModal-5c842212
addRoute({
  path: '/CreateOrEditOutOfOfficeEntryModal-5c842212',
  label: 'CreateOrEditOutOfOfficeEntryModal-5c842212',
  componentId: 'CreateOrEditOutOfOfficeEntryModal-5c842212',
});
// Add route for AdminAPIView-b248456e
addRoute({
  path: '/AdminAPIView-b248456e',
  label: 'AdminAPIView-b248456e',
  componentId: 'AdminAPIView-b248456e',
});
// Add route for AvailabilityEditSheet-a8c66f9c
addRoute({
  path: '/AvailabilityEditSheet-a8c66f9c',
  label: 'AvailabilityEditSheet-a8c66f9c',
  componentId: 'AvailabilityEditSheet-a8c66f9c',
});
// Add route for DialogClose-3556910a
addRoute({
  path: '/DialogClose-3556910a',
  label: 'DialogClose-3556910a',
  componentId: 'DialogClose-3556910a',
});
// Add route for tabs-812f5980
addRoute({
  path: '/tabs-812f5980',
  label: 'tabs-812f5980',
  componentId: 'tabs-812f5980',
});
// Add route for Page-a4e2a47b
addRoute({
  path: '/Page-a4e2a47b',
  label: 'Page-a4e2a47b',
  componentId: 'Page-a4e2a47b',
});
// Add route for CommandShortcut-8539b5ed
addRoute({
  path: '/CommandShortcut-8539b5ed',
  label: 'CommandShortcut-8539b5ed',
  componentId: 'CommandShortcut-8539b5ed',
});
// Add route for ServerPage-5886d2e1
addRoute({
  path: '/ServerPage-5886d2e1',
  label: 'ServerPage-5886d2e1',
  componentId: 'ServerPage-5886d2e1',
});
// Add route for TeamMembersCTA-80df06f7
addRoute({
  path: '/TeamMembersCTA-80df06f7',
  label: 'TeamMembersCTA-80df06f7',
  componentId: 'TeamMembersCTA-80df06f7',
});
// Add route for ToastTitle-cd4ba3bb
addRoute({
  path: '/ToastTitle-cd4ba3bb',
  label: 'ToastTitle-cd4ba3bb',
  componentId: 'ToastTitle-cd4ba3bb',
});
// Add route for ShellSubHeading-f1bee9b8
addRoute({
  path: '/ShellSubHeading-f1bee9b8',
  label: 'ShellSubHeading-f1bee9b8',
  componentId: 'ShellSubHeading-f1bee9b8',
});
// Add route for HighestRatedMembersTable-28932fea
addRoute({
  path: '/HighestRatedMembersTable-28932fea',
  label: 'HighestRatedMembersTable-28932fea',
  componentId: 'HighestRatedMembersTable-28932fea',
});
// Add route for NoSlotsNotificationSwitch-5c973291
addRoute({
  path: '/NoSlotsNotificationSwitch-5c973291',
  label: 'NoSlotsNotificationSwitch-5c973291',
  componentId: 'NoSlotsNotificationSwitch-5c973291',
});
// Add route for Page-f03b7649
addRoute({
  path: '/Page-f03b7649',
  label: 'Page-f03b7649',
  componentId: 'Page-f03b7649',
});
// Add route for Page-df3bd974
addRoute({
  path: '/Page-df3bd974',
  label: 'Page-df3bd974',
  componentId: 'Page-df3bd974',
});
// Add route for DialogHeader-3556910a
addRoute({
  path: '/DialogHeader-3556910a',
  label: 'DialogHeader-3556910a',
  componentId: 'DialogHeader-3556910a',
});
// Add route for ConnectionInfo-eaea820a
addRoute({
  path: '/ConnectionInfo-eaea820a',
  label: 'ConnectionInfo-eaea820a',
  componentId: 'ConnectionInfo-eaea820a',
});
// Add route for NoShowFeeChargedEmail-1dcaceb2
addRoute({
  path: '/NoShowFeeChargedEmail-1dcaceb2',
  label: 'NoShowFeeChargedEmail-1dcaceb2',
  componentId: 'NoShowFeeChargedEmail-1dcaceb2',
});
// Add route for NavTabs-293c9def
addRoute({
  path: '/NavTabs-293c9def',
  label: 'NavTabs-293c9def',
  componentId: 'NavTabs-293c9def',
});
// Add route for EventTypeAppSettingsWrapper-ce51c992
addRoute({
  path: '/EventTypeAppSettingsWrapper-ce51c992',
  label: 'EventTypeAppSettingsWrapper-ce51c992',
  componentId: 'EventTypeAppSettingsWrapper-ce51c992',
});
// Add route for EventList-202797a3
addRoute({
  path: '/EventList-202797a3',
  label: 'EventList-202797a3',
  componentId: 'EventList-202797a3',
});
// Add route for RadioField-caa432b7
addRoute({
  path: '/RadioField-caa432b7',
  label: 'RadioField-caa432b7',
  componentId: 'RadioField-caa432b7',
});
// Add route for RadioArea-1c0a2c73
addRoute({
  path: '/RadioArea-1c0a2c73',
  label: 'RadioArea-1c0a2c73',
  componentId: 'RadioArea-1c0a2c73',
});
// Add route for Page-de41206e
addRoute({
  path: '/Page-de41206e',
  label: 'Page-de41206e',
  componentId: 'Page-de41206e',
});
// Add route for DropdownMenuContent-1e023307
addRoute({
  path: '/DropdownMenuContent-1e023307',
  label: 'DropdownMenuContent-1e023307',
  componentId: 'DropdownMenuContent-1e023307',
});
// Add route for WhenInfo-feee39b8
addRoute({
  path: '/WhenInfo-feee39b8',
  label: 'WhenInfo-feee39b8',
  componentId: 'WhenInfo-feee39b8',
});
// Add route for Page-d1f2419b
addRoute({
  path: '/Page-d1f2419b',
  label: 'Page-d1f2419b',
  componentId: 'Page-d1f2419b',
});
// Add route for DeleteBulkUsers-cca373f8
addRoute({
  path: '/DeleteBulkUsers-cca373f8',
  label: 'DeleteBulkUsers-cca373f8',
  componentId: 'DeleteBulkUsers-cca373f8',
});
// Add route for Checkbox-2b51e4b8
addRoute({
  path: '/Checkbox-2b51e4b8',
  label: 'Checkbox-2b51e4b8',
  componentId: 'Checkbox-2b51e4b8',
});
// Add route for Away-e682df8a
addRoute({
  path: '/Away-e682df8a',
  label: 'Away-e682df8a',
  componentId: 'Away-e682df8a',
});
// Add route for ServerPageWrapper-ca43de6e
addRoute({
  path: '/ServerPageWrapper-ca43de6e',
  label: 'ServerPageWrapper-ca43de6e',
  componentId: 'ServerPageWrapper-ca43de6e',
});
// Add route for OtherTeamList-a7662b64
addRoute({
  path: '/OtherTeamList-a7662b64',
  label: 'OtherTeamList-a7662b64',
  componentId: 'OtherTeamList-a7662b64',
});
// Add route for getActionIcon-b2767a3d
addRoute({
  path: '/getActionIcon-b2767a3d',
  label: 'getActionIcon-b2767a3d',
  componentId: 'getActionIcon-b2767a3d',
});
// Add route for InstallAppButton-dc2a479f
addRoute({
  path: '/InstallAppButton-dc2a479f',
  label: 'InstallAppButton-dc2a479f',
  componentId: 'InstallAppButton-dc2a479f',
});
// Add route for Meta-80e7bf29
addRoute({
  path: '/Meta-80e7bf29',
  label: 'Meta-80e7bf29',
  componentId: 'Meta-80e7bf29',
});
// Add route for DeleteMemberModal-dcc85138
addRoute({
  path: '/DeleteMemberModal-dcc85138',
  label: 'DeleteMemberModal-dcc85138',
  componentId: 'DeleteMemberModal-dcc85138',
});
// Add route for AvailabilitySettings-36a02cae
addRoute({
  path: '/AvailabilitySettings-36a02cae',
  label: 'AvailabilitySettings-36a02cae',
  componentId: 'AvailabilitySettings-36a02cae',
});
// Add route for QueryCell-a260aaca
addRoute({
  path: '/QueryCell-a260aaca',
  label: 'QueryCell-a260aaca',
  componentId: 'QueryCell-a260aaca',
});
// Add route for SingleValueComponent-13916a22
addRoute({
  path: '/SingleValueComponent-13916a22',
  label: 'SingleValueComponent-13916a22',
  componentId: 'SingleValueComponent-13916a22',
});
// Add route for EventTypeAppSettingsInterface-48514a00
addRoute({
  path: '/EventTypeAppSettingsInterface-48514a00',
  label: 'EventTypeAppSettingsInterface-48514a00',
  componentId: 'EventTypeAppSettingsInterface-48514a00',
});
// Add route for EventTypeAppCard-01aca4c0
addRoute({
  path: '/EventTypeAppCard-01aca4c0',
  label: 'EventTypeAppCard-01aca4c0',
  componentId: 'EventTypeAppCard-01aca4c0',
});
// Add route for DropdownMenuRadioGroup-1e023307
addRoute({
  path: '/DropdownMenuRadioGroup-1e023307',
  label: 'DropdownMenuRadioGroup-1e023307',
  componentId: 'DropdownMenuRadioGroup-1e023307',
});
// Add route for TeamAvailabilityTimes-3f1756c8
addRoute({
  path: '/TeamAvailabilityTimes-3f1756c8',
  label: 'TeamAvailabilityTimes-3f1756c8',
  componentId: 'TeamAvailabilityTimes-3f1756c8',
});
// Add route for LockedSMSView-de032f01
addRoute({
  path: '/LockedSMSView-de032f01',
  label: 'LockedSMSView-de032f01',
  componentId: 'LockedSMSView-de032f01',
});
// Add route for AnimatedPopover-9cfea3e0
addRoute({
  path: '/AnimatedPopover-9cfea3e0',
  label: 'AnimatedPopover-9cfea3e0',
  componentId: 'AnimatedPopover-9cfea3e0',
});
// Add route for Page-655819dd
addRoute({
  path: '/Page-655819dd',
  label: 'Page-655819dd',
  componentId: 'Page-655819dd',
});
// Add route for AvatarGroup-36c9eb44
addRoute({
  path: '/AvatarGroup-36c9eb44',
  label: 'AvatarGroup-36c9eb44',
  componentId: 'AvatarGroup-36c9eb44',
});
// Add route for EventSetupTabWebWrapper-0884fe8b
addRoute({
  path: '/EventSetupTabWebWrapper-0884fe8b',
  label: 'EventSetupTabWebWrapper-0884fe8b',
  componentId: 'EventSetupTabWebWrapper-0884fe8b',
});
// Add route for EventTypeAppCard-151eed06
addRoute({
  path: '/EventTypeAppCard-151eed06',
  label: 'EventTypeAppCard-151eed06',
  componentId: 'EventTypeAppCard-151eed06',
});
// Add route for HorizontalTabItem-505b0f7e
addRoute({
  path: '/HorizontalTabItem-505b0f7e',
  label: 'HorizontalTabItem-505b0f7e',
  componentId: 'HorizontalTabItem-505b0f7e',
});
// Add route for WebhookListItemSkeleton-93e6f11a
addRoute({
  path: '/WebhookListItemSkeleton-93e6f11a',
  label: 'WebhookListItemSkeleton-93e6f11a',
  componentId: 'WebhookListItemSkeleton-93e6f11a',
});
// Add route for Select-e25c4bfb
addRoute({
  path: '/Select-e25c4bfb',
  label: 'Select-e25c4bfb',
  componentId: 'Select-e25c4bfb',
});
// Add route for Page-3ae25def
addRoute({
  path: '/Page-3ae25def',
  label: 'Page-3ae25def',
  componentId: 'Page-3ae25def',
});
// Add route for HelpCards-2a839df3
addRoute({
  path: '/HelpCards-2a839df3',
  label: 'HelpCards-2a839df3',
  componentId: 'HelpCards-2a839df3',
});
// Add route for EventMeta-93339795
addRoute({
  path: '/EventMeta-93339795',
  label: 'EventMeta-93339795',
  componentId: 'EventMeta-93339795',
});
// Add route for DropdownMenuLabel-1e023307
addRoute({
  path: '/DropdownMenuLabel-1e023307',
  label: 'DropdownMenuLabel-1e023307',
  componentId: 'DropdownMenuLabel-1e023307',
});
// Add route for LayoutWrapper-3484cb1d
addRoute({
  path: '/LayoutWrapper-3484cb1d',
  label: 'LayoutWrapper-3484cb1d',
  componentId: 'LayoutWrapper-3484cb1d',
});
// Add route for EventTypesStepCard-f78916c7
addRoute({
  path: '/EventTypesStepCard-f78916c7',
  label: 'EventTypesStepCard-f78916c7',
  componentId: 'EventTypesStepCard-f78916c7',
});
// Add route for Providers-0cb67f6b
addRoute({
  path: '/Providers-0cb67f6b',
  label: 'Providers-0cb67f6b',
  componentId: 'Providers-0cb67f6b',
});
// Add route for EventTeamAssignmentTab-5f2c2dfb
addRoute({
  path: '/EventTeamAssignmentTab-5f2c2dfb',
  label: 'EventTeamAssignmentTab-5f2c2dfb',
  componentId: 'EventTeamAssignmentTab-5f2c2dfb',
});
// Add route for EventTypeWebhookListItem-2108ff71
addRoute({
  path: '/EventTypeWebhookListItem-2108ff71',
  label: 'EventTypeWebhookListItem-2108ff71',
  componentId: 'EventTypeWebhookListItem-2108ff71',
});
// Add route for TeamPill-d26dc51a
addRoute({
  path: '/TeamPill-d26dc51a',
  label: 'TeamPill-d26dc51a',
  componentId: 'TeamPill-d26dc51a',
});
// Add route for AdminUserContainer-b0f24470
addRoute({
  path: '/AdminUserContainer-b0f24470',
  label: 'AdminUserContainer-b0f24470',
  componentId: 'AdminUserContainer-b0f24470',
});
// Add route for BookingFields-30f12aa6
addRoute({
  path: '/BookingFields-30f12aa6',
  label: 'BookingFields-30f12aa6',
  componentId: 'BookingFields-30f12aa6',
});
// Add route for AttendeeWasRequestedToRescheduleEmail-6af941bf
addRoute({
  path: '/AttendeeWasRequestedToRescheduleEmail-6af941bf',
  label: 'AttendeeWasRequestedToRescheduleEmail-6af941bf',
  componentId: 'AttendeeWasRequestedToRescheduleEmail-6af941bf',
});
// Add route for DialogTrigger-3556910a
addRoute({
  path: '/DialogTrigger-3556910a',
  label: 'DialogTrigger-3556910a',
  componentId: 'DialogTrigger-3556910a',
});
// Add route for useEmbedTypes-0d98799f
addRoute({
  path: '/useEmbedTypes-0d98799f',
  label: 'useEmbedTypes-0d98799f',
  componentId: 'useEmbedTypes-0d98799f',
});
// Add route for AllApps-f4e44dbe
addRoute({
  path: '/AllApps-f4e44dbe',
  label: 'AllApps-f4e44dbe',
  componentId: 'AllApps-f4e44dbe',
});
// Add route for PayPalSetup-79c39aef
addRoute({
  path: '/PayPalSetup-79c39aef',
  label: 'PayPalSetup-79c39aef',
  componentId: 'PayPalSetup-79c39aef',
});
// Add route for WrappedApp-f5c942c4
addRoute({
  path: '/WrappedApp-f5c942c4',
  label: 'WrappedApp-f5c942c4',
  componentId: 'WrappedApp-f5c942c4',
});
// Add route for Price-ecb316e6
addRoute({
  path: '/Price-ecb316e6',
  label: 'Price-ecb316e6',
  componentId: 'Price-ecb316e6',
});
// Add route for SheetTrigger-fc56f4fa
addRoute({
  path: '/SheetTrigger-fc56f4fa',
  label: 'SheetTrigger-fc56f4fa',
  componentId: 'SheetTrigger-fc56f4fa',
});
// Add route for ServerPageWrapper-d77b96ea
addRoute({
  path: '/ServerPageWrapper-d77b96ea',
  label: 'ServerPageWrapper-d77b96ea',
  componentId: 'ServerPageWrapper-d77b96ea',
});
// Add route for TimezoneChangeDialog-f10025f3
addRoute({
  path: '/TimezoneChangeDialog-f10025f3',
  label: 'TimezoneChangeDialog-f10025f3',
  componentId: 'TimezoneChangeDialog-f10025f3',
});
// Add route for OrgGeneralView-88a7d535
addRoute({
  path: '/OrgGeneralView-88a7d535',
  label: 'OrgGeneralView-88a7d535',
  componentId: 'OrgGeneralView-88a7d535',
});
// Add route for FilterToggle-9cb62557
addRoute({
  path: '/FilterToggle-9cb62557',
  label: 'FilterToggle-9cb62557',
  componentId: 'FilterToggle-9cb62557',
});
// Add route for EmptyPage-4486a8b5
addRoute({
  path: '/EmptyPage-4486a8b5',
  label: 'EmptyPage-4486a8b5',
  componentId: 'EmptyPage-4486a8b5',
});
// Add route for Page-0fc6d22e
addRoute({
  path: '/Page-0fc6d22e',
  label: 'Page-0fc6d22e',
  componentId: 'Page-0fc6d22e',
});
// Add route for FilterResults-485d0c51
addRoute({
  path: '/FilterResults-485d0c51',
  label: 'FilterResults-485d0c51',
  componentId: 'FilterResults-485d0c51',
});
// Add route for Page-69357dad
addRoute({
  path: '/Page-69357dad',
  label: 'Page-69357dad',
  componentId: 'Page-69357dad',
});
// Add route for Page-c549806b
addRoute({
  path: '/Page-c549806b',
  label: 'Page-c549806b',
  componentId: 'Page-c549806b',
});
// Add route for EventTypeDescription-65b6efbd
addRoute({
  path: '/EventTypeDescription-65b6efbd',
  label: 'EventTypeDescription-65b6efbd',
  componentId: 'EventTypeDescription-65b6efbd',
});
// Add route for CalProvider-8d1ef571
addRoute({
  path: '/CalProvider-8d1ef571',
  label: 'CalProvider-8d1ef571',
  componentId: 'CalProvider-8d1ef571',
});
// Add route for Page-8f0e5cc3
addRoute({
  path: '/Page-8f0e5cc3',
  label: 'Page-8f0e5cc3',
  componentId: 'Page-8f0e5cc3',
});
// Add route for TableHead-d8f2d822
addRoute({
  path: '/TableHead-d8f2d822',
  label: 'TableHead-d8f2d822',
  componentId: 'TableHead-d8f2d822',
});
// Add route for PopoverContent-497a550c
addRoute({
  path: '/PopoverContent-497a550c',
  label: 'PopoverContent-497a550c',
  componentId: 'PopoverContent-497a550c',
});
// Add route for WebhooksView-e59c4120
addRoute({
  path: '/WebhooksView-e59c4120',
  label: 'WebhooksView-e59c4120',
  componentId: 'WebhooksView-e59c4120',
});
// Add route for CheckboxField-2b51e4b8
addRoute({
  path: '/CheckboxField-2b51e4b8',
  label: 'CheckboxField-2b51e4b8',
  componentId: 'CheckboxField-2b51e4b8',
});
// Add route for ListItemText-2afc4dd7
addRoute({
  path: '/ListItemText-2afc4dd7',
  label: 'ListItemText-2afc4dd7',
  componentId: 'ListItemText-2afc4dd7',
});
// Add route for AttendeeCancelledSeatEmail-6c27cd47
addRoute({
  path: '/AttendeeCancelledSeatEmail-6c27cd47',
  label: 'AttendeeCancelledSeatEmail-6c27cd47',
  componentId: 'AttendeeCancelledSeatEmail-6c27cd47',
});
// Add route for LayoutWrapper-f8eaac5a
addRoute({
  path: '/LayoutWrapper-f8eaac5a',
  label: 'LayoutWrapper-f8eaac5a',
  componentId: 'LayoutWrapper-f8eaac5a',
});
// Add route for EventTypeAppSettingsInterface-17efae1c
addRoute({
  path: '/EventTypeAppSettingsInterface-17efae1c',
  label: 'EventTypeAppSettingsInterface-17efae1c',
  componentId: 'EventTypeAppSettingsInterface-17efae1c',
});
// Add route for AddNewTeamsForm-82ce47a1
addRoute({
  path: '/AddNewTeamsForm-82ce47a1',
  label: 'AddNewTeamsForm-82ce47a1',
  componentId: 'AddNewTeamsForm-82ce47a1',
});
// Add route for Command-8539b5ed
addRoute({
  path: '/Command-8539b5ed',
  label: 'Command-8539b5ed',
  componentId: 'Command-8539b5ed',
});
// Add route for EventMembers-0e80d0ea
addRoute({
  path: '/EventMembers-0e80d0ea',
  label: 'EventMembers-0e80d0ea',
  componentId: 'EventMembers-0e80d0ea',
});
// Add route for FormInputFieldsSkeleton-4f8c71c0
addRoute({
  path: '/FormInputFieldsSkeleton-4f8c71c0',
  label: 'FormInputFieldsSkeleton-4f8c71c0',
  componentId: 'FormInputFieldsSkeleton-4f8c71c0',
});
// Add route for TwoFactorAuthSection-72f24ae5
addRoute({
  path: '/TwoFactorAuthSection-72f24ae5',
  label: 'TwoFactorAuthSection-72f24ae5',
  componentId: 'TwoFactorAuthSection-72f24ae5',
});
// Add route for AvailabilityPage-44cb669d
addRoute({
  path: '/AvailabilityPage-44cb669d',
  label: 'AvailabilityPage-44cb669d',
  componentId: 'AvailabilityPage-44cb669d',
});
// Add route for FreshChatProvider-53091f5b
addRoute({
  path: '/FreshChatProvider-53091f5b',
  label: 'FreshChatProvider-53091f5b',
  componentId: 'FreshChatProvider-53091f5b',
});
// Add route for AccountsStepCard-da873d21
addRoute({
  path: '/AccountsStepCard-da873d21',
  label: 'AccountsStepCard-da873d21',
  componentId: 'AccountsStepCard-da873d21',
});
// Add route for TemplateCard-5beec422
addRoute({
  path: '/TemplateCard-5beec422',
  label: 'TemplateCard-5beec422',
  componentId: 'TemplateCard-5beec422',
});
// Add route for FormAction-a7afc660
addRoute({
  path: '/FormAction-a7afc660',
  label: 'FormAction-a7afc660',
  componentId: 'FormAction-a7afc660',
});
// Add route for LoadingInsight-9faae806
addRoute({
  path: '/LoadingInsight-9faae806',
  label: 'LoadingInsight-9faae806',
  componentId: 'LoadingInsight-9faae806',
});
// Add route for HitPaySetup-42e0d657
addRoute({
  path: '/HitPaySetup-42e0d657',
  label: 'HitPaySetup-42e0d657',
  componentId: 'HitPaySetup-42e0d657',
});
// Add route for CreateANewPlatformForm-e0b902ca
addRoute({
  path: '/CreateANewPlatformForm-e0b902ca',
  label: 'CreateANewPlatformForm-e0b902ca',
  componentId: 'CreateANewPlatformForm-e0b902ca',
});
// Add route for ICSFeedSetup-4a698c6e
addRoute({
  path: '/ICSFeedSetup-4a698c6e',
  label: 'ICSFeedSetup-4a698c6e',
  componentId: 'ICSFeedSetup-4a698c6e',
});
// Add route for DropdownMenuGroup-1e023307
addRoute({
  path: '/DropdownMenuGroup-1e023307',
  label: 'DropdownMenuGroup-1e023307',
  componentId: 'DropdownMenuGroup-1e023307',
});
// Add route for DropdownMenuRadioItem-1e023307
addRoute({
  path: '/DropdownMenuRadioItem-1e023307',
  label: 'DropdownMenuRadioItem-1e023307',
  componentId: 'DropdownMenuRadioItem-1e023307',
});
// Add route for NewApiKeyButton-cfb68dec
addRoute({
  path: '/NewApiKeyButton-cfb68dec',
  label: 'NewApiKeyButton-cfb68dec',
  componentId: 'NewApiKeyButton-cfb68dec',
});
// Add route for AppListCard-5efde8da
addRoute({
  path: '/AppListCard-5efde8da',
  label: 'AppListCard-5efde8da',
  componentId: 'AppListCard-5efde8da',
});
// Add route for TimezoneSelect-bf133f2d
addRoute({
  path: '/TimezoneSelect-bf133f2d',
  label: 'TimezoneSelect-bf133f2d',
  componentId: 'TimezoneSelect-bf133f2d',
});
// Add route for SkeletonLoader-64e54060
addRoute({
  path: '/SkeletonLoader-64e54060',
  label: 'SkeletonLoader-64e54060',
  componentId: 'SkeletonLoader-64e54060',
});
// Add route for Page-643e7546
addRoute({
  path: '/Page-643e7546',
  label: 'Page-643e7546',
  componentId: 'Page-643e7546',
});
// Add route for Layout-e6b3546f
addRoute({
  path: '/Layout-e6b3546f',
  label: 'Layout-e6b3546f',
  componentId: 'Layout-e6b3546f',
});
// Add route for RoutingKPICards-9b511c33
addRoute({
  path: '/RoutingKPICards-9b511c33',
  label: 'RoutingKPICards-9b511c33',
  componentId: 'RoutingKPICards-9b511c33',
});
// Add route for FormActionsDropdown-a7afc660
addRoute({
  path: '/FormActionsDropdown-a7afc660',
  label: 'FormActionsDropdown-a7afc660',
  componentId: 'FormActionsDropdown-a7afc660',
});
// Add route for EventTypeAppCard-fc36fb87
addRoute({
  path: '/EventTypeAppCard-fc36fb87',
  label: 'EventTypeAppCard-fc36fb87',
  componentId: 'EventTypeAppCard-fc36fb87',
});
// Add route for Teams-11b728d3
addRoute({
  path: '/Teams-11b728d3',
  label: 'Teams-11b728d3',
  componentId: 'Teams-11b728d3',
});
// Add route for UserListTable-dec9cac0
addRoute({
  path: '/UserListTable-dec9cac0',
  label: 'UserListTable-dec9cac0',
  componentId: 'UserListTable-dec9cac0',
});
// Add route for EventWorkflowsTab-0db36074
addRoute({
  path: '/EventWorkflowsTab-0db36074',
  label: 'EventWorkflowsTab-0db36074',
  componentId: 'EventWorkflowsTab-0db36074',
});
// Add route for UserPage-125994a6
addRoute({
  path: '/UserPage-125994a6',
  label: 'UserPage-125994a6',
  componentId: 'UserPage-125994a6',
});
// Add route for PageWrapper-707e5bc0
addRoute({
  path: '/PageWrapper-707e5bc0',
  label: 'PageWrapper-707e5bc0',
  componentId: 'PageWrapper-707e5bc0',
});
// Add route for CreateANewLicenseKeyForm-c84b7767
addRoute({
  path: '/CreateANewLicenseKeyForm-c84b7767',
  label: 'CreateANewLicenseKeyForm-c84b7767',
  componentId: 'CreateANewLicenseKeyForm-c84b7767',
});
// Add route for ServerPage-e20c27a5
addRoute({
  path: '/ServerPage-e20c27a5',
  label: 'ServerPage-e20c27a5',
  componentId: 'ServerPage-e20c27a5',
});
// Add route for WizardLayout-b0a4c8f0
addRoute({
  path: '/WizardLayout-b0a4c8f0',
  label: 'WizardLayout-b0a4c8f0',
  componentId: 'WizardLayout-b0a4c8f0',
});
// Add route for DeleteAttributeModal-b77044f7
addRoute({
  path: '/DeleteAttributeModal-b77044f7',
  label: 'DeleteAttributeModal-b77044f7',
  componentId: 'DeleteAttributeModal-b77044f7',
});
// Add route for PopoverTrigger-497a550c
addRoute({
  path: '/PopoverTrigger-497a550c',
  label: 'PopoverTrigger-497a550c',
  componentId: 'PopoverTrigger-497a550c',
});
// Add route for ServerPage-ed808d49
addRoute({
  path: '/ServerPage-ed808d49',
  label: 'ServerPage-ed808d49',
  componentId: 'ServerPage-ed808d49',
});
// Add route for Timezone-75f85dbf
addRoute({
  path: '/Timezone-75f85dbf',
  label: 'Timezone-75f85dbf',
  componentId: 'Timezone-75f85dbf',
});
// Add route for Page-ec38c717
addRoute({
  path: '/Page-ec38c717',
  label: 'Page-ec38c717',
  componentId: 'Page-ec38c717',
});
// Add route for ServerPage-3f93573c
addRoute({
  path: '/ServerPage-3f93573c',
  label: 'ServerPage-3f93573c',
  componentId: 'ServerPage-3f93573c',
});
// Add route for DryRunSuccessful-dbf1a934
addRoute({
  path: '/DryRunSuccessful-dbf1a934',
  label: 'DryRunSuccessful-dbf1a934',
  componentId: 'DryRunSuccessful-dbf1a934',
});
// Add route for Download-ba066fc9
addRoute({
  path: '/Download-ba066fc9',
  label: 'Download-ba066fc9',
  componentId: 'Download-ba066fc9',
});
// Add route for TimeFormatToggle-1f074389
addRoute({
  path: '/TimeFormatToggle-1f074389',
  label: 'TimeFormatToggle-1f074389',
  componentId: 'TimeFormatToggle-1f074389',
});
// Add route for VerticalTabItem-f49aaf4f
addRoute({
  path: '/VerticalTabItem-f49aaf4f',
  label: 'VerticalTabItem-f49aaf4f',
  componentId: 'VerticalTabItem-f49aaf4f',
});
// Add route for EventTypeConferencingAppSettings-6c327acd
addRoute({
  path: '/EventTypeConferencingAppSettings-6c327acd',
  label: 'EventTypeConferencingAppSettings-6c327acd',
  componentId: 'EventTypeConferencingAppSettings-6c327acd',
});
// Add route for ServerPage-3e4baa8e
addRoute({
  path: '/ServerPage-3e4baa8e',
  label: 'ServerPage-3e4baa8e',
  componentId: 'ServerPage-3e4baa8e',
});
// Add route for CreateOAuthClient-0f2cdbf4
addRoute({
  path: '/CreateOAuthClient-0f2cdbf4',
  label: 'CreateOAuthClient-0f2cdbf4',
  componentId: 'CreateOAuthClient-0f2cdbf4',
});
// Add route for AvailabilityList-44cb669d
addRoute({
  path: '/AvailabilityList-44cb669d',
  label: 'AvailabilityList-44cb669d',
  componentId: 'AvailabilityList-44cb669d',
});
// Add route for FailedBookingsByField-a814a7b9
addRoute({
  path: '/FailedBookingsByField-a814a7b9',
  label: 'FailedBookingsByField-a814a7b9',
  componentId: 'FailedBookingsByField-a814a7b9',
});
// Add route for DialogContent-3556910a
addRoute({
  path: '/DialogContent-3556910a',
  label: 'DialogContent-3556910a',
  componentId: 'DialogContent-3556910a',
});
// Add route for LayoutWrapper-32dae7d7
addRoute({
  path: '/LayoutWrapper-32dae7d7',
  label: 'LayoutWrapper-32dae7d7',
  componentId: 'LayoutWrapper-32dae7d7',
});
// Add route for AttendeeAddGuestsEmail-0e64dd05
addRoute({
  path: '/AttendeeAddGuestsEmail-0e64dd05',
  label: 'AttendeeAddGuestsEmail-0e64dd05',
  componentId: 'AttendeeAddGuestsEmail-0e64dd05',
});
// Add route for Page-72e1d65a
addRoute({
  path: '/Page-72e1d65a',
  label: 'Page-72e1d65a',
  componentId: 'Page-72e1d65a',
});
// Add route for UserFieldsResponses-099d9b3b
addRoute({
  path: '/UserFieldsResponses-099d9b3b',
  label: 'UserFieldsResponses-099d9b3b',
  componentId: 'UserFieldsResponses-099d9b3b',
});
// Add route for DisconnectIntegration-61a58dce
addRoute({
  path: '/DisconnectIntegration-61a58dce',
  label: 'DisconnectIntegration-61a58dce',
  componentId: 'DisconnectIntegration-61a58dce',
});
// Add route for ThemeLabel-6c1d1d37
addRoute({
  path: '/ThemeLabel-6c1d1d37',
  label: 'ThemeLabel-6c1d1d37',
  componentId: 'ThemeLabel-6c1d1d37',
});
// Add route for ServerPage-8888c554
addRoute({
  path: '/ServerPage-8888c554',
  label: 'ServerPage-8888c554',
  componentId: 'ServerPage-8888c554',
});
// Add route for OmniInstallAppButton-ef706fa7
addRoute({
  path: '/OmniInstallAppButton-ef706fa7',
  label: 'OmniInstallAppButton-ef706fa7',
  componentId: 'OmniInstallAppButton-ef706fa7',
});
// Add route for AtomsWrapper-fe82483b
addRoute({
  path: '/AtomsWrapper-fe82483b',
  label: 'AtomsWrapper-fe82483b',
  componentId: 'AtomsWrapper-fe82483b',
});
// Add route for EmbedDialog-dfe251be
addRoute({
  path: '/EmbedDialog-dfe251be',
  label: 'EmbedDialog-dfe251be',
  componentId: 'EmbedDialog-dfe251be',
});
// Add route for EventMetaBlock-61630078
addRoute({
  path: '/EventMetaBlock-61630078',
  label: 'EventMetaBlock-61630078',
  componentId: 'EventMetaBlock-61630078',
});
// Add route for ScreenShot-b7fbf4a7
addRoute({
  path: '/ScreenShot-b7fbf4a7',
  label: 'ScreenShot-b7fbf4a7',
  componentId: 'ScreenShot-b7fbf4a7',
});
// Add route for SheetContent-fc56f4fa
addRoute({
  path: '/SheetContent-fc56f4fa',
  label: 'SheetContent-fc56f4fa',
  componentId: 'SheetContent-fc56f4fa',
});
// Add route for Select-51e1c4ea
addRoute({
  path: '/Select-51e1c4ea',
  label: 'Select-51e1c4ea',
  componentId: 'Select-51e1c4ea',
});
// Add route for LowestRatedMembersTable-3455af9e
addRoute({
  path: '/LowestRatedMembersTable-3455af9e',
  label: 'LowestRatedMembersTable-3455af9e',
  componentId: 'LowestRatedMembersTable-3455af9e',
});
// Add route for Type-b0ef107b
addRoute({
  path: '/Type-b0ef107b',
  label: 'Type-b0ef107b',
  componentId: 'Type-b0ef107b',
});
// Add route for Page-58b1be98
addRoute({
  path: '/Page-58b1be98',
  label: 'Page-58b1be98',
  componentId: 'Page-58b1be98',
});
// Add route for DropdownActions-5463f74e
addRoute({
  path: '/DropdownActions-5463f74e',
  label: 'DropdownActions-5463f74e',
  componentId: 'DropdownActions-5463f74e',
});
// Add route for Page-cb5371de
addRoute({
  path: '/Page-cb5371de',
  label: 'Page-cb5371de',
  componentId: 'Page-cb5371de',
});
// Add route for Exchange2016CalendarSetup-59807961
addRoute({
  path: '/Exchange2016CalendarSetup-59807961',
  label: 'Exchange2016CalendarSetup-59807961',
  componentId: 'Exchange2016CalendarSetup-59807961',
});
// Add route for EventTypeSingleLayout-1a837e5c
addRoute({
  path: '/EventTypeSingleLayout-1a837e5c',
  label: 'EventTypeSingleLayout-1a837e5c',
  componentId: 'EventTypeSingleLayout-1a837e5c',
});
// Add route for Select-038f8497
addRoute({
  path: '/Select-038f8497',
  label: 'Select-038f8497',
  componentId: 'Select-038f8497',
});
// Add route for Page-65aaf05a
addRoute({
  path: '/Page-65aaf05a',
  label: 'Page-65aaf05a',
  componentId: 'Page-65aaf05a',
});
// Add route for BulkEditDefaultForEventsModal-b76848d9
addRoute({
  path: '/BulkEditDefaultForEventsModal-b76848d9',
  label: 'BulkEditDefaultForEventsModal-b76848d9',
  componentId: 'BulkEditDefaultForEventsModal-b76848d9',
});
// Add route for ServerPage-4f380a5e
addRoute({
  path: '/ServerPage-4f380a5e',
  label: 'ServerPage-4f380a5e',
  componentId: 'ServerPage-4f380a5e',
});
// Add route for AddMembersWithSwitch-9a2b037e
addRoute({
  path: '/AddMembersWithSwitch-9a2b037e',
  label: 'AddMembersWithSwitch-9a2b037e',
  componentId: 'AddMembersWithSwitch-9a2b037e',
});
// Add route for App-b7fbf4a7
addRoute({
  path: '/App-b7fbf4a7',
  label: 'App-b7fbf4a7',
  componentId: 'App-b7fbf4a7',
});
// Add route for AppConfiguration-798fb503
addRoute({
  path: '/AppConfiguration-798fb503',
  label: 'AppConfiguration-798fb503',
  componentId: 'AppConfiguration-798fb503',
});
// Add route for Page-e19e4e66
addRoute({
  path: '/Page-e19e4e66',
  label: 'Page-e19e4e66',
  componentId: 'Page-e19e4e66',
});
// Add route for AppSettings-e5d62b79
addRoute({
  path: '/AppSettings-e5d62b79',
  label: 'AppSettings-e5d62b79',
  componentId: 'AppSettings-e5d62b79',
});
// Add route for GoogleWorkspaceInviteButton-ec2b0143
addRoute({
  path: '/GoogleWorkspaceInviteButton-ec2b0143',
  label: 'GoogleWorkspaceInviteButton-ec2b0143',
  componentId: 'GoogleWorkspaceInviteButton-ec2b0143',
});
// Add route for InvalidAppCredentialBanners-d1f94e1f
addRoute({
  path: '/InvalidAppCredentialBanners-d1f94e1f',
  label: 'InvalidAppCredentialBanners-d1f94e1f',
  componentId: 'InvalidAppCredentialBanners-d1f94e1f',
});
// Add route for ServerPage-012563f7
addRoute({
  path: '/ServerPage-012563f7',
  label: 'ServerPage-012563f7',
  componentId: 'ServerPage-012563f7',
});
// Add route for BookerLayoutSelector-58588afa
addRoute({
  path: '/BookerLayoutSelector-58588afa',
  label: 'BookerLayoutSelector-58588afa',
  componentId: 'BookerLayoutSelector-58588afa',
});
// Add route for InputGroupBox-f4982884
addRoute({
  path: '/InputGroupBox-f4982884',
  label: 'InputGroupBox-f4982884',
  componentId: 'InputGroupBox-f4982884',
});
// Add route for FormCard-de7353d7
addRoute({
  path: '/FormCard-de7353d7',
  label: 'FormCard-de7353d7',
  componentId: 'FormCard-de7353d7',
});
// Add route for ServerPage-eeac27b2
addRoute({
  path: '/ServerPage-eeac27b2',
  label: 'ServerPage-eeac27b2',
  componentId: 'ServerPage-eeac27b2',
});
// Add route for Type-8ae77e7c
addRoute({
  path: '/Type-8ae77e7c',
  label: 'Type-8ae77e7c',
  componentId: 'Type-8ae77e7c',
});
// Add route for SchedulerHeading-bdb8a957
addRoute({
  path: '/SchedulerHeading-bdb8a957',
  label: 'SchedulerHeading-bdb8a957',
  componentId: 'SchedulerHeading-bdb8a957',
});
// Add route for DailyVideoDownloadTranscriptEmail-6d33312a
addRoute({
  path: '/DailyVideoDownloadTranscriptEmail-6d33312a',
  label: 'DailyVideoDownloadTranscriptEmail-6d33312a',
  componentId: 'DailyVideoDownloadTranscriptEmail-6d33312a',
});
// Add route for LinkIconButton-58e9f994
addRoute({
  path: '/LinkIconButton-58e9f994',
  label: 'LinkIconButton-58e9f994',
  componentId: 'LinkIconButton-58e9f994',
});
// Add route for ProfileDropdown-c4c3927c
addRoute({
  path: '/ProfileDropdown-c4c3927c',
  label: 'ProfileDropdown-c4c3927c',
  componentId: 'ProfileDropdown-c4c3927c',
});
// Add route for SkeletonLoader-53b46915
addRoute({
  path: '/SkeletonLoader-53b46915',
  label: 'SkeletonLoader-53b46915',
  componentId: 'SkeletonLoader-53b46915',
});
// Add route for EventTypeAppCard-dba8d7b6
addRoute({
  path: '/EventTypeAppCard-dba8d7b6',
  label: 'EventTypeAppCard-dba8d7b6',
  componentId: 'EventTypeAppCard-dba8d7b6',
});
// Add route for EventTypeAppCard-0fe8643a
addRoute({
  path: '/EventTypeAppCard-0fe8643a',
  label: 'EventTypeAppCard-0fe8643a',
  componentId: 'EventTypeAppCard-0fe8643a',
});
// Add route for SAMLConnection-8c443c66
addRoute({
  path: '/SAMLConnection-8c443c66',
  label: 'SAMLConnection-8c443c66',
  componentId: 'SAMLConnection-8c443c66',
});
// Add route for OrganizerRequestEmail-80d08d46
addRoute({
  path: '/OrganizerRequestEmail-80d08d46',
  label: 'OrganizerRequestEmail-80d08d46',
  componentId: 'OrganizerRequestEmail-80d08d46',
});
// Add route for WorkflowStepContainer-5bc0b72f
addRoute({
  path: '/WorkflowStepContainer-5bc0b72f',
  label: 'WorkflowStepContainer-5bc0b72f',
  componentId: 'WorkflowStepContainer-5bc0b72f',
});
// Add route for IntervalLimitsManager-99b7ab66
addRoute({
  path: '/IntervalLimitsManager-99b7ab66',
  label: 'IntervalLimitsManager-99b7ab66',
  componentId: 'IntervalLimitsManager-99b7ab66',
});
// Add route for AppsLayout-f6c895b2
addRoute({
  path: '/AppsLayout-f6c895b2',
  label: 'AppsLayout-f6c895b2',
  componentId: 'AppsLayout-f6c895b2',
});
// Add route for Team-49484d4c
addRoute({
  path: '/Team-49484d4c',
  label: 'Team-49484d4c',
  componentId: 'Team-49484d4c',
});
// Add route for Slider-a8c621b4
addRoute({
  path: '/Slider-a8c621b4',
  label: 'Slider-a8c621b4',
  componentId: 'Slider-a8c621b4',
});
// Add route for AttendeeLocationChangeEmail-2498db89
addRoute({
  path: '/AttendeeLocationChangeEmail-2498db89',
  label: 'AttendeeLocationChangeEmail-2498db89',
  componentId: 'AttendeeLocationChangeEmail-2498db89',
});
// Add route for RawHtml-732411e1
addRoute({
  path: '/RawHtml-732411e1',
  label: 'RawHtml-732411e1',
  componentId: 'RawHtml-732411e1',
});
// Add route for DestinationCalendarSelector-6a3cf067
addRoute({
  path: '/DestinationCalendarSelector-6a3cf067',
  label: 'DestinationCalendarSelector-6a3cf067',
  componentId: 'DestinationCalendarSelector-6a3cf067',
});
// Add route for BookFormAsModal-3b804aef
addRoute({
  path: '/BookFormAsModal-3b804aef',
  label: 'BookFormAsModal-3b804aef',
  componentId: 'BookFormAsModal-3b804aef',
});
// Add route for PlaygroundAutoLinkPlugin-bbfb5d6f
addRoute({
  path: '/PlaygroundAutoLinkPlugin-bbfb5d6f',
  label: 'PlaygroundAutoLinkPlugin-bbfb5d6f',
  componentId: 'PlaygroundAutoLinkPlugin-bbfb5d6f',
});
// Add route for AddGuestsDialog-94dd9ea9
addRoute({
  path: '/AddGuestsDialog-94dd9ea9',
  label: 'AddGuestsDialog-94dd9ea9',
  componentId: 'AddGuestsDialog-94dd9ea9',
});
// Add route for SkeletonLoader-304844e0
addRoute({
  path: '/SkeletonLoader-304844e0',
  label: 'SkeletonLoader-304844e0',
  componentId: 'SkeletonLoader-304844e0',
});
// Add route for AddVariablesDropdown-e1c95ec2
addRoute({
  path: '/AddVariablesDropdown-e1c95ec2',
  label: 'AddVariablesDropdown-e1c95ec2',
  componentId: 'AddVariablesDropdown-e1c95ec2',
});
// Add route for ServerPage-16d99d31
addRoute({
  path: '/ServerPage-16d99d31',
  label: 'ServerPage-16d99d31',
  componentId: 'ServerPage-16d99d31',
});
// Add route for OrgAddNewTeamMembers-e6b6ae9d
addRoute({
  path: '/OrgAddNewTeamMembers-e6b6ae9d',
  label: 'OrgAddNewTeamMembers-e6b6ae9d',
  componentId: 'OrgAddNewTeamMembers-e6b6ae9d',
});
// Add route for AddActionDialog-975c64f8
addRoute({
  path: '/AddActionDialog-975c64f8',
  label: 'AddActionDialog-975c64f8',
  componentId: 'AddActionDialog-975c64f8',
});
// Add route for LayoutWrapper-de6c3bf9
addRoute({
  path: '/LayoutWrapper-de6c3bf9',
  label: 'LayoutWrapper-de6c3bf9',
  componentId: 'LayoutWrapper-de6c3bf9',
});
// Add route for CancelBooking-75cc8659
addRoute({
  path: '/CancelBooking-75cc8659',
  label: 'CancelBooking-75cc8659',
  componentId: 'CancelBooking-75cc8659',
});
// Add route for InputLeading-f4982884
addRoute({
  path: '/InputLeading-f4982884',
  label: 'InputLeading-f4982884',
  componentId: 'InputLeading-f4982884',
});
// Add route for CalendarCredentialBanner-f8ebdf66
addRoute({
  path: '/CalendarCredentialBanner-f8ebdf66',
  label: 'CalendarCredentialBanner-f8ebdf66',
  componentId: 'CalendarCredentialBanner-f8ebdf66',
});
// Add route for TableRow-d8f2d822
addRoute({
  path: '/TableRow-d8f2d822',
  label: 'TableRow-d8f2d822',
  componentId: 'TableRow-d8f2d822',
});
// Add route for WithLayout-4fa0efb0
addRoute({
  path: '/WithLayout-4fa0efb0',
  label: 'WithLayout-4fa0efb0',
  componentId: 'WithLayout-4fa0efb0',
});
// Add route for ManagedUsersView-168cebc2
addRoute({
  path: '/ManagedUsersView-168cebc2',
  label: 'ManagedUsersView-168cebc2',
  componentId: 'ManagedUsersView-168cebc2',
});
// Add route for AttendeeRescheduledEmail-59bcfa76
addRoute({
  path: '/AttendeeRescheduledEmail-59bcfa76',
  label: 'AttendeeRescheduledEmail-59bcfa76',
  componentId: 'AttendeeRescheduledEmail-59bcfa76',
});
// Add route for OrgProfileView-7389616d
addRoute({
  path: '/OrgProfileView-7389616d',
  label: 'OrgProfileView-7389616d',
  componentId: 'OrgProfileView-7389616d',
});
// Add route for MobileNavigationItem-be636c36
addRoute({
  path: '/MobileNavigationItem-be636c36',
  label: 'MobileNavigationItem-be636c36',
  componentId: 'MobileNavigationItem-be636c36',
});
// Add route for SingleFormWrapper-64eaf91e
addRoute({
  path: '/SingleFormWrapper-64eaf91e',
  label: 'SingleFormWrapper-64eaf91e',
  componentId: 'SingleFormWrapper-64eaf91e',
});
// Add route for EnterpriseLicense-5bdbcfa5
addRoute({
  path: '/EnterpriseLicense-5bdbcfa5',
  label: 'EnterpriseLicense-5bdbcfa5',
  componentId: 'EnterpriseLicense-5bdbcfa5',
});
// Add route for SchedulerColumns-6b7c8577
addRoute({
  path: '/SchedulerColumns-6b7c8577',
  label: 'SchedulerColumns-6b7c8577',
  componentId: 'SchedulerColumns-6b7c8577',
});
// Add route for AvailabilityEditSheetForm-a8c66f9c
addRoute({
  path: '/AvailabilityEditSheetForm-a8c66f9c',
  label: 'AvailabilityEditSheetForm-a8c66f9c',
  componentId: 'AvailabilityEditSheetForm-a8c66f9c',
});
// Add route for CreateEventTypeDialog-a8fc9613
addRoute({
  path: '/CreateEventTypeDialog-a8fc9613',
  label: 'CreateEventTypeDialog-a8fc9613',
  componentId: 'CreateEventTypeDialog-a8fc9613',
});
// Add route for VideoMeetingInfo-a378c339
addRoute({
  path: '/VideoMeetingInfo-a378c339',
  label: 'VideoMeetingInfo-a378c339',
  componentId: 'VideoMeetingInfo-a378c339',
});
// Add route for VerifyEmailBanner-cb67450a
addRoute({
  path: '/VerifyEmailBanner-cb67450a',
  label: 'VerifyEmailBanner-cb67450a',
  componentId: 'VerifyEmailBanner-cb67450a',
});
// Add route for EventLimitsTabWebWrapper-b3408be0
addRoute({
  path: '/EventLimitsTabWebWrapper-b3408be0',
  label: 'EventLimitsTabWebWrapper-b3408be0',
  componentId: 'EventLimitsTabWebWrapper-b3408be0',
});
// Add route for IconSprites-50e9e1f5
addRoute({
  path: '/IconSprites-50e9e1f5',
  label: 'IconSprites-50e9e1f5',
  componentId: 'IconSprites-50e9e1f5',
});
// Add route for BookingListItem-27d766b6
addRoute({
  path: '/BookingListItem-27d766b6',
  label: 'BookingListItem-27d766b6',
  componentId: 'BookingListItem-27d766b6',
});
// Add route for DuplicateDialog-5b9ece8b
addRoute({
  path: '/DuplicateDialog-5b9ece8b',
  label: 'DuplicateDialog-5b9ece8b',
  componentId: 'DuplicateDialog-5b9ece8b',
});
// Add route for TeamInviteListItem-1514ff7e
addRoute({
  path: '/TeamInviteListItem-1514ff7e',
  label: 'TeamInviteListItem-1514ff7e',
  componentId: 'TeamInviteListItem-1514ff7e',
});
// Add route for Page-e9b13530
addRoute({
  path: '/Page-e9b13530',
  label: 'Page-e9b13530',
  componentId: 'Page-e9b13530',
});
// Add route for Page-8d66c8a0
addRoute({
  path: '/Page-8d66c8a0',
  label: 'Page-8d66c8a0',
  componentId: 'Page-8d66c8a0',
});
// Add route for Page-58d715b2
addRoute({
  path: '/Page-58d715b2',
  label: 'Page-58d715b2',
  componentId: 'Page-58d715b2',
});
// Add route for RoutingFormEmbedButton-25bcc31a
addRoute({
  path: '/RoutingFormEmbedButton-25bcc31a',
  label: 'RoutingFormEmbedButton-25bcc31a',
  componentId: 'RoutingFormEmbedButton-25bcc31a',
});
// Add route for Page-879e1123
addRoute({
  path: '/Page-879e1123',
  label: 'Page-879e1123',
  componentId: 'Page-879e1123',
});
// Add route for WebhookForm-f38e24c5
addRoute({
  path: '/WebhookForm-f38e24c5',
  label: 'WebhookForm-f38e24c5',
  componentId: 'WebhookForm-f38e24c5',
});
// Add route for ServerPage-f5df7871
addRoute({
  path: '/ServerPage-f5df7871',
  label: 'ServerPage-f5df7871',
  componentId: 'ServerPage-f5df7871',
});
// Add route for DateValues-54bc3c9d
addRoute({
  path: '/DateValues-54bc3c9d',
  label: 'DateValues-54bc3c9d',
  componentId: 'DateValues-54bc3c9d',
});
// Add route for Page-634d8a9c
addRoute({
  path: '/Page-634d8a9c',
  label: 'Page-634d8a9c',
  componentId: 'Page-634d8a9c',
});
// Add route for DialogOverlay-3556910a
addRoute({
  path: '/DialogOverlay-3556910a',
  label: 'DialogOverlay-3556910a',
  componentId: 'DialogOverlay-3556910a',
});
// Add route for InfiniteEventTypeList-b42c32d8
addRoute({
  path: '/InfiniteEventTypeList-b42c32d8',
  label: 'InfiniteEventTypeList-b42c32d8',
  componentId: 'InfiniteEventTypeList-b42c32d8',
});
// Add route for EventTypeAppCard-349ab428
addRoute({
  path: '/EventTypeAppCard-349ab428',
  label: 'EventTypeAppCard-349ab428',
  componentId: 'EventTypeAppCard-349ab428',
});
// Add route for PlatformBillingUpgrade-82d2ab94
addRoute({
  path: '/PlatformBillingUpgrade-82d2ab94',
  label: 'PlatformBillingUpgrade-82d2ab94',
  componentId: 'PlatformBillingUpgrade-82d2ab94',
});
// Add route for InstalledAppsLayout-c00e20c2
addRoute({
  path: '/InstalledAppsLayout-c00e20c2',
  label: 'InstalledAppsLayout-c00e20c2',
  componentId: 'InstalledAppsLayout-c00e20c2',
});
// Add route for LayoutWrapper-c1eec61a
addRoute({
  path: '/LayoutWrapper-c1eec61a',
  label: 'LayoutWrapper-c1eec61a',
  componentId: 'LayoutWrapper-c1eec61a',
});
// Add route for DisableTeamImpersonation-53b31826
addRoute({
  path: '/DisableTeamImpersonation-53b31826',
  label: 'DisableTeamImpersonation-53b31826',
  componentId: 'DisableTeamImpersonation-53b31826',
});
// Add route for EventTypeAppCard-57751b28
addRoute({
  path: '/EventTypeAppCard-57751b28',
  label: 'EventTypeAppCard-57751b28',
  componentId: 'EventTypeAppCard-57751b28',
});
// Add route for SheetDescription-fc56f4fa
addRoute({
  path: '/SheetDescription-fc56f4fa',
  label: 'SheetDescription-fc56f4fa',
  componentId: 'SheetDescription-fc56f4fa',
});
// Add route for MultiEmail-0a17c6ed
addRoute({
  path: '/MultiEmail-0a17c6ed',
  label: 'MultiEmail-0a17c6ed',
  componentId: 'MultiEmail-0a17c6ed',
});
// Add route for FlagAdminList-c01fdb7a
addRoute({
  path: '/FlagAdminList-c01fdb7a',
  label: 'FlagAdminList-c01fdb7a',
  componentId: 'FlagAdminList-c01fdb7a',
});
// Add route for ColorPicker-6c79793b
addRoute({
  path: '/ColorPicker-6c79793b',
  label: 'ColorPicker-6c79793b',
  componentId: 'ColorPicker-6c79793b',
});
// Add route for EmailCommonDivider-bd87461e
addRoute({
  path: '/EmailCommonDivider-bd87461e',
  label: 'EmailCommonDivider-bd87461e',
  componentId: 'EmailCommonDivider-bd87461e',
});
// Add route for TeamsFilter-5f2b1d9e
addRoute({
  path: '/TeamsFilter-5f2b1d9e',
  label: 'TeamsFilter-5f2b1d9e',
  componentId: 'TeamsFilter-5f2b1d9e',
});
// Add route for ConferencingAppsViewWebWrapper-acad4e72
addRoute({
  path: '/ConferencingAppsViewWebWrapper-acad4e72',
  label: 'ConferencingAppsViewWebWrapper-acad4e72',
  componentId: 'ConferencingAppsViewWebWrapper-acad4e72',
});
// Add route for JoinCall-a378c339
addRoute({
  path: '/JoinCall-a378c339',
  label: 'JoinCall-a378c339',
  componentId: 'JoinCall-a378c339',
});
// Add route for LayoutWrapper-192654e0
addRoute({
  path: '/LayoutWrapper-192654e0',
  label: 'LayoutWrapper-192654e0',
  componentId: 'LayoutWrapper-192654e0',
});
// Add route for PriorityDialog-1e42caa5
addRoute({
  path: '/PriorityDialog-1e42caa5',
  label: 'PriorityDialog-1e42caa5',
  componentId: 'PriorityDialog-1e42caa5',
});
// Add route for AdminLayoutAppDirClient-678d54df
addRoute({
  path: '/AdminLayoutAppDirClient-678d54df',
  label: 'AdminLayoutAppDirClient-678d54df',
  componentId: 'AdminLayoutAppDirClient-678d54df',
});
// Add route for AppNotInstalledMessage-fe931c28
addRoute({
  path: '/AppNotInstalledMessage-fe931c28',
  label: 'AppNotInstalledMessage-fe931c28',
  componentId: 'AppNotInstalledMessage-fe931c28',
});
// Add route for TrpcProvider-b8a429f3
addRoute({
  path: '/TrpcProvider-b8a429f3',
  label: 'TrpcProvider-b8a429f3',
  componentId: 'TrpcProvider-b8a429f3',
});
// Add route for EventAvailabilityTabWebWrapper-cb006584
addRoute({
  path: '/EventAvailabilityTabWebWrapper-cb006584',
  label: 'EventAvailabilityTabWebWrapper-cb006584',
  componentId: 'EventAvailabilityTabWebWrapper-cb006584',
});
// Add route for AssignmentWarningDialog-bcb7422e
addRoute({
  path: '/AssignmentWarningDialog-bcb7422e',
  label: 'AssignmentWarningDialog-bcb7422e',
  componentId: 'AssignmentWarningDialog-bcb7422e',
});
// Add route for VerifyEmailChange-636c4086
addRoute({
  path: '/VerifyEmailChange-636c4086',
  label: 'VerifyEmailChange-636c4086',
  componentId: 'VerifyEmailChange-636c4086',
});
// Add route for EventType-d389b771
addRoute({
  path: '/EventType-d389b771',
  label: 'EventType-d389b771',
  componentId: 'EventType-d389b771',
});
// Add route for AppPage-969b8369
addRoute({
  path: '/AppPage-969b8369',
  label: 'AppPage-969b8369',
  componentId: 'AppPage-969b8369',
});
// Add route for SelectField-51e1c4ea
addRoute({
  path: '/SelectField-51e1c4ea',
  label: 'SelectField-51e1c4ea',
  componentId: 'SelectField-51e1c4ea',
});
// Add route for DirectoryInfo-7bce9491
addRoute({
  path: '/DirectoryInfo-7bce9491',
  label: 'DirectoryInfo-7bce9491',
  componentId: 'DirectoryInfo-7bce9491',
});
// Add route for UpgradeTip-d758d3fa
addRoute({
  path: '/UpgradeTip-d758d3fa',
  label: 'UpgradeTip-d758d3fa',
  componentId: 'UpgradeTip-d758d3fa',
});
// Add route for UpgradeTipWrapper-29b4b07f
addRoute({
  path: '/UpgradeTipWrapper-29b4b07f',
  label: 'UpgradeTipWrapper-29b4b07f',
  componentId: 'UpgradeTipWrapper-29b4b07f',
});
// Add route for RescheduleDialog-1e907932
addRoute({
  path: '/RescheduleDialog-1e907932',
  label: 'RescheduleDialog-1e907932',
  componentId: 'RescheduleDialog-1e907932',
});
// Add route for AddToHomescreen-3a2e64fd
addRoute({
  path: '/AddToHomescreen-3a2e64fd',
  label: 'AddToHomescreen-3a2e64fd',
  componentId: 'AddToHomescreen-3a2e64fd',
});
// Add route for EnableTwoFactorModal-afccbbe5
addRoute({
  path: '/EnableTwoFactorModal-afccbbe5',
  label: 'EnableTwoFactorModal-afccbbe5',
  componentId: 'EnableTwoFactorModal-afccbbe5',
});
// Add route for Signup-5b3f34b6
addRoute({
  path: '/Signup-5b3f34b6',
  label: 'Signup-5b3f34b6',
  componentId: 'Signup-5b3f34b6',
});
// Add route for useShouldShowArrows-f4e44dbe
addRoute({
  path: '/useShouldShowArrows-f4e44dbe',
  label: 'useShouldShowArrows-f4e44dbe',
  componentId: 'useShouldShowArrows-f4e44dbe',
});
// Add route for ServerPage-037ca84d
addRoute({
  path: '/ServerPage-037ca84d',
  label: 'ServerPage-037ca84d',
  componentId: 'ServerPage-037ca84d',
});
// Add route for Page-a21ce6a5
addRoute({
  path: '/Page-a21ce6a5',
  label: 'Page-a21ce6a5',
  componentId: 'Page-a21ce6a5',
});
// Add route for AppProviders-c5de0756
addRoute({
  path: '/AppProviders-c5de0756',
  label: 'AppProviders-c5de0756',
  componentId: 'AppProviders-c5de0756',
});
// Add route for EventTypeAppCard-9e1b9be7
addRoute({
  path: '/EventTypeAppCard-9e1b9be7',
  label: 'EventTypeAppCard-9e1b9be7',
  componentId: 'EventTypeAppCard-9e1b9be7',
});
// Add route for EmailInput-f4982884
addRoute({
  path: '/EmailInput-f4982884',
  label: 'EmailInput-f4982884',
  componentId: 'EmailInput-f4982884',
});
// Add route for Page-29c8af41
addRoute({
  path: '/Page-29c8af41',
  label: 'Page-29c8af41',
  componentId: 'Page-29c8af41',
});
// Add route for EditMemberSheet-6b8358a7
addRoute({
  path: '/EditMemberSheet-6b8358a7',
  label: 'EditMemberSheet-6b8358a7',
  componentId: 'EditMemberSheet-6b8358a7',
});
// Add route for Label-5a0149c9
addRoute({
  path: '/Label-5a0149c9',
  label: 'Label-5a0149c9',
  componentId: 'Label-5a0149c9',
});
// Add route for InsightsOrgTeamsProvider-23ef9613
addRoute({
  path: '/InsightsOrgTeamsProvider-23ef9613',
  label: 'InsightsOrgTeamsProvider-23ef9613',
  componentId: 'InsightsOrgTeamsProvider-23ef9613',
});
// Add route for ButtonGroup-1f8aea50
addRoute({
  path: '/ButtonGroup-1f8aea50',
  label: 'ButtonGroup-1f8aea50',
  componentId: 'ButtonGroup-1f8aea50',
});
// Add route for EventScheduleItem-e4e837b1
addRoute({
  path: '/EventScheduleItem-e4e837b1',
  label: 'EventScheduleItem-e4e837b1',
  componentId: 'EventScheduleItem-e4e837b1',
});
// Add route for Logout-aefb9116
addRoute({
  path: '/Logout-aefb9116',
  label: 'Logout-aefb9116',
  componentId: 'Logout-aefb9116',
});
// Add route for DailyVideoDownloadRecordingEmail-88e7725b
addRoute({
  path: '/DailyVideoDownloadRecordingEmail-88e7725b',
  label: 'DailyVideoDownloadRecordingEmail-88e7725b',
  componentId: 'DailyVideoDownloadRecordingEmail-88e7725b',
});
// Add route for EmailBodyLogo-7cdfff68
addRoute({
  path: '/EmailBodyLogo-7cdfff68',
  label: 'EmailBodyLogo-7cdfff68',
  componentId: 'EmailBodyLogo-7cdfff68',
});
// Add route for ApiKeysView-cfb68dec
addRoute({
  path: '/ApiKeysView-cfb68dec',
  label: 'ApiKeysView-cfb68dec',
  componentId: 'ApiKeysView-cfb68dec',
});
// Add route for MembersView-31de6a2f
addRoute({
  path: '/MembersView-31de6a2f',
  label: 'MembersView-31de6a2f',
  componentId: 'MembersView-31de6a2f',
});
// Add route for SatSymbol-fa4b036e
addRoute({
  path: '/SatSymbol-fa4b036e',
  label: 'SatSymbol-fa4b036e',
  componentId: 'SatSymbol-fa4b036e',
});
// Add route for ServerPage-a8a95860
addRoute({
  path: '/ServerPage-a8a95860',
  label: 'ServerPage-a8a95860',
  componentId: 'ServerPage-a8a95860',
});
// Add route for getLayout-b0a4c8f0
addRoute({
  path: '/getLayout-b0a4c8f0',
  label: 'getLayout-b0a4c8f0',
  componentId: 'getLayout-b0a4c8f0',
});
// Add route for EventTypeAppSettingsInterface-e83c38b4
addRoute({
  path: '/EventTypeAppSettingsInterface-e83c38b4',
  label: 'EventTypeAppSettingsInterface-e83c38b4',
  componentId: 'EventTypeAppSettingsInterface-e83c38b4',
});
// Add route for PasswordViewWrapper-5b7ed519
addRoute({
  path: '/PasswordViewWrapper-5b7ed519',
  label: 'PasswordViewWrapper-5b7ed519',
  componentId: 'PasswordViewWrapper-5b7ed519',
});
// Add route for AttributeForm-dfc5a0ee
addRoute({
  path: '/AttributeForm-dfc5a0ee',
  label: 'AttributeForm-dfc5a0ee',
  componentId: 'AttributeForm-dfc5a0ee',
});
// Add route for UnstyledSelect-e25c4bfb
addRoute({
  path: '/UnstyledSelect-e25c4bfb',
  label: 'UnstyledSelect-e25c4bfb',
  componentId: 'UnstyledSelect-e25c4bfb',
});
// Add route for EventTypeAppCard-1a57e4ec
addRoute({
  path: '/EventTypeAppCard-1a57e4ec',
  label: 'EventTypeAppCard-1a57e4ec',
  componentId: 'EventTypeAppCard-1a57e4ec',
});
// Add route for OrgUpgradeBanner-aca54486
addRoute({
  path: '/OrgUpgradeBanner-aca54486',
  label: 'OrgUpgradeBanner-aca54486',
  componentId: 'OrgUpgradeBanner-aca54486',
});
// Add route for AppSetupPage-da3872cc
addRoute({
  path: '/AppSetupPage-da3872cc',
  label: 'AppSetupPage-da3872cc',
  componentId: 'AppSetupPage-da3872cc',
});
// Add route for EditLocationDialog-0f41e042
addRoute({
  path: '/EditLocationDialog-0f41e042',
  label: 'EditLocationDialog-0f41e042',
  componentId: 'EditLocationDialog-0f41e042',
});
// Add route for ServerPageWrapper-dfd76f7b
addRoute({
  path: '/ServerPageWrapper-dfd76f7b',
  label: 'ServerPageWrapper-dfd76f7b',
  componentId: 'ServerPageWrapper-dfd76f7b',
});
// Add route for SettingsToggle-7b4846ef
addRoute({
  path: '/SettingsToggle-7b4846ef',
  label: 'SettingsToggle-7b4846ef',
  componentId: 'SettingsToggle-7b4846ef',
});
// Add route for SamlIdpPage-5a6274b8
addRoute({
  path: '/SamlIdpPage-5a6274b8',
  label: 'SamlIdpPage-5a6274b8',
  componentId: 'SamlIdpPage-5a6274b8',
});
// Add route for InstalledAppsWrapper-909afb14
addRoute({
  path: '/InstalledAppsWrapper-909afb14',
  label: 'InstalledAppsWrapper-909afb14',
  componentId: 'InstalledAppsWrapper-909afb14',
});
// Add route for GroupTeamMappingTable-a56bd5db
addRoute({
  path: '/GroupTeamMappingTable-a56bd5db',
  label: 'GroupTeamMappingTable-a56bd5db',
  componentId: 'GroupTeamMappingTable-a56bd5db',
});
// Add route for EmailSchedulingBodyHeader-0b3ec944
addRoute({
  path: '/EmailSchedulingBodyHeader-0b3ec944',
  label: 'EmailSchedulingBodyHeader-0b3ec944',
  componentId: 'EmailSchedulingBodyHeader-0b3ec944',
});
// Add route for EventAppsTab-dbbdf659
addRoute({
  path: '/EventAppsTab-dbbdf659',
  label: 'EventAppsTab-dbbdf659',
  componentId: 'EventAppsTab-dbbdf659',
});
// Add route for EventCalendarSwitch-48ab30b6
addRoute({
  path: '/EventCalendarSwitch-48ab30b6',
  label: 'EventCalendarSwitch-48ab30b6',
  componentId: 'EventCalendarSwitch-48ab30b6',
});
// Add route for InternalNotePresetsView-41da556c
addRoute({
  path: '/InternalNotePresetsView-41da556c',
  label: 'InternalNotePresetsView-41da556c',
  componentId: 'InternalNotePresetsView-41da556c',
});
// Add route for ServerPage-fec613a8
addRoute({
  path: '/ServerPage-fec613a8',
  label: 'ServerPage-fec613a8',
  componentId: 'ServerPage-fec613a8',
});
