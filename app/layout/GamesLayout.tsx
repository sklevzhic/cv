import React, {FC} from "react";


interface GamesProps {
    children: React.ReactNode,
    title?: string
}


const GamesLayout: FC<GamesProps> = ({children}) => {

    return (
        <div className={"md:contain md:mx-auto bg-white flex flex-col sticky top-0 z-50 min-h-screen"}>
            {children}
            {/*<Header/>*/}
            {/*<main className="p-10 grow">*/}
            {/*    */}
            {/*</main>*/}
            {/*<footer className="bg-green-50 shrink-0">*/}
            {/*    <section className="text-gray-700 bg-white body-font">*/}
            {/*        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">*/}
            {/*            <a href="#_"*/}
            {/*               className="text-xl font-black leading-none text-gray-900 select-none logo">Portfolio</a>*/}
            {/*            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"> date*/}
            {/*            </p>*/}
            {/*            <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">*/}
            {/*                {*/}
            {/*                    socialLinks.map((el: any) => {*/}
            {/*                        return <a key={el.name} href={el.link} target={"_blank"} className="text-gray-400 hover:text-gray-500">*/}
            {/*                            <span className="sr-only">{el.name}</span>*/}
            {/*                            <Icon icon={el.image} color={el.color} />*/}
            {/*                        </a>*/}
            {/*                    })*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</footer>*/}

        </div>
    )
}

export default GamesLayout
