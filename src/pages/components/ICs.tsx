import React from 'react';
import { Cpu } from 'lucide-react';

export function ICs() {
  const ics = [
    { name: 'Op-Amp', description: 'General Purpose Operational Amplifier' },
    { name: '555 Timer', description: 'Timing and Oscillation Applications' },
    { name: 'Logic Gates', description: 'Digital Logic Implementation' },
    { name: 'Voltage Regulator', description: 'Stable Voltage Output' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Cpu className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Integrated Circuits</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ics.map((ic) => (
          <div key={ic.name} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">{ic.name}</h2>
            <p className="text-gray-400 mb-4">{ic.description}</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
              Add to Circuit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}