'use client'

import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import EditorComponent from "./editor"
import OutputComponent from "./output"
import { useEffect, useState } from "react";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { materialDark, materialLight } from "@uiw/codemirror-theme-material";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";
import { php } from "@codemirror/lang-php";
import { StreamLanguage } from "@codemirror/language";



const Interface = ({ language, theme }) => {
    const [themeElement, setThemeElement] = useState();
    const [languageExtension, setLanguageExtension] = useState(python);

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

    useEffect(() => {
        switch (language) {
            case 'python': setLanguageExtension(python); break;
            case 'html': setLanguageExtension(html); break;
            case 'javascript': setLanguageExtension(javascript); break;
            case 'java': setLanguageExtension(java); break;
            case 'c++': setLanguageExtension(cpp); break;
            case 'rust': setLanguageExtension(rust); break;
            case 'php': setLanguageExtension(php); break;
        }
    }, [language]);

    return (
        <section className="flex gap-2 w-full bg-[--secondary-bg] my-10 mx-2 px-2 pt-4 rounded-lg">
            <EditorComponent language={[StreamLanguage.define(languageExtension)]} theme={themeElement} />
            <div className="w-1 bg-[--label-color]"></div>
            <OutputComponent theme={themeElement} /> 
        </section>
    )
};

export default Interface