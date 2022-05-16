import React, {FC} from "react";
import {HiOutlineCollection, HiOutlineUser} from "react-icons/hi";
import MenuButton from "./ButtonMenu";

interface MenuProps {

}

const Menu: FC<MenuProps> = ({}) => {
    return <div className={"flex justify-evenly justify-center items-center " +
        "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"}>
        {
            [
                {icon: <HiOutlineUser/>, name: "Резюме", link: "/"},
                {icon: <HiOutlineCollection/>, name: "Портфолио", link: "/portfolio"},
            ].map((el, i) => {
                return <MenuButton key={i} icon={el.icon} text={el.name} link={el.link}/>
            })
        }
    </div>
}

export default Menu