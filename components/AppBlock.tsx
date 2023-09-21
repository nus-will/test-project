"use client";

import { IApp, useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useState } from 'react';

interface AppBlockProps {
  app: IApp,
  isAdded: boolean
}

const AppBlock: React.FC<AppBlockProps> = ({ app, isAdded }) => {
  const { addToMyApps, removeFromMyApps, popularApps } = useAppContext();

  const handleAddRemoveClick = () => {
    if (isAdded) {
      removeFromMyApps(app.id)
    } else {
      addToMyApps(app)  
    }
  };

  return (
    <div className={`app-block flex items-center p-6 rounded-md bg-slate-100`}>
      <div className="app-icon mr-5">
        <Image alt="icon" src={app.icon} width="60" height="60" />
      </div>
      <div className="app-info flex-1">
        <h3 className="font-bold">{app.title}</h3>
        <p className="uppercase">{app.description}</p>
      </div>
      <div className="app-action cursor-pointer p-2" onClick={handleAddRemoveClick}>
        {!isAdded && (
          <i className="fa-solid fa-plus text-blue-500"></i>
        )}
        
        {isAdded && (
          <i className="fa-solid fa-trash text-red-400"></i>
        )}
      </div>
    </div>
  );
};

export default AppBlock;