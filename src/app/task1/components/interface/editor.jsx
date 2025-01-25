'use client'

import CodeMirror from "@uiw/react-codemirror";

const EditorComponent = ({ language, theme, text, setText, readyState }) => {

    return (
        <section className='flex flex-1 flex-col justify-between'>
            <div className="text-[--label-color]">Status: <span className={`inline-block w-4 h-4 bg-[${readyState ? '--green' : '--red'}] rounded-full`}></span></div>
            <CodeMirror 
                extensions={language}
                value={text}
                onChange={(value, ViewUpdate) => setText(value)}
                height={"100vh"}
                theme={theme}
                className="border-8 border-[--dark-border-color] rounded-lg"
            />
        </section>
    )
}

export default EditorComponent;