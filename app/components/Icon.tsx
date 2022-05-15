import React, {FC} from "react";
import { IconType } from "react-icons";
import {Image} from "../models/IProject";

interface IconProps {
    color: string,
    icon:  IconType,
}


const Icon: FC<IconProps> = ({icon, color}) => {
    let IconElement = icon
    return <IconElement color={color} className={"mr-1"}/>
}

export default Icon