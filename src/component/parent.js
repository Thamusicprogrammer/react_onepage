import { useState, useEffect } from "react";
import Header from "./Header";
import Countdown from "./Countdown";
import Location from "./Location";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Countdown isDarkMode={isDarkMode} />
      <Location isDarkMode={isDarkMode} />
    </div>
  );
}
