import discord from "@/public/discord.png"
import twitter from "@/public/twitter.png"
import entangle from "@/public/entangle.png"
const Footer = () => {
    return (
       <div className="">
            <div className="mt-[300px] md:mt-[400px] flex flex-col lg:flex-row items-center justify-center gap-20 mb-14 ">
                <div className="text-center lg:text-left">
                    <p className="font-bold px-10 md:px-0 md:text-4xl w-[350px] mb-3">MEET CREATORS OF THE WEBVERSE</p>
                    <div className="flex justify-center lg:justify-start gap-5 px-10 md:px-0">
                        <img src={discord.src} className="w-5" alt="" />
                        <img src={twitter.src} className="w-5" alt="" />
                    </div>
                </div>

                <div>
                    <div className="w-[350px] flex justify-center">
                        <img src={entangle.src} className="w-28 mb-3" alt="" />
                    </div>
                    <div className="text-center w-[350px]">
                        <p className="font-bold text-4xl mb-3">Entangle</p>
                        <p className="px-10 md:px-0">Customizable & Interoperable Data InfrastructureBuilt for Web3 and Institutions</p>
                    </div>
                </div>
            </div>

            <div className="text-center mb-10 text-sm">
                <p>All Rights Reserved, Designer_Developer 2024</p>
            </div>
       </div>

    )
}

export default Footer