"use client";

import Link from "next/link";
import Logo from "./Logo"

import { useState, useEffect, useRef } from 'react'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const buttonStyle = "bg-white text-orange-400 font-bold py-2 px-4 rounded-full mt-2 ml-2 cursor-pointer hover:bg-orange-100 hover:text-red-700 transition duration-300"

  //　メニュー外クリックで閉じる処理
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (menuRef.current && !menuRef.current.contains(target) && 
        buttonRef.current && !buttonRef.current.contains(target)) {
            setIsOpen(false);
        }
    };
    if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [isOpen]);

  return (
    <header className="w-full flex items-center justify-between px-4 bg-orange-400 z-50">
        <div className="flex justify-start">
            <Logo />
        </div> 

        {/* メニューボタン */}
        <div className="flex justify-between items-center p-4">
            <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)} className="z-50 cursor-pointer">
            <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
            </div>
            </button>
        </div>

      {/* メニュー本体 */}
      <nav ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-orange-400 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="p-6 space-y-4">
          <li><Link href="/">
            <button className={buttonStyle}>
                ホーム
            </button>
          </Link></li>
          <li><Link href="/about">
            <button className={buttonStyle}>
                花火玉ってなに？
            </button>
          </Link></li>
          <li><Link href="/menu">
            <button className={buttonStyle}>
                メニュー
            </button>
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MobileHeader;

