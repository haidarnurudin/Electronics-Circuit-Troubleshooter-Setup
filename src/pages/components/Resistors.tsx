import React from 'react';
import { CircleSlash2 } from 'lucide-react';

export function Resistors() {
  const resistorTypes = [
    { name: 'Fixed Resistor', value: '100Ω - 1MΩ' },
    { name: 'Variable Resistor', value: '0-10kΩ' },
    { name: 'Potentiometer', value: '1kΩ - 100kΩ' },
    { name: 'Thermistor', value: 'Temperature Dependent' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <CircleSlash2 className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Resistors</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resistorTypes.map((resistor) => (
          <div key={resistor.name} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">{resistor.name}</h2>
            <p className="text-gray-400 mb-4">Range: {resistor.value}</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
              Add to Circuit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}