import Image from "next/image"

const LanguageButton = ({ language, selected, setLanguage }) => {
    return <div className={`m-auto w-fit my-2 p-3 rounded-md cursor-pointer hover:bg-gray-700 ${language==selected ? 'bg-gray-700':''}`} onClick={ (e) => setLanguage(language) }>
        <Image src={`./assets/languages/${language}.svg`} width={30} height={30} alt={language}/>
    </div>
}

const Sidebar = ({ language, setLanguage, languages }) => {
    return (
        <div className="flex flex-col h-full justify-between l-0 bg-[--secondary-bg]">
            <div className="flex-1">
                { languages.map((lang, index) => <LanguageButton key={index} language={lang} selected={language} setLanguage={setLanguage}></LanguageButton>) }
            </div>
            <div>
                SkillSikshya
            </div>
        </div>
    )
}

export default Sidebar