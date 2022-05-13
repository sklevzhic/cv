
import React, {FC} from "react";
import Breadcrumbs from "../../app/components/Breadcrumbs";
import TitlePage from "../../app/components/TitlePage";
import CardPortfolio from "../../app/components/CardPortfolio";
import TechnologyItem from "../../app/components/TechnologyItem";
// <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Проект</h1>
const ProjectPage: FC = () => {
    let arr = ["react", "redux", "material", "html","js", "typescript", "antd", "css", "reactrouter"]
  return (
    <div>
        <Breadcrumbs />
        <TitlePage text={"Виртуальная клавиатура"}/>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <p className="">Набор текста на виртуальной клавиатуреНабор текста на виртуальной клавиатуреНабор текста на виртуальной клавиатуреНабор текста на виртуальной клавиатуреНабор текста на виртуальной клавиатуре</p>
                    </div>
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h4 className="text-[22px] text-gray-900 font-semibold col-span-3 xl:col-span-1">Проект включал: </h4>
                    </div>
                    {
                        arr.map(technology => {
                            return <TechnologyItem item={technology}  />
                        })
                    }

                    <div className="w-full mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#"
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md
                               text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Демо </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#"
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md
                               text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Код </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img className="object-cover object-center w-full h-full" src="https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg"
                         alt="stats" />
                </div>
            </div>
        </section>
        <section>
            <h2 className="title-font font-medium text-xl mb-2 text-gray-900">Другие проекты с "React"</h2>
            <div className={"shadow flex flex-wrap justify-between"}>
                <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/vkey.jpg"}/>
                <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/my-app.jpg"}/>
                <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/sort-table.png"}/>
                <CardPortfolio img={"https://sklevzhic.github.io/rsschool-cv/assets/img/sort-table.png"}/>
            </div>
            <button type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                View all
            </button>
        </section>
    </div>
  )
}

export default ProjectPage
