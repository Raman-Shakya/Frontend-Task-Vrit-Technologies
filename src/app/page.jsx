'use client';

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import Interface from "./components/interface/interface";

export default function Home() {
  const [language, setLanguage] = useState('python');
  const [theme, setTheme] = useState('Github Light');

  const languages = ['python', 'html', 'javascript', 'java', 'c++', 'rust', 'php'];
  const themes = ["Github Light", "Github Dark", "VScode Light", "VScode Dark", "Material Light", "Material Dark"];
  
  return (
    <div>
      <Navbar language={language} theme={theme} setLanguage={setLanguage} setTheme={setTheme} languages={languages} themes={themes} />
      <div className="flex h-full w-full">
        <Sidebar language={language} setLanguage={setLanguage} languages={languages} />
        <Interface language={language} theme={theme} />
      </div>
    </div>
  );
}
