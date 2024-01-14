"use client"
import heroImage from "@/public/heroImage.svg"
import { Navbar } from "."
import Rectangel1 from "@/public/Rectangle1.png"
import rectangel2 from "@/public/Rectangle2.png"
import {motion} from "framer-motion"
import {fadeInAnimation} from "@/utils/framerAnimation"
const Hero = () => {
    return (
        <div className="bg-black bg-bottom bg-no-repeat bg-cover h-screen w-full">
            <div className="pt-10">
                <Navbar/>
            </div>
            <motion.div {...fadeInAnimation} className="flex h-screen md:h-[500px] w-full justify-center items-center">
                <p className="text-white font-bold text-4xl lg:text-9xl">WEBVERSE.</p>
            </motion.div>

            <div className="px-10 md:px-0 flex items-center justify-between relative mb-14  md:mt-[-50px]">
                <img src={Rectangel1.src} className="hidden md:block w-52 relative top-[100px]" alt="" />
                <div className="text-center w-[800px]">
                    <p className="text-4xl font-bold mb-2">THIS IS THE WEBVERSE!</p>
                    <p>The Webverse is a parallel dimension that embodies Entangle&apos;s Infrastructure. Central to the Webverse, is the Oracle, the ultimate source of truth and knowledge that orchestrates the intricate data highways. Are you brave enough to unlock the vision to fulfil your deepest desires?</p>
                    <button className="border-[1px] border-white/50 px-3 py-1 mt-4">Learn more</button>
                </div>
                
                <img src={rectangel2.src} className="hidden md:block w-52 relative top-[230px]" alt="" />
               
            </div>
        </div>
    )
}

export default Hero