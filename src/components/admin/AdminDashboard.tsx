
import React from 'react';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const AdminPanel: React.FC = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 border-r border-slate-600 p-4 text-white">
        {/* Sidebar content goes here */}
        <h2 className='text-xl py-2 font-semibold border-b border-slate-600'>Admin Dashboard</h2>
        <ul className='mt-2 flex flex-col gap-2'>
          <li className='bg-gray-900 py-3 px-4 rounded-md'>
            Contact Requests
          </li>
          <li className='bg-gray-900 py-3 px-4 rounded-md'>
           Feedback List 
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-hidden">
        {/* Navbar */}
        <nav className="bg-gray-900 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaCog className="text-white mr-2" />
            <span className='text-white'>Admin Panel</span>
          </div>
          <div className="flex items-center text-white">
            <FaUser className="mr-2" />
            <span className="mr-4">Admin User</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded flex items-center"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </nav>

        {/* Main Content goes here */}
        <span className='text-white'>
          Admin content
        </span>
      </main>
    </div>
  );
};

export default AdminPanel;
