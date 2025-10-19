import Link from "next/link";
import Logo from "./Logo"

const buttonStyle = "bg-white text-orange-400 font-bold py-2 px-4 rounded-full mt-2 ml-2 cursor-pointer hover:bg-orange-100 hover:text-red-700 transition duration-300"

const SiteHeader = () => {
    return (
        <header className="w-full flex items-center justify-between px-4 bg-orange-400">
            <div className="flex justify-start">
                <Logo />
            </div>
            <div className="flex justify-end">
                <Link href="/">
                    <button className={buttonStyle}>
                        ホーム
                    </button>
                </Link>
                <Link href="/about">
                    <button className={buttonStyle}>
                        花火玉ってなに？
                    </button>
                </Link>
                <Link href="/menu">
                    <button className={buttonStyle}>
                        メニュー
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default SiteHeader;