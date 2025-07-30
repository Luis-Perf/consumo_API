import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const PAIRS = ["USD-BRL", "EUR-BRL", "GBP-BRL", "JPY-BRL", "AUD-BRL", "CAD-BRL"];

export default function Dashboard() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    axios.get(`https://economia.awesomeapi.com.br/json/last/${PAIRS.join(",")}`)
      .then(res => setQuotes(res.data))
      .catch(err => console.error(err));
  }, []);

  const generateChartData = () => {
    return Array.from({ length: 6 }, () => ({ value: Math.random() * 10 + 5 }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(quotes).map((q, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">{q.code}</span>
            <span className="text-2xl font-semibold">R$ {parseFloat(q.bid).toFixed(2)}</span>
          </div>
          <p className={parseFloat(q.pctChange) >= 0 ? "text-green-400" : "text-red-400"}>
            {parseFloat(q.pctChange) >= 0 ? "+" : ""}{parseFloat(q.pctChange).toFixed(2)}%
          </p>
          <div className="h-12 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={generateChartData()}>
                <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
