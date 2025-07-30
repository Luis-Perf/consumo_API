import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Converter from "./components/Converter";
import Sobre from "./components/Sobre";

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard de Cotações</h1>
        <Dashboard />
        <h2 className="text-2xl font-semibold mt-12 mb-6">Conversor Interativo</h2>
        <Converter />
        <h2 className="text-2xl font-semibold mt-12 mb-6">Sobre</h2>
        <Sobre />
      </main>
    </div>
  );
}
