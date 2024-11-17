import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";


export const HeroSection = () => {
    return (
        <section className="py-24 md:py-52 overflow-x-clip">
            <div className="container">

                <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">Introducing Evolisyss</p>
                <h1 className="font-heading font-black text-5xl md:text-6xl max-w-3xl lg:text-7xl  mx-auto text-center mt-4">The Future of technological solutions!</h1>
                <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">Evolisyss is a pioneer in software and digital solutions</p>

                <div className="flex justify-center mt-10">
                    <CutCornerButton>Get Started</CutCornerButton>
                </div>

                <div className="flex justify-center mt-24">
                    <div className="inline-flex  relative z-0">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1100px] " />
                        </div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1850px] " />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] -top-[900px] ">
                                <img src="/assets/images/webmain.png" alt="web maintenance" className="size-[140px] "></img>
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] top-[270px] ">
                                <img src="/assets/images/seo.png" alt="seo optimization" className="size-[140px]" />
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute -left-[600px] -top-[80px] ">
                                <img src="/assets/images/dm.png" alt="Digital Marketing" className="size-[140px]" />
                            </Circle>
                        </div>

                        <img src="/assets/images/heroseo.png" alt="" className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]" />
                        <img src="/assets/images/heroseo.png" alt="Developer" className="width-[500px]" />
                    </div>
                </div>

                <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
                    <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
                        <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <p className="uppercase text-zinc-500 font-extrabold tracking-wider ">Scroll to learn more</p>
                </div>


            </div>
        </section>

    )
}