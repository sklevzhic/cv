import React, {FC, useEffect} from "react";
import Breadcrumbs from "../../app/components/Breadcrumbs";
import TitlePage from "../../app/components/TitlePage";
import cn from "classnames";
import TechnologyItem from "../../app/components/TechnologyItem";
import {useDispatch, useSelector} from "react-redux";
import { getActiveProject } from "../../store/slices/portfolioSlice";
import {RootState} from "../../store";
import {useRouter} from "next/router";

const ProjectPage: FC = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { project } = router.query

    useEffect(() => {
        // @ts-ignore
        dispatch(getActiveProject( project ))
    }, [project])

    const activeProduct = useSelector((state: RootState) => state.portfolio.activeProject)

    return (
        <div>
            <Breadcrumbs/>
            <TitlePage text={activeProduct && activeProduct.name}/>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <p className="">{activeProduct && activeProduct.description}</p>
                        </div>
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h4 className="text-[22px] text-gray-900 font-semibold col-span-3 xl:col-span-1">Проект
                                включал: </h4>
                        </div>

                        {
                            activeProduct?.technologies && activeProduct.technologies.split(",").map(technology => {
                                return <TechnologyItem key={technology} icon={technology.trim()}/>
                            })
                        }

                        <div className="w-full mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className={"rounded-md shadow disabled"}>
                                <a href={activeProduct?.linkDemo} target={"_blank"} rel="noreferrer"
                                   className={cn("w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md " +
                                       "text-white bg-lime-600 hover:bg-lime-700 md:py-4 md:text-lg md:px-10", {"pointer-events-none cursor-not-allowed bg-lime-100 o text-black": !activeProduct?.linkDemo} )}>
                                    Демо </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href={activeProduct?.linkCode} target={"_blank"} rel="noreferrer"
                                   className={cn("w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md" +
                                       "text-black bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10",  {"pointer-events-none cursor-not-allowed bg-gray-100 o text-black": !activeProduct?.linkCode})}> Код </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full"
                             src={activeProduct && activeProduct.image?.src}
                             alt="stats"/>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="title-font font-medium text-xl mb-2 text-gray-900">Другие проекты с </h2>
                <div className={"shadow flex flex-wrap justify-between"}>

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
