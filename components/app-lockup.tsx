
import React from 'react';
import type { AppInfo } from '../types';

interface AppLockupProps extends AppInfo {
  theme: 'light' | 'dark';
}

const AppLockup: React.FC<AppLockupProps> = ({ iconUrl, name, subtitle, theme, bgColor }) => {
  const buttonThemeClasses = theme === 'dark' 
    ? 'bg-white/20 text-white hover:bg-white/30' 
    : 'bg-gray-200/80 text-blue-600 font-semibold hover:bg-gray-300/90';

  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <img src={iconUrl} alt={`${name} icon`} className="w-12 h-12 rounded-xl" style={{backgroundColor: bgColor}}/>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate text-sm">{name}</p>
        <p className="text-xs opacity-80 truncate">{subtitle}</p>
      </div>
      <div className="flex-shrink-0">
        <button className={`px-5 py-2 rounded-full text-sm transition ${buttonThemeClasses}`}>
          View
        </button>
      </div>
    </div>
  );
};

export default AppLockup;
