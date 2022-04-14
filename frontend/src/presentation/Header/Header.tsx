import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const getClassName = useCallback(
    (pathname) => {
      // Hardcoding /store/:id route
      if (pathname === location.pathname) {
        return 'text-pink-500 px-3 py-2 text-sm font-medium';
      }

      return 'text-gray-300 hover:text-zinc-800 px-3 py-2 text-sm font-medium';
    },
    [location],
  );

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className={getClassName('/')} aria-current="page">
                  Dashboard
                </Link>

                <Link
                  to="/stores"
                  className={getClassName('/stores')}
                  aria-current="page"
                >
                  Stores
                </Link>

                <Link
                  to="/store-events"
                  className={getClassName('/store-events')}
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
