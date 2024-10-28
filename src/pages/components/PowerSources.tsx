import React from 'react';
import { Battery } from 'lucide-react';

export function PowerSources() {
  const sources = [
    { name: 'DC Voltage Source', value: '1.5V - 24V' },
    { name: 'AC Voltage Source', value: '120V/240V' },
    { name: 'Battery', value: '1.5V - 9V' },
    { name: 'Current Source', value: '0-1A' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Battery className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Power Sources</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source) => (
          <div key={source.name} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">{source.name}</h2>
            <p className="text-gray-400 mb-4">Range: {source.value}</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
              Add to Circuit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}