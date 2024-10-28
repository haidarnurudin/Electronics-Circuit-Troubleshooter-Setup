import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function Simulation() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Play className="h-6 w-6 text-emerald-500" />
          <h1 className="text-2xl font-bold">Circuit Simulation</h1>
        </div>
        
        <div className="flex space-x-2">
          <button className="bg-emerald-600 hover:bg-emerald-700 p-2 rounded-lg">
            <Play className="h-5 w-5" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg">
            <Pause className="h-5 w-5" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg">
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
          <p className="text-gray-400">Circuit Visualization Area</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Simulation Parameters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Time Step (ms)
              </label>
              <input
                type="number"
                className="w-full bg-gray-700 rounded-lg px-3 py-2"
                defaultValue="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Duration (s)
              </label>
              <input
                type="number"
                className="w-full bg-gray-700 rounded-lg px-3 py-2"
                defaultValue="10"
              />
            </div>
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}