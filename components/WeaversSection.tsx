import orb from "@/public/orb.png"
import space from "@/public/space.png"
import blue from "@/public/blue.png"
import purple from "@/public/purple.png"


const WeaversSection = () => {
    return (
        <div className="bg-white h-[630px] w-full mt-[470px] text-black ">
            <div className="flex items-center justify-center pt-10">
                <img src={orb.src} className="w-24" alt="" />
                <div className="ml-2">
                    <p className="font-bold text-5xl">WEAVERS</p>
                    <p className="text-sm">Your guide to the webverse</p>
                </div>
            </div>
            <p className="text-center text-sm mt-8">Weavers are a piece of energy which allow travellers to gain a previously unknown vision into an alternate reality.</p>
            <div className="flex items-center justify-center mt-14">
                <img src={space.src} className="w-96" alt="" />
                <div className="ml-4">
                    <p className="font-bold text-5xl">5000</p>
                    <p className="text-[10px]">WEAVERS SCATTERED ACROSS THE UNIVERSE</p>
                </div>
            </div>

            <div className="flex justify-center gap-5 text-white mt-14">
                <div>
                    <img src={purple.src} className="w-80" alt="" />
                    <p className="font-bold text-xl">4700 WEAVERS</p>
                </div>
                <div>
                    <img src={blue.src} className="w-80" alt="" />
                    <p className="font-bold text-xl">300 AGENTS</p>
                </div>
            </div>
            
            <div className="text-center text-white mt-10 font-bold">
                <button className="border-[1px] border-white/50 px-2 py-1">Go to Mint Page</button>
            </div>
        </div>
    )
}


export default WeaversSection