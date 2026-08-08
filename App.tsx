import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LifePhotosPage from './components/LifePhotosPage';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [page, setPage] = useState(window.location.hash === '#photos' ? 'photos' : 'home');

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash === '#photos' ? 'photos' : 'home');
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="md:hidden bg-[#5c63b6] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <span className="font-bold text-lg">Yuming Xie</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`
        fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <Sidebar />
      </div>

      {page === 'photos' ? <LifePhotosPage /> : <MainContent />}
    </div>
  );
}

export default App;
