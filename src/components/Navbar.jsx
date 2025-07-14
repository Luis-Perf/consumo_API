import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#cotacoes', label: 'Cotações' },
  { href: '#converter', label: 'Converter' },
  { href: '#sobre', label: 'Sobre' }
];

export default function Navbar() {
  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">Conversor de Moedas</h1>
        <ul className="flex space-x-6 text-gray-600">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary transition">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}