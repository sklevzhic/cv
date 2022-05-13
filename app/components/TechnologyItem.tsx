import React, {FC} from "react";
import {SiAntdesign, SiCss3, SiJavascript, SiMaterialui, SiReactrouter, SiRedux, SiTypescript, SiAccusoft} from "react-icons/si";
import {DiReact} from "react-icons/di";


interface TechnologyItemProps {
    icon: any,
    small?: boolean
}

let icons: any = {
    "js": {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#d9c227"
    },
    "react": {
        name: "React",
        icon: DiReact,
        color: "#1faab9"
    },
    "typescript": {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#007acc"
    },
    "material": {
        name: "Material UI",
        icon: SiMaterialui,
        color: "#0284ca"
    },
    "antd": {
        name: "Ant Design",
        icon: SiAntdesign,
        color: "#137ef2"
    },
    "css": {
        name: "CSS",
        icon: SiCss3,
        color: "#137ef2"
    },
    "redux": {
        name: "Redux",
        icon: SiRedux,
        color: "#7046b2"
    },
    "reactrouter": {
        name: "React Router",
        icon: SiReactrouter,
        color: "#d7650a"
    },
}


const TechnologyItem: FC<TechnologyItemProps> = ({icon, small = false}) => {
    let Icon = icons[icon]?.icon || SiAccusoft
    let name = icons[icon]?.name || icon
    let color = icons[icon]?.color
    return <div className={"flex items-center p-2 border bg-gray-50 m-2 cursor-pointer rounded"}>

        <Icon color={color} fontSize="2em"/>
        {!small && <p className={"ml-1.5"}>{name}</p>}
    </div>
}

export default TechnologyItem