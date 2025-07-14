import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Converter from './components/Converter';
import Sobre from './components/Sobre';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-20 pb-10 space-y-16">
        <Dashboard />
        <Converter />
        <Sobre />
      </main>
    </div>
  );
}