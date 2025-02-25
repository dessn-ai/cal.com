import React, { createContext, useContext } from 'react';

const LocaleContext = createContext({
  t: (key: string) => {
    const translations = {
      'owner': 'Owner',
      'admin': 'Admin',
      'member': 'Member'
    };
    return translations[key.toLowerCase()] || key;
  }
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    t: (key: string) => {
      const translations = {
        'owner': 'Owner',
        'admin': 'Admin',
        'member': 'Member'
      };
      return translations[key.toLowerCase()] || key;
    }
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};