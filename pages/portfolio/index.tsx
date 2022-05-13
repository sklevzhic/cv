import React, {FC} from "react";
import TitlePage from "../../app/components/TitlePage";
import Breadcrumbs from "../../app/components/Breadcrumbs";
import CardPortfolio from "../../app/components/CardPortfolio";
import FilterInputItem from "../../app/components/FilterInputItem";

let projects: any = [
    {
        name: "Виртуальная клавиатура",
        image: "https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg",
        description: "dfdsf",
        id: "1",
        technologies: "",
        linkDemo: "",
        linkCode: ""
    },
        {
        name: "Виртуальная клавиатура",
        image: "https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg",
        description: "dfdsf",
        id: "1",
        technologies: "",
        linkDemo: "",
        linkCode: ""
    },
        {
        name: "Виртуальная клавиатура",
        image: "https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg",
        description: "dfdsf",
        id: "1",
        technologies: "",
        linkDemo: "",
        linkCode: ""
    },
        {
        name: "Виртуальная клавиатура",
        image: "https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg",
        description: "dfdsf",
        id: "1",
        technologies: "",
        linkDemo: "",
        linkCode: ""
    },
        {
        name: "Виртуальная клавиатура",
        image: "https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg",
        description: "dfdsf",
        id: "1",
        technologies: "",
        linkDemo: "",
        linkCode: ""
    },
        {
        name: "Виртуальная клавиатура",
        image: "https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg",
        description: "dfdsf",
        id: "1",
        technologies: "",
        linkDemo: "",
        linkCode: ""
    },

]

const PortfolioPage: FC = () => {
  return (
    <div>
        <Breadcrumbs />
        <TitlePage text={"Портфолио"}/>
        <FilterInputItem />

        <div className={"shadow flex flex-wrap justify-between"}>
            {
                projects.map((el: any) => {
                    return <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/my-app.jpg"}/>
                })
            }
        </div>

        <button type="button"
                className="fixed bottom-0.5 right-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none">+
        </button>

    </div>
  )
}

export default PortfolioPage
