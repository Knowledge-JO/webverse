"use client"

import medium from "@/public/medium.png"
import discord from "@/public/discord.png"
import twitter from "@/public/twitter.png"
import menu from "@/public/hamburger.png"
import {useState} from "react"
import {motion} from "framer-motion"
import { fadeInAnimation } from "@/utils/framerAnimation"
const Navbar = () => {
    const [mobileActive, setMobileActive] = useState(false)
    const handleMobileActive = () => {
        setMobileActive( (currState) => !currState)
    }
    return (
        <>
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
                    <img onClick={handleMobileActive} src={menu.src} className="w-10 block lg:hidden cursor-pointer" alt="menu"></img>
                </div>
            </div>
        </div>

        <motion.div {...fadeInAnimation} className={`${mobileActive ? "translate-y-0" : "translate-y-[-200%]"} duration-300 flex justify-center w-full mt-5 absolute`}>
            <ul className="text-white bg-white/15 w-[300px] text-center rounded-lg py-3">
                <li className="mb-3">Mint</li>
                <li className="mb-3">Portal</li>
                <li className="flex justify-center mb-3"> 
                    <div className="flex gap-5">
                        <img src={medium.src} className="w-4" alt="medium" />
                        <img src={discord.src} className="w-4" alt="discord" />
                        <img src={twitter.src} className="w-4" alt="twitter" />
                    </div>
                </li>
                <li><button className="">Connect Wallet</button></li>
            </ul>
        </motion.div>
        
        </>
    )
}

export default Navbar