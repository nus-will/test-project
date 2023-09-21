import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

export interface IApp {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface AppContextType {
  popularApps: IApp[],
  myApps: IApp[];
  addToMyApps: (app: IApp) => void;
  removeFromMyApps: (id: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ( props: PropsWithChildren) => {
  const [myApps, setMyApps] = useState<IApp[]>([]);
  
  const [popularApps, setPopularApps] = useState<IApp[]>([
    {
      id: 1,
      title: 'Google Suite',
      description: 'A Collection of Google Services',
      icon: '/google.png'
    },
    {
      id: 2,
      title: 'Google Meet',
      description: 'Video calls',
      icon: '/google_meet.png'
    }
  ]);

  const addToMyApps = (app: IApp) => {
    if (myApps.find((a) => a.id == app.id) == undefined){
      setMyApps((prevApps) => [...prevApps, app]);  
    }
  };

  const removeFromMyApps = (id: number) => {
    setMyApps((prevApps) => prevApps.filter((app) => app.id !== id));
  };

  return (
    <AppContext.Provider value={{ popularApps, myApps, addToMyApps, removeFromMyApps }}>
      {props.children}
    </AppContext.Provider>
  );
};
