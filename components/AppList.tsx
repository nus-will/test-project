"use client";

import { useAppContext } from '@/context/AppContext';
import AppBlock from './AppBlock';

const AppList: React.FC = () => {
  const { myApps } = useAppContext();
  
  return (
    <div className="app-list grid grid-cols-2 gap-16">
      {myApps.length == 0 && (
        <div>No Apps Added Yet</div>
      )}
      {myApps.map((app) => (
        <AppBlock key={app.id} app={app} isAdded/>  
      ))}
    </div>
  );
};

export default AppList;