export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-900">
      <h1 className="text-xl font-bold text-indigo-500">CurrencyFlow</h1>
      <div className="flex items-center gap-6">
        <a href="#dashboard" className="hover:text-indigo-400">Dashboard</a>
        <a href="#converter" className="hover:text-indigo-400">Conversor</a>
        <a href="#sobre" className="hover:text-indigo-400">Sobre</a>
      </div>
    </nav>
  );
}
