"use client";
import { useAppContext } from '../context/AppContext';

import AppBlock from './AppBlock';

const MostPopularAppList: React.FC = () => {
  const { addToMyApps, removeFromMyApps, popularApps } = useAppContext();
  
  return (
    <div className="app-list grid grid-cols-2 gap-16">
      {popularApps.map((app) => (
        <AppBlock key={app.id} app={app} isAdded={false}/>  
      ))}
    </div>
  );
};

export default MostPopularAppList;