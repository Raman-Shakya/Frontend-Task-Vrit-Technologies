'use client';

import Image from "next/image";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState('python');

  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="h-full w-full">
        <Sidebar language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}
