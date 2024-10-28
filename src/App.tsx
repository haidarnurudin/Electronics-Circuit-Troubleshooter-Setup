import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CircuitDesigner } from './components/CircuitDesigner';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { CircuitProvider } from './context/CircuitContext';

// Pages
import { Settings } from './pages/Settings';
import { Help } from './pages/Help';
import { Resistors } from './pages/components/Resistors';
import { PowerSources } from './pages/components/PowerSources';
import { Capacitors } from './pages/components/Capacitors';
import { ICs } from './pages/components/ICs';
import { Analysis } from './pages/tools/Analysis';
import { Simulation } from './pages/tools/Simulation';

function App() {
  return (
    <Router>
      <CircuitProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<CircuitDesigner />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
                <Route path="/components/resistors" element={<Resistors />} />
                <Route path="/components/power-sources" element={<PowerSources />} />
                <Route path="/components/capacitors" element={<Capacitors />} />
                <Route path="/components/ics" element={<ICs />} />
                <Route path="/tools/analysis" element={<Analysis />} />
                <Route path="/tools/simulation" element={<Simulation />} />
              </Routes>
            </main>
          </div>
        </div>
      </CircuitProvider>
    </Router>
  );
}

export default App;