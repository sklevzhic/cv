import React, {FC} from "react";
import TitlePage from "../../app/components/TitlePage";
import CardsPortfolio from "../../app/components/CardsPortfolio";
import FilterInputItem from "../../app/components/FilterInputItem";

import {useSelector} from "react-redux";
import {RootState} from "../../store";

const PortfolioPage: FC = () => {
    let projects = useSelector((state: RootState) => state.portfolio.items)

    return (
        <div className={"relative"}>
            <TitlePage text={"Портфолио"}/>
            <div className={"my-3 flex flex-row items-center justify-end w-full"}>
                <FilterInputItem/>
            </div>
            <div className={"shadow flex flex-wrap justify-evenly"}>
                <CardsPortfolio projects={projects}/>
            </div>
        </div>
    )
}

export default PortfolioPage
