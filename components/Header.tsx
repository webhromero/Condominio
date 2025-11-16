
import React from 'react';
import { Page } from '../types';
import { MenuIcon } from './Icons';

interface HeaderProps {
  currentPage: Page;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onMenuClick }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-surface border-b-2 border-gray-200">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="text-gray-500 focus:outline-none md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold text-on-surface ml-4 md:ml-0">{currentPage}</h1>
      </div>
      
      {/* Could add other header elements here, like search or notifications */}
      <div></div>
    </header>
  );
};

export default Header;
