import React, {FC, useEffect, useState} from "react";

import Select from 'react-select';
import {icons} from "../consts/icons";
import Icon from "./Icon";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface FilterInputItemProps {

}


const FilterInputItem: FC<FilterInputItemProps> = ({}) => {
    let technologies = useSelector((state: RootState) => state.portfolio.technologies)
    useEffect(() => {
        console.log(technologies)
    }, [technologies])
    let arrForSelect: any[] = Object.keys(icons).map(key => {
        return {
            "value": key,
            "label": icons[key].label,
            "icon": icons[key].icon,
            "color": icons[key].color,
        }
    })

    const formatOptionLabel = ({value, label, icon, color}: any) => (
        <div className={"flex flex-row items-center"}>
            <Icon color={color} icon={icon} />
            <div>
                {label}
            </div>
        </div>
    );



    return <Select
        defaultValue={technologies}
        placeholder={"Выбрать технологию"}
        formatOptionLabel={formatOptionLabel}
        isMulti
        name="colors"
        options={arrForSelect}
        className="basic-multi-select sm:w-full md:w-full lg:w-2/6 "
        classNamePrefix="select"
    />
}

export default FilterInputItem