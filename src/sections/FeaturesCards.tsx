"use client"

import { twMerge } from "tailwind-merge";
import { TextButton } from "../components/TextButton";
import { useEffect, useState } from "react";


export const FeaturesCardsSection = () => {

    const cardData = [
        {
            image: '/assets/images/dm.png',
            title: 'Marketing Collateral',
            description: 'Unlock the vast potential of your business through our well tailored digital marketing services',
            color: 'fuchsia',
            link:'/marketing'

        },

        {
            image: '/assets/images/herodev.png',
            title: 'Software Development / Design',
            description: 'Get unique and priceless modern software, ranging from front-end, full-stack to mobile apps.',
            color: 'cyan',
            link:'/dev'
        },

        {
            image: '/assets/images/graphics.png',
            title: 'Logo / NFT Design',
            description: 'Get High value modernized, minimalistic or tech savvy customized designs, as suited for your persona, company or business.',
            color: 'lime',
            link:'/design'
        },

        {
            image: '/assets/images/seo.png',
            title: 'SEO Optimization',
            description: 'Scale your online presence through our high value search engine optimization team ready to grow your internet profile!',
            color: 'violet',
            link:'/seo'
        },

        {
            image: '/assets/images/animation.png',
            title: 'Video Animations',
            description: 'We Provide jaw-dropping customized animations tailored to our clients preferences be it 2D or 3D our team always has the answer.',
            color: 'red',
            link:'/video'
        }


    ];

    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(()=>{
        if(isHovered) return;
        const timeout = setTimeout(()=>{
            setSelectedCardIndex(curr => curr === cardData.length -1 ? 0 : curr + 1)
        },2000);
        return () => {
            clearTimeout(timeout);
        }

    },[selectedCardIndex, isHovered])

    return (
        <section className="py-24 overflow-x-clip md:-mt-28">
            <div className="container">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Discover expert technological solutions with Evolisyss.</h2>

                <div className="mt-36 lg:mt-48 flex">
                    <div className="flex flex-none gap-8">
                        {cardData.map(({ image, title, description, color,link }, cardIndex) => (
                            <div 
                            className="inline-flex transition-all duration-500"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={()=> setIsHovered(false)}
                            style={{
                                transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`
                            }}>
                            <div className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group" key={title}>
                                
                                <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300", color === "cyan" && "bg-cyan-500",color === "lime" && "bg-lime-500",color === "violet" && "bg-violet-500",color === "red" && "bg-red-500")}></div>
                                <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 group-hover:bg-fuchsia-400 transition duration-300", color === "cyan" && 'bg-cyan-500 group-hover:bg-cyan-300',color === "lime" && 'bg-lime-500 group-hover:bg-lime-300',color === "violet" && 'bg-violet-500 group-hover:bg-violet-300',color === "red" && 'bg-red-500 group-hover:bg-red-300')}></div>
                                
                                <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                                <div className="flex justify-center -mt-28">
                                    <div className="inline-flex relative">
                                        <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                                        <img className="size-40 group-hover:-translate-y-6 transition duration-300" src={image} alt="dev" />
                                    </div>
                                </div>
                                <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
                                <p className="text-lg text-zinc-400 mt-4">{description}</p>

                                <div className="flex justify-between mt-12">
                                  <a href={link}> <TextButton color={color}>Learn More</TextButton></a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map(({title}, cardIndex) => (
                            <div key={title} className={twMerge("size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                                cardIndex === selectedCardIndex && 'bg-zinc-300'
                            )}
                            onClick={() => setSelectedCardIndex(cardIndex)}></div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}