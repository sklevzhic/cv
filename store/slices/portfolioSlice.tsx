import {AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ImageCrypto from "../../app/assets/projects/crypto.jpg";
import ImageCalendar from "../../app/assets/projects/calendar.jpg";
import ImageEnglish from "../../app/assets/projects/english.jpg";
import ImageHexal from "../../app/assets/projects/hexal.jpg";
import ImageKeyboard from "../../app/assets/projects/keyboard.jpg";
import ImageNeut from "../../app/assets/projects/neutronmail.jpg";
import ImageTable from "../../app/assets/projects/table.jpg";
import ImageTech from "../../app/assets/projects/tech.jpg";
import ImageTodoNext from "../../app/assets/projects/todo.jpg";
import ImageWeather from "../../app/assets/projects/weather.jpg";
import ImageDes1 from "../../app/assets/projects/figma1.jpg";
import ImageDes2 from "../../app/assets/projects/figma2.png";
import ImageTodo from "../../app/assets/projects/todo.png";
import ImageAnimation from "../../app/assets/projects/animation.png";
import ImageChat from "../../app/assets/projects/chat.jpg";
import {IProject} from "../../app/models/IProject";

export interface PortfolioState {
    items: IProject[],
    activeProject: IProject,
    technologies: string
}

const initialState: PortfolioState = {
    items: [
        {
            name: "Crypto App",
            image: ImageCrypto,
            description: "тестовое задание ()",
            id: 1,
            technologies: "react, redux, typescript, antd",
            linkDemo: "https://crypto-app-self-zeta.vercel.app/",
            linkCode: "https://github.com/sklevzhic/crypto-app"
        },

        {
            name: "TodoList",
            image: ImageTodo,
            description: "TodoList. Аналог Trello. Столбцы: добавление,удаление, перемещение. " +
                "Строки: добавление, удаление, перемещение, редактирование",
            id: 13,
            technologies: "react, typescript, redux, tailwind, ls, dnd",
            linkDemo: "/todo",
            linkCode: "https://github.com/sklevzhic/cv/blob/main/pages/todo.tsx"
        },
        {
            name: "Tech",
            image: ImageTech,
            description: "Приложение для учета техники",
            id: 8,
            technologies: "react, redux, material",
            linkDemo: "https://sklevzhic.github.io/tech",
            linkCode: "https://github.com/sklevzhic/tech/tree/master"
        },        {
            name: "Calendar",
            image: ImageCalendar,
            description: "-",
            id: 2,
            technologies: "react, redux, typescript",
            linkDemo: "",
            linkCode: "https://github.com/sklevzhic/calendar"
        },
        {
            name: "Chat",
            image: ImageChat,
            description: "Авторизация. Добавление чатов. Отправление сообщений. Чат создан с помощью react-firebase-hooks",
            id: 16,
            technologies: "react, firebase",
            linkDemo: "/chat",
            linkCode: "https://github.com/sklevzhic/cv/blob/main/pages/chat.tsx"
        },
        {
            name: "Weather App",
            image: ImageWeather,
            description: "тестовое задание (погода )",
            id: 10,
            technologies: "react, redux",
            linkDemo: "https://weather-app-rho-inky.vercel.app/",
            linkCode: "https://github.com/sklevzhic/weather-app"
        },
        {
            name: "English",
            image: ImageEnglish,
            description: "Тренажер английского языка",
            id: 3,
            technologies: "next, redux, antd, typescript ",
            linkDemo: "https://english-psi.vercel.app/tests/a0",
            linkCode: "https://github.com/sklevzhic/english"
        },

        {
            name: "Sort Table",
            image: ImageTable,
            description: "Сортировка таблицы по 3 условиям",
            id: 7,
            technologies: "react, redux",
            linkDemo: "https://table-i2f8a99ix-sklevzhic.vercel.app/",
            linkCode: "https://github.com/sklevzhic/table"
        },
        {
            name: "Hexal",
            image: ImageHexal,
            description: "Верстка макета страницы",
            id: 4,
            technologies: "html, css",
            linkDemo: "https://sklevzhic.github.io/hexal/",
            linkCode: "https://github.com/sklevzhic/hexal/tree/gh-pages"
        },
        {
            name: "Virtual Keyboard",
            image: ImageKeyboard,
            description: "Набор текста на виртуальной клавиатуре",
            id: 5,
            technologies: "html, css, js",
            linkDemo: "https://sklevzhic.github.io/virtual-keyboard/",
            linkCode: "https://github.com/sklevzhic/virtual-keyboard"
        },
        {
            name: "NeutronMail",
            image: ImageNeut,
            description: "Верстка макета страницы",
            id: 6,
            technologies: "html, css, pikselperfect",
            linkDemo: "https://sklevzhic.github.io/neutronmail/",
            linkCode: "https://github.com/sklevzhic/neutronmail/tree/gh-pages"
        },
        {
            name: "Todo List",
            image: ImageTodoNext,
            description: "Простой ToDo List",
            id: 9,
            technologies: "next, redux, typescript",
            linkDemo: "https://todots.vercel.app/",
            linkCode: "https://github.com/sklevzhic/todots"
        },
        {
            name: "Animation Piksel",
            image: ImageAnimation,
            description: "Учебный проект rss",
            id: 14,
            technologies: "html, css, js",
            linkDemo: "https://sklevzhic.github.io/animation-piksel/",
            linkCode: "https://github.com/sklevzhic/animation-piksel/tree/gh-pages"
        },

        {
            name: "Design 1",
            image: ImageDes1,
            description: "Создание дизайна, верстка страницы сайта",
            id: 11,
            technologies: "figma, html, css",
            linkDemo: "",
            linkCode: ""
        },
        {
            name: "Design 2",
            image: ImageDes2,
            description: "Создание дизайна, верстка страницы сайта",
            id: 12,
            technologies: "figma, html, css",
            linkDemo: "",
            linkCode: ""
        },

    ],
    activeProject: {} as IProject,
    technologies: ""
}

export const portfolioSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getActiveProject: (state, action: PayloadAction<string>) => {
            state.activeProject = state.items.filter(el => el.id.toString() === action.payload.toString())[0]
        },
        setTechnologies: (state, action: PayloadAction<string>) => {
            state.technologies = action.payload;
            state.items = state.items.map(el => {
                if ((el.technologies.includes(action.payload)) || action.payload === "all" ) return { ...el, visible: true }
                else return { ...el, visible: false }
            })
        },
    },
})

export const { getActiveProject, setTechnologies } = portfolioSlice.actions

export default portfolioSlice.reducer