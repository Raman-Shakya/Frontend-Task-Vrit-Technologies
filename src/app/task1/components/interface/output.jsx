'use client';

import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";

const OutputComponent = ({ language, text, theme, clearOutput, setOutputText, inputHandler }) => {
    const [inputText, setInputText] = useState();
    const [incomingText, setIncomingText] = useState(text);

    // initial text input
    useEffect(() => {
        setInputText(text);
        setIncomingText(text);
    }, [text])
    
    useEffect(() => {
        // remove characters correction
        // less characters than incoming
        if (inputText.length < incomingText.length)
            return setInputText(incomingText);
        // incorrect characters than incoming
        // console.log()
        if (inputText.substring(0, incomingText.length) != incomingText)
            return setInputText(incomingText);

    }, [inputText]);

    const changeHandler = (output) => {
        // detect input
        if (output[output.length-1] === '\n') {
            const inputValues = getInput();
            if (inputValues && inputValues.length) {
                setOutputText(output);
                inputHandler(inputValues);
            }
        }

        // update new text onInput
        setInputText(output);
    }

    // gets the input values by truncating the input from source
    const getInput = () => {
        return inputText.substring(incomingText.length, inputText.length);
    }

    return (
        <section className='flex-1'>
            <div className="flex justify-between">
                <span  className="text-[--label-color]">Output:</span>
                <button className="py-1 px-2 border text-sm border-[--blue-color] text-[--blue-selected-color] hover:border-[--blue-selected-color]" onClick={clearOutput}>CLEAR</button>
            </div>

            <CodeMirror 
                value={inputText}
                onChange={changeHandler}
                height={"100vh"} 
                theme={theme}
                extensions={language}
                className="border-8 border-[--dark-border-color] rounded-lg"
            />
        </section>
    )
}

export default OutputComponent;