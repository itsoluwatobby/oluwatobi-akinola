import { useState } from 'react';
import { AppContext } from './context';

export const AppContextDataProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [appName] = useState('Oluwatobi Akinola');
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia
      && window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches ? 'dark' : 'light'
  );
  // const [tabName, setTabName] = useState<SideTabs>(SideTabEnum.Transaction);

  const value = {
    theme, setTheme, appName,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
