import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect( () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  })

  const ToggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true)};
  };
  return (
    <div>
      <button onClick={ToggleTheme} className={cn('fixed max-sm:right-2 top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
        'focus: outline-hidden',
      )}>
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300"></Sun>
        ) : (
          <Moon className="h-6 w-6 text-blue-900"></Moon>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
