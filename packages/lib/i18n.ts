// Browser-compatible i18n configuration
export const i18n = {
  locales: ['en', 'fr', 'de', 'es', 'pt', 'it', 'ja', 'ko', 'zh', 'ar', 'hi'],
  defaultLocale: 'en'
};

export const locales = i18n.locales;

export const localeOptions = i18n.locales.map((locale) => ({
  value: locale,
  label: new Intl.DisplayNames(locale, { type: "language" }).of(locale) || "",
}));

export const defaultLocaleOption = localeOptions.find(
  (locale) => locale.value === i18n.defaultLocale
);