import medium from "@/public/medium.png"
import discord from "@/public/discord.png"
import twitter from "@/public/twitter.png"

const Navbar = () => {
    return (
        <div className="flex justify-center px-24">
            <div className="flex justify-between items-center bg-white/15 w-full px-10 py-5 rounded-lg">
                <div className="font-bold text-2xl">
                    WEBVERSE
                </div>
                <div className="flex gap-5">
                    <p>Mint</p>
                    <p>Portal</p>
                </div>
             
                <div className="flex gap-6 items-center">
                    <img src={medium.src} className="w-4 h-4" alt="medium" />
                    <img src={discord.src} className="w-4 h-4" alt="discord" />
                    <img src={twitter.src} className="w-4 h-4" alt="twitter" />
                    <button className="">Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar