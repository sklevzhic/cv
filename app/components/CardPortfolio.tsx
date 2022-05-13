import Link from "next/link";
import React, {FC} from "react";
import TechnologyItem from "./TechnologyItem";

interface CardPortfolioProps {
    img: string
}

const CardPortfolio: FC<CardPortfolioProps> = ({img}) => {
    let arr = ["react", "redux", "material", "html","js", "typescript", "antd", "css", "reactrouter"]
    return <Link href={"portfolio/df"}>
        <div
            className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md mb-4">
            <figcaption className="">
                <img src={img}
                     alt=""
                     className="w-full h-60" loading="lazy"/>
            </figcaption>
            <div className="p-3">

                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Virtual Keyboard</h5>
                </a>
                {
                    arr.map(technology => {
                        return <TechnologyItem item={technology} small={true} />
                    })
                }

                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Dark</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Dark</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Dark</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Dark</span>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise
                    technology acquisitions of 2021 so far.</p>
            </div>
        </div>
    </Link>
}

export default CardPortfolio