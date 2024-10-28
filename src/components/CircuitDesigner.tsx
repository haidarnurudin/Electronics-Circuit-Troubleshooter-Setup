import React, { useState } from 'react';
import { Upload, Grid } from 'lucide-react';
import { useCircuit } from '../context/CircuitContext';

export function CircuitDesigner() {
  const { state } = useCircuit();
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Circuit Designer</h1>
        <button
          onClick={() => setShowGrid(!showGrid)}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
        >
          <Grid size={16} />
          <span>{showGrid ? 'Hide Grid' : 'Show Grid'}</span>
        </button>
      </div>

      <div className={`h-[calc(100vh-12rem)] rounded-xl border-2 border-dashed border-gray-700 bg-gray-800/50 
        ${showGrid ? 'circuit-grid' : ''} relative overflow-hidden`}>
        {state.components.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-white">
                Start a New Circuit
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Drop components here or upload a schematic
              </p>
              <div className="mt-6 space-x-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium">
                  Upload Schematic
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium">
                  Start from Scratch
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            {/* Components will be rendered here */}
            {state.components.map((component) => (
              <div
                key={component.id}
                style={{
                  position: 'absolute',
                  left: component.position.x,
                  top: component.position.y,
                }}
                className="component-draggable"
              >
                {/* Component rendering logic */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}