'use client';

import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";


const OutputComponent = ({ language, text, theme, clearOutput }) => {

    return (
        <section className='flex-1'>
            <div className="flex justify-between">
                <span  className="text-[--label-color]">Output</span>
                <button className="py-1 px-2 border border-[--blue-color] text-[--blue-color]" onClick={clearOutput}>CLEAR</button>
            </div>
            <CodeMirror 
                value={text}
                height={"100vh"} 
                theme={theme}
                extensions={language}
                className="border-8 border-[--dark-border-color] rounded-lg"
            />
        </section>
    )
}

export default OutputComponent;