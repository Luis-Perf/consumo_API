// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PAIRS = ['USD-BRL','EUR-BRL','GBP-BRL','JPY-BRL','AUD-BRL','CAD-BRL'];
const API_URL = `https://economia.awesomeapi.com.br/json/last/${PAIRS.join(',')}`;

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        console.log('↔️ AwesomeAPI response:', json);
        setData(json);
      } catch (err) {
        console.error('❌ Erro na API:', err);
        setData({});
      } finally {
        setLoading(false);
      }
    }
    fetchRates();
  }, []);

  return (
    <section
      id="cotacoes"
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        🌍 Cotações em Tempo Real (1 unidade → R$)
      </h2>

      {loading ? (
        <p className="text-center py-10">Carregando...</p>
      ) : (
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full table-auto text-center border-separate border-spacing-y-2"
        >
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-2 rounded-l-md">Moeda</th>
              <th className="p-2">Valor (R$)</th>
              <th className="p-2 rounded-r-md">Variação 24h</th>
            </tr>
          </thead>
          <tbody>
            {PAIRS.map((pair) => {
              const key = pair.replace('-', '');
              const info = data[key];
              const bid = info ? parseFloat(info.bid) : null;
              const pct = info ? parseFloat(info.pctChange) : null;

              return (
                <motion.tr
                  key={pair}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-2 align-middle">{pair.slice(0,3)}</td>
                  <td className="p-2 align-middle">
                    {bid != null ? `R$ ${bid.toFixed(4)}` : '-'}
                  </td>
                  <td
                    className={`p-2 align-middle ${
                      pct != null
                        ? pct >= 0
                          ? 'text-green-600'
                          : 'text-red-500'
                        : 'text-gray-400'
                    }`}
                  >
                    {pct != null ? `${pct.toFixed(2)}%` : '-'}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </motion.table>
      )}
    </section>
  );
}
