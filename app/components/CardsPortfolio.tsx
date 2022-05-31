import React, {FC} from "react";
import {IProject} from "../models/IProject";
import CardPortfolio from "./CardPortfolio";

interface CardsPortfolioProps {
    projects: IProject[]
}

const CardsPortfolio: FC<CardsPortfolioProps> = ({projects}) => {

    return (
        <>
            {
                projects.some(el => el.visible === true)
                    ? projects.map((el: IProject) => {
                        return <CardPortfolio key={el.id} el={el}/>
                    })
                    : <>Ничего нет</>
            }
        </>
    )
}

export default CardsPortfolio