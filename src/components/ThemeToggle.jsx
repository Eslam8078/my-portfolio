import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";

    setTheme(saved);

    document.documentElement.classList.toggle(
      "dark",
      saved === "dark"
    );
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);

    localStorage.setItem("theme", next);

    document.documentElement.classList.toggle(
      "dark",
      next === "dark"
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:border-teal-500 dark:border-slate-700 dark:bg-slate-900 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-slate-800" size={20} />
      )}
    </button>
  );
}