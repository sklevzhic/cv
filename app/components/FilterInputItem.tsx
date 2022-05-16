import React, {FC, useEffect} from "react";

import Select from 'react-select';
import {icons} from "../consts/icons";
import Icon from "./Icon";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {ITag} from "../models/ITag";
import { useRouter } from "next/router";
// import { setTechnologies } from "../../store/slices/portfolioSlice";

interface FilterInputItemProps {

}


const FilterInputItem: FC<FilterInputItemProps> = ({}) => {
    const router = useRouter();
    const dispatch = useDispatch()

    let { technologies } = useSelector((state: RootState) => state.portfolio)


    let tagsURL = router.query?.tags
    //
    // useEffect(() => {}, )
    // console.log(tagsURL)


    // let onChangeTechnologies = (tags: ITag[]) => {
    //     let values = tags.map((el) => el.value).join(",")
    //     router.push({ href: '/', query: { tags: values  } });
    // }

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
        // onChange={onChangeTechnologies}
        isMulti
        name="colors"
        options={arrForSelect}
        className="basic-multi-select sm:w-full md:w-full lg:w-2/6 "
        classNamePrefix="select"
    />
}

export default FilterInputItem