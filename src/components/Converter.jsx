import { useEffect, useState } from "react";
import axios from "axios";

const CURRENCIES = ["BRL", "USD", "EUR", "GBP", "JPY", "AUD", "CAD"];

export default function Converter() {
  const [rates, setRates] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pairs = CURRENCIES.filter(c => c !== "BRL").map(c => `${c}-BRL`);
    axios.get(`https://economia.awesomeapi.com.br/json/last/${pairs.join(",")}`)
      .then(res => setRates(res.data))
      .catch(err => console.error(err));
  }, []);

  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currency
    }).format(value);
  };

  const handleConvert = () => {
    setLoading(true);
    setTimeout(() => {
      if (!rates) return;

      let valueInBRL;
      if (from === "BRL") {
        valueInBRL = amount;
      } else {
        const key = `${from}BRL`;
        valueInBRL = amount * parseFloat(rates[key]?.bid || 0);
      }

      let finalValue;
      if (to === "BRL") {
        finalValue = valueInBRL;
      } else {
        const key = `${to}BRL`;
        finalValue = valueInBRL / parseFloat(rates[key]?.bid || 1);
      }

      setResult(formatCurrency(finalValue, to));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 max-w-lg mx-auto">
      <div className="flex flex-col gap-4 mb-4 sm:flex-row">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 p-3 rounded bg-gray-700"
        />
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="flex-1 p-3 rounded bg-gray-700">
          {CURRENCIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="flex-1 p-3 rounded bg-gray-700">
          {CURRENCIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded shadow hover:opacity-90"
      >
        {loading ? "Convertendo..." : "Converter"}
      </button>
      {result && (
        <p className="mt-4 text-2xl font-bold text-center animate-pulse">{result}</p>
      )}
    </div>
  );
}
