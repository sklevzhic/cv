import Link from "next/link";
import React, {FC} from "react";
import TechnologyItem from "./TechnologyItem";
import {IProject} from "../models/IProject";


interface CardPortfolioProps {
    el: IProject
}

const CardPortfolio: FC<CardPortfolioProps> = ({el}) => {
    if (!el.visible) return <></>

    return <Link href={"portfolio/" + el.id}>
        <div
            className="min-w-[16em] max-w-[19em] bg-white rounded-lg border border-gray-200 mb-3 cursor-pointer">
            <figcaption className="h-44 overflow-hidden border-b">
                <img
                    src={(typeof el.image === "string") ? el.image : el.image.src}
                    alt={el.name}
                    className="w-full" loading="lazy"/>
            </figcaption>
            <div className="p-3 relative">
                <div
                    className={"absolute -top-2 bg-gray-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center rounded"}>
                    {
                        el.technologies.split(",").map(technology => {
                            return <TechnologyItem key={technology} icon={technology.trim()} small={true}/>
                        })
                    }
                </div>
                <h5 className="mb-2 text-xl text-center tracking-tight truncate">{el.name}</h5>
            </div>
        </div>
    </Link>
}

export default CardPortfolio