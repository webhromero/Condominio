import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Announcements from './components/Announcements';
import Financials from './components/Financials';
import Documents from './components/Documents';
import Reservations from './components/Reservations';
import Maintenance from './components/Maintenance';
import Directory from './components/Directory';
import Header from './components/Header';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Inicio');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderCurrentPage = useCallback(() => {
    switch (currentPage) {
      case 'Inicio':
        return <Dashboard />;
      case 'Anuncios':
        return <Announcements />;
      case 'Finanzas':
        return <Financials />;
      case 'Documentos':
        return <Documents />;
      case 'Reservas':
        return <Reservations />;
      case 'Mantenimiento':
        return <Maintenance />;
      case 'Directorio':
        return <Directory />;
      default:
        return <Dashboard />;
    }
  }, [currentPage]);
  
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    if(window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };


  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={handlePageChange} isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentPage={currentPage} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">
            {renderCurrentPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;