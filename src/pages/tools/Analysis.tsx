import React from 'react';
import { LineChart, Waveform, Gauge } from 'lucide-react';

export function Analysis() {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <LineChart className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Circuit Analysis</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <Waveform className="h-8 w-8 text-emerald-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Frequency Response</h2>
          <p className="text-gray-400 mb-4">Analyze circuit behavior across frequencies</p>
          <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
            Start Analysis
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <Gauge className="h-8 w-8 text-emerald-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">DC Operating Point</h2>
          <p className="text-gray-400 mb-4">Calculate steady-state voltages and currents</p>
          <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
            Calculate
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <LineChart className="h-8 w-8 text-emerald-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Transient Analysis</h2>
          <p className="text-gray-400 mb-4">Simulate circuit behavior over time</p>
          <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
            Run Simulation
          </button>
        </div>
      </div>
    </div>
  );
}