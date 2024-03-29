import orb from "@/public/orb.png"
import space from "@/public/space.png"
import blue from "@/public/blue.png"
import purple from "@/public/purple.png"


const WeaversSection = () => {
    return (
        <div className="bg-white h-[650px] w-full mt-[500px] md:mt-[470px] relative text-black ">
            <div className="flex items-center justify-center pt-10 px-10">
                <img src={orb.src} className="w-24" alt="" />
                <div className="ml-2">
                    <p className="font-bold text-4xl md:text-5xl">WEAVERS</p>
                    <p className="text-sm">Your guide to the webverse</p>
                </div>
            </div>
            <p className="text-center text-sm mt-8 px-10 lg:px-0 mb-10">Weavers are a piece of energy which allow travellers to gain a previously unknown vision into an alternate reality.</p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-1 px-10">
                <img src={space.src} className="w-96 md:w-[470px]" alt="" />
                <div className="ml-4 text-center md:text-left">
                    <p className="font-bold text-5xl">5000</p>
                    <p className="text-[10px] pb-[100px] md:pb-0">WEAVERS SCATTERED ACROSS THE UNIVERSE</p>
                </div>
            </div>

            <div className="flex justify-center gap-5 md:gap-12 text-white mt-32 absolute w-full bottom-[0] top-[480px] md:mt-14 px-10">
                <div>
                    <img src={purple.src} className="w-80 md:w-96" alt="" />
                    <p className="font-bold md:text-lg">4700 WEAVERS</p>
                </div>
                <div>
                    <img src={blue.src} className="w-80 md:w-96" alt="" />
                    <p className="font-bold md:text-lg">300 AGENTS</p>
                </div>
            </div>
            
            <div className="text-center text-white mt-[250px] md:mt-[420px] font-bold">
                <button className="border-[1px] border-white/50 px-2 py-1">Go to Mint Page</button>
            </div>
        </div>
    )
}


export default WeaversSection