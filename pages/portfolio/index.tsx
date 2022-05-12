import React, {FC} from "react";
import TitlePage from "../../app/components/TitlePage";
import Breadcrumbs from "../../app/components/Breadcrumbs";
import CardPortfolio from "../../app/components/CardPortfolio";
import FilterInputItem from "../../app/components/FilterInputItem";

const PortfolioPage: FC = () => {
  return (
    <div>
        <Breadcrumbs />
        <TitlePage text={"Портфолио"}/>
        <FilterInputItem />
        <FilterInputItem />
        <FilterInputItem />
        <FilterInputItem />
        <FilterInputItem />
        <div className={"shadow flex flex-wrap justify-between"}>

            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/my-app.jpg"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/sort-table.png"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/Example4.png"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/Example3.png"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/english.jpg"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/Example6.png"}/>
            <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/Example5.png"}/>
        </div>

        <button type="button"
                className="fixed bottom-0.5 right-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none">+
        </button>

    </div>
  )
}

export default PortfolioPage
