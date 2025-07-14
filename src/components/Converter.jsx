import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Converter() {
  const [valor, setValor] = useState(1);
  const [de, setDe] = useState("USD");
  const [para, setPara] = useState("BRL");
  const [resultado, setResultado] = useState(null);

  // Lista de todas as moedas disponíveis, incluindo BRL
  const moedas = ["BRL", "USD", "EUR", "GBP", "JPY", "AUD", "CAD"];

  // Taxas fictícias apenas para demonstração
  const taxasFicticias = {
    BRL: { BRL: 1, USD: 1 / 5.35, EUR: 1 / 5.80 },
    USD: { USD: 1, BRL: 5.35, EUR: 5.35 * 0.92 },
    EUR: { EUR: 1, BRL: 5.80, USD: 5.80 * 1.09 },
    // Adicione outras relações se quiser...
  };

  const handleConverter = () => {
    const taxa = taxasFicticias[de]?.[para];
    if (taxa != null) {
      setResultado((valor * taxa).toFixed(4));
    } else {
      setResultado("N/A");
    }
  };

  return (
    <motion.section
      id="converter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">🔁 Conversor de Moedas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block mb-1">Valor</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">De</label>
          <select
            value={de}
            onChange={(e) => setDe(e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            {moedas.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Para</label>
          <select
            value={para}
            onChange={(e) => setPara(e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            {moedas.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <motion.button
          onClick={handleConverter}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white rounded px-4 py-2 font-semibold"
        >
          Converter
        </motion.button>
      </div>
      {resultado && (
        <p className="mt-4 text-lg">
          Resultado: {valor} {de} = {resultado} {para}
        </p>
      )}
    </motion.section>
  );
}