import React from 'react';
import { Page } from '../types';
import { DashboardIcon, AnnouncementsIcon, FinancialsIcon, DocumentsIcon, ReservationsIcon, MaintenanceIcon, DirectoryIcon, CloseIcon } from './Icons';

interface NavItemProps {
  icon: React.ReactNode;
  label: Page;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <a
    href="#"
    onClick={(e) => {
        e.preventDefault();
        onClick();
    }}
    className={`flex items-center px-4 py-3 my-1 transition-transform duration-200 transform ${
      isActive
        ? 'bg-teal-700 text-white rounded-lg shadow-lg'
        : 'text-gray-200 hover:bg-teal-700 hover:text-white rounded-lg'
    }`}
  >
    {icon}
    <span className="mx-4 font-medium">{label}</span>
  </a>
);

interface SidebarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, isOpen, setOpen }) => {
  const navItems: { label: Page; icon: React.ReactNode }[] = [
    { label: 'Inicio', icon: <DashboardIcon className="w-6 h-6" /> },
    { label: 'Anuncios', icon: <AnnouncementsIcon className="w-6 h-6" /> },
    { label: 'Finanzas', icon: <FinancialsIcon className="w-6 h-6" /> },
    { label: 'Documentos', icon: <DocumentsIcon className="w-6 h-6" /> },
    { label: 'Reservas', icon: <ReservationsIcon className="w-6 h-6" /> },
    { label: 'Mantenimiento', icon: <MaintenanceIcon className="w-6 h-6" /> },
    { label: 'Directorio', icon: <DirectoryIcon className="w-6 h-6" /> },
  ];

  return (
    <>
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setOpen(false)}></div>
        <div className={`bg-primary text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col justify-between`}>
            <div>
                <div className="flex items-center justify-between px-4">
                    <h2 className="text-2xl font-extrabold text-white">CondoAdmin</h2>
                    <button onClick={() => setOpen(false)} className="md:hidden text-white hover:text-gray-300">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <nav className="mt-10">
                    {navItems.map((item) => (
                    <NavItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        isActive={currentPage === item.label}
                        onClick={() => setCurrentPage(item.label)}
                    />
                    ))}
                </nav>
            </div>
            <div className="px-4 py-2">
                <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/100" alt="User avatar" />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">Jane Doe</p>
                        <p className="text-xs text-gray-300">Apto. 5B</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Sidebar;