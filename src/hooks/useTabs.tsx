"use client";
import { createContext, useContext, useState } from 'react';
import { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { explorerFiles } from '@/components/Explorer';

type TabsType = {
  children: React.ReactNode[];
} & LinkProps;

type TabsContextProps = {
  tabs: TabsType[];
  addTab: (tab: TabsType) => void;
  removeTab: (tabIndex: number) => void;
  getActiveTabName: () => React.ReactNode;
};

const TabsContext = createContext({} as TabsContextProps);

export function TabsProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const [tabs, setTabs] = useState<TabsType[]>(() => {
    if (pathName) {
      const openTab = explorerFiles[pathName];
      if (openTab) {
        return [{ children: openTab, href: pathName }];
      }
    }

    return [];
  });

  const addTab = (tab: TabsType) => {
    if (tabs.map((t) => t.href).includes(tab.href)) {
      return;
    }

    setTabs([...tabs, tab]);
  };

  const removeTab = (tabIndex: number) => {
    const newTabs = tabs.filter((_, index) => index !== tabIndex);
    setTabs(newTabs);
  };

  const getActiveTabName = () => {
    return tabs.find((tab) => pathName === tab.href)?.children[1];
  };

  return (
    <TabsContext.Provider value={{ tabs, addTab, removeTab, getActiveTabName }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs(): TabsContextProps {
  return useContext(TabsContext);
}
