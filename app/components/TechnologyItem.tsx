import React, {FC} from "react";
import {
    SiAccusoft,

} from "react-icons/si";
import { icons } from "../consts/icons";



interface TechnologyItemProps {
    icon: any,
    small?: boolean
}



const TechnologyItem: FC<TechnologyItemProps> = ({icon, small = false}) => {
    let Icon = icons[icon]?.icon || SiAccusoft
    let label = icons[icon]?.label
    let color = icons[icon]?.color
    if (small) {
        return <div className={"m-1.5"}>

            <div className="relative flex flex-col items-center group">
                <Icon color={color} fontSize="1.5em"/>
                <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                <span
                    className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{label}</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
            </div>
        </div>
    }
    return <div className={"flex items-center p-2 border bg-gray-50 m-2 cursor-pointer rounded"}>
        <Icon color={color} fontSize="2em"/>
        <p className={"ml-1.5"}>{label}</p>
    </div>
}

export default TechnologyItem