import React from 'react';
import { useParentState } from '../useIframeState';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Mock i18n configuration
const locales = ['en', 'fr', 'de', 'es', 'pt', 'it', 'ru', 'nl'];
const defaultLocale = 'en';

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          common: {
            save: 'Save',
            continue: 'Continue',
            open: 'Open',
            close: 'Close',
            cancel: 'Cancel',
            change: 'Change',
            confirm: 'Confirm',
            save_changes: 'Save changes',
            timezone: 'Timezone',
            timeFormat: 'Time Format',
            language: 'Language',
            name: 'Name',
            email: 'Email',
            bio: 'Bio',
            username: 'Username',
            role: 'Role',
            identity_provider: 'Identity Provider',
            start_of_week: 'Start of Week',
            time_format: 'Time Format',
            '12_hour': '12-hour',
            '24_hour': '24-hour',
            user: 'User',
            admin: 'Admin',
          },
        },
      },
    },
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });

const Select = ({ value, options, onChange, className = '' }) => (
  <select
    value={value?.value || value}
    onChange={(e) => {
      const selectedOption = options.find((opt) => opt.value === e.target.value);
      onChange(selectedOption || { value: e.target.value, label: e.target.value });
    }}
    className={`block w-full rounded-md border border-gray-300 px-3 py-2 ${className}`}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const TextField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
      {...props}
    />
  </div>
);

const UserForm = ({
  defaultValues,
  onSubmit,
  submitLabel,
}) => {
  const form = useForm({
    defaultValues: {
      name: defaultValues?.name || '',
      email: defaultValues?.email || '',
      username: defaultValues?.username || '',
      bio: defaultValues?.bio || '',
      locale: defaultValues?.locale || 'en',
      timeFormat: defaultValues?.timeFormat || 12,
      timeZone: defaultValues?.timeZone || '',
      weekStart: defaultValues?.weekStart || 'Monday',
      role: defaultValues?.role || 'USER',
      identityProvider: defaultValues?.identityProvider || 'CAL',
    },
  });

  const timeFormatOptions = [
    { value: 12, label: '12-hour' },
    { value: 24, label: '24-hour' },
  ];

  const weekStartOptions = [
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
  ];

  const userRoleOptions = [
    { value: 'USER', label: 'User' },
    { value: 'ADMIN', label: 'Admin' },
  ];

  const identityProviderOptions = [
    { value: 'CAL', label: 'CAL' },
    { value: 'GOOGLE', label: 'GOOGLE' },
    { value: 'SAML', label: 'SAML' },
  ];

  const localeOptions = locales.map((locale) => ({
    value: locale,
    label: new Intl.DisplayNames(locale, { type: 'language' }).of(locale) || locale,
  }));

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <TextField label="Name" {...form.register('name')} />
      <TextField label="Email" type="email" {...form.register('email')} />
      <TextField label="Username" {...form.register('username')} />
      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          {...form.register('bio')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          rows={4}
        />
      </div>

      <Controller
        name="locale"
        control={form.control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <Select options={localeOptions} {...field} />
          </div>
        )}
      />

      <Controller
        name="timeFormat"
        control={form.control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700">Time Format</label>
            <Select options={timeFormatOptions} {...field} />
          </div>
        )}
      />

      <Controller
        name="weekStart"
        control={form.control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700">Week Starts On</label>
            <Select options={weekStartOptions} {...field} />
          </div>
        )}
      />

      <Controller
        name="role"
        control={form.control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <Select options={userRoleOptions} {...field} />
          </div>
        )}
      />

      <Controller
        name="identityProvider"
        control={form.control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700">Identity Provider</label>
            <Select options={identityProviderOptions} {...field} />
          </div>
        )}
      />

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        {submitLabel}
      </button>
    </form>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
    email: {
      type: "string",
      value: "john@example.com",
      label: "Email",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    bio: {
      type: "string",
      value: "A short bio about John Doe",
      label: "Bio",
    },
    avatarUrl: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Avatar URL",
    },
    locale: {
      type: "dropdown",
      value: "en",
      options: locales,
      label: "Locale",
    },
    timeFormat: {
      type: "dropdown",
      value: "12",
      options: ["12", "24"],
      label: "Time Format",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    weekStart: {
      type: "dropdown",
      value: "Sunday",
      options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      label: "Week Start",
    },
    role: {
      type: "dropdown",
      value: "USER",
      options: ["USER", "ADMIN"],
      label: "Role",
    },
    identityProvider: {
      type: "dropdown",
      value: "CAL",
      options: ["CAL", "GOOGLE", "SAML"],
      label: "Identity Provider",
    },
  });

  const handleSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <UserForm
        defaultValues={{
          name: state.name.value,
          email: state.email.value,
          username: state.username.value,
          bio: state.bio.value,
          locale: state.locale.value,
          timeFormat: parseInt(state.timeFormat.value),
          timeZone: state.timeZone.value,
          weekStart: state.weekStart.value,
          role: state.role.value,
          identityProvider: state.identityProvider.value,
        }}
        onSubmit={handleSubmit}
        submitLabel="Save"
      />
    </I18nextProvider>
  );
}