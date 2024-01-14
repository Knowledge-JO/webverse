"use client"

import medium from "@/public/medium.png"
import discord from "@/public/discord.png"
import twitter from "@/public/twitter.png"
import menu from "@/public/hamburger.png"
import {useState} from "react"

const Navbar = () => {
    const [mobileActive, setMobileActive] = useState(false)
    const handleMobileActive = () => {
        setMobileActive( (currState) => !currState)
    }
    return (
        <div className="flex justify-center px-10 md:px-24">
            <div className="flex justify-between items-center bg-white/15 w-full px-10 py-5 rounded-lg">
                <div className="font-bold text-xl md:text-2xl">
                    WEBVERSE
                </div>
                <div className="gap-5 hidden lg:flex">
                    <p>Mint</p>
                    <p>Portal</p>
                </div>
             
                <div className="flex gap-6 items-center">
                    <img src={medium.src} className="w-4 hidden lg:block" alt="medium" />
                    <img src={discord.src} className="w-4 hidden lg:block" alt="discord" />
                    <img src={twitter.src} className="w-4 hidden lg:block" alt="twitter" />
                    <button className="hidden lg:block">Connect Wallet</button>
                    <img onClick={handleMobileActive} src={menu.src} className="w-10 block lg:hidden" alt="menu"></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar