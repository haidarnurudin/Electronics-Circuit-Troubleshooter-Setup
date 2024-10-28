import React from 'react';
import { CircleSlash2, Battery, Zap, Cpu, LineChart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const components = [
  { name: 'Resistors', icon: CircleSlash2, path: '/components/resistors' },
  { name: 'Power Sources', icon: Battery, path: '/components/power-sources' },
  { name: 'Capacitors', icon: Zap, path: '/components/capacitors' },
  { name: 'ICs', icon: Cpu, path: '/components/ics' },
];

const tools = [
  { name: 'Analysis', icon: LineChart, path: '/tools/analysis' },
  { name: 'Simulation', icon: Play, path: '/tools/simulation' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 p-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Components
          </h2>
          <div className="mt-3 space-y-1">
            {components.map((component) => (
              <Link
                key={component.name}
                to={component.path}
                className="flex items-center w-full px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg group"
              >
                <component.icon className="mr-3 h-5 w-5" />
                <span>{component.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Tools
          </h2>
          <div className="mt-3 space-y-1">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.path}
                className="flex items-center w-full px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg group"
              >
                <tool.icon className="mr-3 h-5 w-5" />
                <span>{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}