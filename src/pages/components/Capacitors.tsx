import React from 'react';
import { Zap } from 'lucide-react';

export function Capacitors() {
  const capacitors = [
    { name: 'Ceramic Capacitor', value: '1pF - 1µF' },
    { name: 'Electrolytic Capacitor', value: '0.1µF - 1000µF' },
    { name: 'Variable Capacitor', value: '10-100pF' },
    { name: 'Supercapacitor', value: '1F - 100F' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Zap className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Capacitors</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capacitors.map((capacitor) => (
          <div key={capacitor.name} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">{capacitor.name}</h2>
            <p className="text-gray-400 mb-4">Range: {capacitor.value}</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
              Add to Circuit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}