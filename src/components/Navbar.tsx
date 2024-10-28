import React from 'react';
import { Menu, CircuitBoard, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white p-1">
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <CircuitBoard className="text-emerald-500" size={28} />
              <span className="text-xl font-semibold">CircuitSolver</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/settings" className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700">
              <Settings size={20} />
            </Link>
            <Link to="/help" className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700">
              <HelpCircle size={20} />
            </Link>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}