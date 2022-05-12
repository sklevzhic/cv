import React, {FC} from "react";
import {HiOutlineSearch} from "react-icons/hi";
import {AiFillHtml5} from "react-icons/ai";
import {DiReact} from "react-icons/di";
import {SiRedux, SiTypescript} from "react-icons/si";

interface TechnologyItemProps {

}


``
const TechnologyItem: FC<TechnologyItemProps> = () => {
    return <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <AiFillHtml5/>
        <DiReact/>
        <SiTypescript/>
        <SiRedux/>
        <p className="leading-relaxed">HTML</p>
    </div>
}

export default TechnologyItem