import discord from "@/public/discord.png"
import twitter from "@/public/twitter.png"
import entangle from "@/public/entangle.png"
const Footer = () => {
    return (
       <div>
            <div className="mt-[400px] flex items-center justify-center gap-20 mb-14">
                <div>
                    <p className="font-bold text-4xl w-[350px]">MEET CREATORS OF THE WEBVERSE</p>
                    <div className="flex gap-5">
                        <img src={discord.src} className="w-5" alt="" />
                        <img src={twitter.src} className="w-5" alt="" />
                    </div>
                </div>

                <div>
                    <div className="w-[350px] flex justify-center">
                        <img src={entangle.src} className="w-28" alt="" />
                    </div>
                    <div className="text-center w-[350px]">
                        <p className="font-bold text-4xl">Entangle</p>
                        <p className="">Customizable & Interoperable Data InfrastructureBuilt for Web3 and Institutions</p>
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