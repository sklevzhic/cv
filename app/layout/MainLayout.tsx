import Head from "next/head";
import React, {FC} from "react";
import Header from "../components/Header";
import {SiLinkedin, SiVk, SiHackerearth, SiTelegram, SiHabr, SiGithub} from "react-icons/si"
import Icon from "../components/Icon";

interface LayoutProps {
    children: React.ReactNode,
    title?: string
}
let socialLinks: any = [
    { name: "Vk", image: SiVk, link: "https://vk.com/sklevzhits", color: "#1c4696" },
    { name: "Linkedin", image: SiLinkedin, link: "https://www.linkedin.com/in/alexander-klevzhits-8a4511184/", color: "#09255d" },
    { name: "Telegram", image: SiTelegram, link: "https://t.me/sklevzhic", color: "#2f87a4" },
    { name: "HeadHunter", image: SiHackerearth, link: "https://hh.ru/resume/83194df3ff021cf8150039ed1f5a4c76453537", color: "#1c4696" },
    { name: "GitHub", image: SiGithub, link: "https://github.com/sklevzhic", color: "#000000" }
]

const MainLayout: FC<LayoutProps> = ({children}) => {

    return (
        <div className={"md:container md:mx-auto bg-white sticky top-0 z-50"}>
            <Header/>
            <main className="p-10 min-h-screen">
                {children}
            </main>
            <footer className="bg-green-50 h-2">
                <section className="text-gray-700 bg-white body-font">
                    <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                        <a href="#_"
                           className="text-xl font-black leading-none text-gray-900 select-none logo">Portfolio</a>
                        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"> date
                        </p>
                        <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                            {
                                socialLinks.map((el: any) => {
                                    return <a key={el.name} href={el.link} target={"_blank"} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{el.name}</span>
                                        <Icon icon={el.image} color={el.color} />
                                    </a>
                                })
                            }
                        </div>
                    </div>
                </section>
            </footer>

        </div>
    )
}

export default MainLayout
