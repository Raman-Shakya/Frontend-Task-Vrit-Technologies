import Image from "next/image"

const Navbar = ({ language, setLanguage }) => {
    const languages = ['python', 'html', 'javascript', 'java', 'c++', 'rust', 'php'];

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
                        {/* <option value={"python"} selected={language=="python"}>python</option>
                        <option value={"html"} selected={language==}>html</option>
                        <option value={"javascript"} selected={language==}>javascript</option>
                        <option value={"java"} selected={language==}>java</option>
                        <option value={"c++"}> selected={language==}c++</option>
                        <option value={"rust"} selected={language==}>rust</option>
                        <option value={"php"} selected={language==}>php</option> */}
                    </select>
                    <select>
                        <option value={'Github Light'}>Github Light</option>
                        <option value={'Github Dark'}>Github Dark</option>
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