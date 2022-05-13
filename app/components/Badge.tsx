import React from "react";
import { SiJavascript, SiHtml5, SiTypescript, SiMaterialui, SiAntdesign, SiCss3, SiRedux, SiReduxsaga, SiReactrouter } from "react-icons/si";
import {any} from "prop-types";
interface IBadge {
    icon: any,
    small?: boolean
}

let icons: any = {
    "js": SiJavascript
}

const Badge: React.FC<IBadge> = ({icon, small = false}) => {
    let Icon = icons[icon]
    return <div className={"flex items-center"}>

        <Icon color="#f0db4f " fontSize="2em"/>
        {!small && <p className={"ml-1.5"}>JavaScript</p>}
    </div>
}

export default Badge