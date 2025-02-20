// Add window mocks before any imports
if (typeof window !== 'undefined') {
  window.getEmbedNamespace = window.getEmbedNamespace || function() { return null; };
  window.getEmbedTheme = window.getEmbedTheme || function() { return 'light'; };
  window.calNewLocale = window.calNewLocale || null;
  
  // Ensure these properties exist on window
  Object.defineProperties(window, {
    getEmbedNamespace: {
      value: function() { return null; },
      writable: true,
      configurable: true
    },
    getEmbedTheme: {
      value: function() { return 'light'; },
      writable: true,
      configurable: true
    },
    calNewLocale: {
      value: null,
      writable: true,
      configurable: true
    }
  });
}

import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../lib/app-providers-app-dir';
import { ReactElement, JSXElementConstructor } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      common: {}
    }
  },
  defaultNS: 'common',
  fallbackLng: 'en'
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    getLayout: {
      type: 'string',
      value: 'null',
      label: 'Get Layout Function',
    },
    requiresLicense: {
      type: 'boolean',
      value: false,
      label: 'Requires License',
    },
    nonce: {
      type: 'string',
      value: 'random-nonce-string',
      label: 'Nonce',
    },
    themeBasis: {
      type: 'string',
      value: 'light',
      label: 'Theme Basis',
    },
    isBookingPage: {
      type: 'boolean',
      value: false,
      label: 'Is Booking Page',
    },
  });

  const mockChildren = <div>Mock Children Content</div>;

  const mockProps = {
    ...state,
    getLayout: state.getLayout.value === 'null' ? null : (page: ReactElement<any, string | JSXElementConstructor<any>>) => <div>{page}</div>,
    requiresLicense: state.requiresLicense.value,
    nonce: state.nonce.value,
    themeBasis: state.themeBasis.value,
    isBookingPage: state.isBookingPage.value,
    i18n: {
      _nextI18Next: {
        initialI18nStore: {
          en: {
            common: {}
          }
        },
        initialLocale: 'en',
        ns: ['common'],
        userConfig: {
          i18n: {
            defaultLocale: 'en',
            locales: ['en'],
          },
          defaultNS: 'common',
          localePath: './public/locales'
        }
      }
    },
    dehydratedState: null
  };

  return (
    <I18nextProvider i18n={i18next}>
      <ImportedComponent {...mockProps}>
        {mockChildren}
      </ImportedComponent>
    </I18nextProvider>
  );
}