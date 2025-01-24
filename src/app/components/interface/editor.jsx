'use client'

import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

const EditorComponent = ({ language, theme, text, setText }) => {

    return (
        <section className='flex-1'>
            <div className="text-[--label-color]">Status <span>o</span></div>
            <CodeMirror 
                // extensions={language} 
                value={text}
                onChange={(value, ViewUpdate) => setText(value)}
                height={"100vh"}
                theme={theme}
                className="border-8 border-[--background] rounded-lg"
            />
        </section>
    )
}

export default EditorComponent;