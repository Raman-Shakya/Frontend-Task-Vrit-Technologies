import Image from "next/image"

const Navbar = ({ language, theme, setLanguage, setTheme, languages, themes }) => {

    return (
        <nav className="static flex justify-between px-3 w-full bg-[--secondary-bg]">
            <div className="flex items-center gap-3">
                <Image src='/assets/logo.png' width={56} height={56} className="w-auto" alt="logo"/>
                <h1 className="text-2xl font-bold">Code Runner</h1>
            </div>
            <div className="flex items-center">
                <div>
                    <select className="bg-black" value={language} onInput={(e) => setLanguage(e.target.value)}>
                        { languages.map((lang, index) => <option key={index} value={lang}>{lang}</option>) }
                    </select>
                    <select className="bg-black" value={theme} onInput={(e) => setTheme(e.target.value)}>
                        { themes.map((theme, index) => <option key={index} value={theme}>{theme}</option>) }
                    </select>
                </div>
                <div>
                    <button>Run</button>
                    <button>Stop</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;