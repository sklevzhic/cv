import Head from "next/head";
import React, {FC} from "react";
import Header from "../components/Header";
interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

const MainLayout: FC<LayoutProps> = ({children}) => {

    return (
        <div className={"md:container md:mx-auto bg-white sticky top-0 z-50"}>
            <Header />
            <main className="p-2 min-h-screen">
                {children}
            </main>
            <footer className="bg-green-50 h-2">
                <p>footer</p>
                <p>footer</p>
                <p>footer</p>
                <p>footer</p>
                <p>footer</p>
                <p>footer</p>
            </footer>
        </div>
    )
}

export default MainLayout
