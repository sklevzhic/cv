import Head from "next/head";
import React, {FC} from "react";
import Header from "../components/Header";
import { SiInstagram } from "react-icons/si"

interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

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
                        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">14.05.2022
                        </p>
                        <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">

                            {
                                [1,2,3,4,5].map(el => {
                                    return <a key={el} href="#" className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Facebook</span>
                                        <SiInstagram size={"1.5em"}/>
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
