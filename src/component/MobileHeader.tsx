"use client";

import Link from "next/link";
import Logo from "./Logo"

import { use, useState } from 'react'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full flex items-center justify-between px-4 bg-orange-400 z-50">
        <div className="flex justify-start">
            <Logo />
        </div>  
      <div className="flex justify-between items-center p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="z-50 cursor-pointer">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* メニュー本体 */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-orange-400 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="p-6 space-y-4">
          <li><a href="/">ホーム</a></li>
          <li><a href="/about">花火玉ってなに？</a></li>
          <li><a href="/menu">メニュー</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default MobileHeader;

