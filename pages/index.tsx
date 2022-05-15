import React, {FC} from "react";
import {icons} from "../app/consts/icons";
import Icon from "../app/components/Icon";
import {IProject} from "../app/models/IProject";
import CardPortfolio from "../app/components/CardPortfolio";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import Link from "next/link";
import SectionInformation from "../app/components/SectionInformation";
import {AiFillCrown} from "react-icons/ai"

let educations: any = [
    {
        date: "2011 г. - 2016 г.",
        name: "Белорусский государственный педагогический университет им. М.Танка",
        description: "Специальность: Физика. Информатика"
    }
]
let jobs: any = [
    {
        date: "2016 г. - 2022 г.",
        name: "Институт повышения квалификации и переподготовки БГПУ им. М.Танка",
        description: <>
            <p><b>Должность</b>: Системный администратор </p>
            <p><b>Обязанности</b>: Обслуживание техники. Поддержка сайтов. Создание и поддержка баз</p>
        </>
    }
]
let courses: any = [
    {
        date: "2020 г. - 2022 г.",
        name: "YouTube каналы",
        description: <>
            <p>Просмотрено очень много роликов. Необходимость просмотра была при решений той или иной задачи </p>
            <ul>
                <li className={"relative flex items-center"}><AiFillCrown className={"absolute -left-5"} color={"#129f00"}/>
                    <a href="https://www.youtube.com/c/UlbiTV" target={"_blank"}>Ulbi TV (React, Redux, Typescript, Тестирование)</a></li>
                <li className={"relative flex items-center"}><AiFillCrown className={"absolute -left-5"} color={"#129f00"}/>
                    <a href="https://www.youtube.com/c/%D0%90%D0%9D%D0%93%D0%9B%D0%98%D0%99%D0%A1%D0%9A%D0%98%D0%99%D0%AF%D0%97%D0%AB%D0%9A%D0%9F%D0%9E%D0%9F%D0%9B%D0%95%D0%99%D0%9B%D0%98%D0%A1%D0%A2%D0%90%D0%9C" target={"_blank"}>АНГЛИЙСКИЙ ЯЗЫК ПО ПЛЕЙЛИСТАМ</a> (A0,A1, <span className={"text-lime-7d00"}>(A2)</span>, ... )</li>
                <li className={"relative flex items-center"}><AiFillCrown className={"absolute -left-5"} color={"#129f00"}/>
                    <a href="https://www.youtube.com/c/ITKAMASUTRA" target={"_blank"}>IT-KAMASUTRA </a>  (React, Redux, NextJS, Typescript)</li>
                <li>и др. (Непомнящий, Дударь, Минин, Stashchuk, Archakov, RED Group, Собеседования ...) </li>
            </ul>
        </>
    },
    {
        date: "2019 г.",
        name: "RSS School",
        description: "Пройдено 2/3 этапов. HTML, JS"
    },
    {
        date: "2018 г.",
        name: "HTML Academy",
        description: "Верстка макетов по шаблону"
    }
]


const HomePage: FC = () => {
    let [one, wto, three] = useSelector((state: RootState) => state.portfolio.items)
    let projects = [one, wto, three]
    return <div className="grid grid-flow-row-dense grid-cols-6 ">

        <div className="col-span-6">
            <section className="text-gray-600 body-font py-5 ">
                <div className="container mx-auto flex px-5 mb-10 items-center justify-center flex-col">
                    <img className="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded-full" alt="hero"
                         src="http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/sovet/klevzhits.jpg"/>
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Александр
                            Клевжиц</h1>
                        <p className="mb-8 leading-relaxed">
                            Интересуюсь разработкой клиентских веб-приложений. Открыт к изучению новых современных
                            технологий.
                        </p>
                        <div className="flex justify-center">
                            <Link href={"/portfolio"}>
                                <button
                                    className="inline-flex text-white bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded text-lg">Портфолио
                                </button>
                            </Link>
                            <Link href={"/contacts"}>
                                <button
                                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Контакты
                                </button>
                            </Link>


                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font bg-gray-50 rounded-2xl">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Технологии</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Указаны технологии, которые
                            применял в своих проектах</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/5 w-full">

                            <div
                                className="sm:items-start sm:text-left text-center
                                items-center -mb-1 max-h-44 md:columns-3xl
                                ">

                                {
                                    Object.keys(icons).map(key => {
                                        return <div className={"flex items-center p-0.5"}>
                                            <Icon color={icons[key].color} icon={icons[key].icon}/>
                                            {icons[key].label}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container px-5 py-10 mx-auto text-center">
                    <div className="text-center mb-10">
                        <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Последние
                            проекты</h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">3 последних проекта</p>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        {
                            projects.map((el: IProject) => {
                                return <CardPortfolio key={el.id} el={el}/>
                            })
                        }

                    </div>
                    <Link href={"/portfolio"}>
                        <button
                            className="inline-flex text-white bg-lime-500 border-0 py-2 px-6
                        focus:outline-none hover:bg-lime-600 rounded text-lg">Все проекты
                        </button>
                    </Link>
                </div>
            </section>

            <SectionInformation arr={educations} title={"Образование"}/>
            <SectionInformation arr={jobs} title={"Опыт работы"}/>
            <SectionInformation arr={courses} title={"Курсы"} description={"Самостоятельное обучение. Нет подтверждения сертификатом"} />

            <section>
                <div className="container px-5 py-10 mx-auto text-center">
                    <div className="text-center mb-10">
                        <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Английский
                            язык</h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Английский на стадии
                            изучения</p>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        <div>Для чтения документации достаточно)</div>

                    </div>
                </div>
            </section>

        </div>

    </div>
}

export default HomePage
