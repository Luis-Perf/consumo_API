export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 transition"
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? "translate-x-6" : ""}`}
      ></div>
    </button>
  );
}
