import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export function Settings() {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <SettingsIcon className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="grid gap-6 max-w-2xl">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button className="w-12 h-6 bg-emerald-600 rounded-full relative">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Show Grid</span>
              <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
            Manage Account
          </button>
        </div>
      </div>
    </div>
  );
}