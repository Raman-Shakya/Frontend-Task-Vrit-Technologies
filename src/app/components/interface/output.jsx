'use client';

import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";


const OutputComponent = ({ language, theme }) => {
    const [value, setValue] = useState('asdasdas');



    return (
        <section className='flex-1'>
            <div className="flex justify-between">
                <span  className="text-[--label-color]">Output</span>
                <button className="py-1 px-2 border border-[--blue-color] text-[--blue-color]" onClick={() => setValue('')}>CLEAR</button>
            </div>
            <CodeMirror 
                value={value}
                height={"100vh"} 
                theme={theme}
                extensions={language}
                onChange={(value, ViewUpdate) => setValue(value)}
                className="border-8 border-[--background] rounded-lg"
            />
        </section>
    )
}

export default OutputComponent;