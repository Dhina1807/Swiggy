import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (

     <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        
        height: "max",
        display: "flex",
    
      }}
    >
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

      
      
      <button onClick={toggleTheme} className="w-[40px] h-[20px] mr-[20px] mt-[50px] -ml-10 bg-gray-400 ">
      {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>



  );
}

