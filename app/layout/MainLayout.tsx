import Head from "next/head";
import React, {FC} from "react";
interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

const MainLayout: FC<LayoutProps> = ({children}) => {

    return (
        <div className={"container"}>
            <Head>
                <title>Yandex Taxi</title>
            </Head>

            {children}
        </div>
    )
}

export default MainLayout
