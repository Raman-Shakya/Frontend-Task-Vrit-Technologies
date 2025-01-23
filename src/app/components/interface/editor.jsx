import CodeMirror from "@uiw/react-codemirror";

const EditorComponent = ({ language, theme }) => {
    console.log(language);
    return (
        <section className='flex-1'>
            <div className="text-[--label-color]">Status <span>o</span></div>
            <CodeMirror 
                extensions={language} 
                height={"100vh"}
                theme={theme}
                className="border-8 border-[--background] rounded-lg"
            />
        </section>
    )
}

export default EditorComponent;