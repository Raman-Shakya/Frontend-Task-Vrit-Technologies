import Image from "next/image"

const Navbar = ({ language, theme, setLanguage, setTheme, languages, themes, setControlFlow }) => {

    return (
        <nav className="fixed z-50 flex h-[--navbar-height] justify-between px-3 w-full bg-[--secondary-bg]">
            <div className="flex items-center gap-3">
                <Image src='/assets/logo.png' width={50} height={50} className="w-[3.4em] h-auto object-contain" alt="logo"/>
                <h1 className="text-2xl font-bold">Code Runner</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex gap-4">
                    <select className="py-1 px-1 text-sm rounded-md w-24 border border-gray-600 bg-[--dark-border-color] focus:border-blue-400" value={language} onInput={(e) => setLanguage(e.target.value)}>
                        { languages.map((lang, index) => <option key={index} value={lang}>{lang}</option>) }
                    </select>
                    <select className="py-1 px-1 text-sm rounded-md w-24 border border-gray-600 bg-[--dark-border-color] focus:border-blue-400" value={theme} onInput={(e) => setTheme(e.target.value)}>
                        { themes.map((theme, index) => <option key={index} value={theme}>{theme}</option>) }
                    </select>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => setControlFlow('run')} className="flex justify-center items-center gap-2 w-24 bg-[--green] px-1 py-1 rounded-md"><Image src="/assets/icons/triangle.svg" alt="run" width={0} height={0} className="w-[0.7em] h-auto"/>Run</button>
                    <button onClick={() => setControlFlow('stop')}className="flex justify-center items-center gap-2 w-24 bg-[--red] px-1 py-1 rounded-md"><Image src="/assets/icons/square.svg" alt="stop" width={0} height={0} className="w-[0.7em] h-auto" />Stop</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;