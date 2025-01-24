'use client'

import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import EditorComponent from "./editor"
import OutputComponent from "./output"
import { useCallback, useEffect, useState } from "react";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { materialDark, materialLight } from "@uiw/codemirror-theme-material";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";
import { php } from "@codemirror/lang-php";
import { StreamLanguage } from "@codemirror/language";
import useWebSocket from "react-use-websocket";
import { java } from "@codemirror/lang-java";



const Interface = ({ language, theme, controlFlow }) => {
    const [themeElement, setThemeElement] = useState();
    const [languageExtension, setLanguageExtension] = useState(python);

    const [codeText, setCodeText] = useState('');
    const [outputText, setOutputText] = useState('');

    const [socketUrl, setSocketUrl] = useState(process.env.NEXT_PUBLIC_WEBSOCKET_URL);

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    
    useEffect(() => {
        if (controlFlow === 'run') {
            sendCode();
        }
        else if (controlFlow === 'stop') {
            stopProcess();
        }
    }, [controlFlow]);

    useEffect(() => {
        if (lastMessage !==null) {
            const data = JSON.parse(lastMessage.data);
        
            if (data.type==='run') {
                setOutputText('');
            }
            else if (data.type==='stdout') {
                setOutputText((prev) => prev + data.data);
            }
            else if (data.type==='stderr') {
                setOutputText((prev) => prev + data.data);
            }
        }
    }, [lastMessage]);

    useEffect(() => {
        switch (theme) {
            case 'Github Light': setThemeElement(githubLight); break;
            case 'Github Dark': setThemeElement(githubDark); break;
            case 'VScode Light': setThemeElement(vscodeLight); break;
            case 'VScode Dark': setThemeElement(vscodeDark); break;
            case 'Material Light': setThemeElement(materialLight); break;
            case 'Material Dark': setThemeElement(materialDark); break;
        }
    }, [theme]);

    const sendCode = useCallback(() => {
        sendMessage(JSON.stringify({
            "command": "run",
            "code": codeText,
            "language": language,
            "input": ""
        }))
    }, [codeText]);

    const stopProcess = useCallback(() => {
        sendMessage(JSON.stringify({
            "command": "stop"
        }))
    }, []);

    useEffect(() => {
        switch (language) {
            case 'python': setLanguageExtension(python); break;
            case 'html': setLanguageExtension(html); break;
            case 'javascript': setLanguageExtension(javascript); break;
            case 'java': setLanguageExtension(java); break;
            case 'C++': setLanguageExtension(cpp); break;
            case 'rust': setLanguageExtension(rust); break;
            case 'php': setLanguageExtension(php); break;
        }
    }, [language]);

    return (
        <section className="flex ml-[calc(0.5em_+_var(--sidebar-width))] mr-[0.5em] mt-[calc(1.5em_+_var(--navbar-height))] gap-2 w-full bg-[--secondary-bg] px-2 pt-4 rounded-lg">
            <EditorComponent language={[languageExtension]} text={codeText} setText={setCodeText} theme={themeElement} />
            <div className="w-1 bg-[--label-color]"></div>
            <OutputComponent text={outputText} theme={themeElement} clearOutput={()=>setOutputText('')} /> 
        </section>
    )
};

export default Interface