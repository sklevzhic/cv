import React, {FC} from "react";
import TitlePage from "../../app/components/TitlePage";
import CardPortfolio from "../../app/components/CardPortfolio";
import FilterInputItem from "../../app/components/FilterInputItem";
import {IProject} from "../../app/models/IProject";
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
                {
                    projects.some(el => el.visible === true)
                        ? projects.map((el: IProject) => {
                            return <CardPortfolio key={el.id} el={el}/>
                        })
                        : <>Ничего нет</>
                }
            </div>

            <button type="button"
                    className="fixed bottom-0.5 right-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none">+
            </button>

        </div>
    )
}

export default PortfolioPage
