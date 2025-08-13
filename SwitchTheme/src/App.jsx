import "./App.css";
import { ThemeProvider } from "./context/Theme";
import React, { useState,useEffect } from "react";
import ThemeBtn from './components/ThemeBtn';
import Card from "./components/Card";
function App() {
  const [mode,setMode]=useState("light");
  const lightmode=()=>{setMode("light")}
  const darkmode=()=>{setMode("dark")}
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(mode);
  },[mode]);
  return (
    <ThemeProvider value={{mode,lightmode,darkmode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/*here we will imoprt the theme button */
          <ThemeBtn/>}
        </div>

        <div className="w-full max-w-sm mx-auto">{/*Card*/
          <Card/>}</div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
