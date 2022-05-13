import React, {FC} from "react";
import {HiOutlineCollection, HiOutlineHome, HiOutlinePhone, HiOutlineUser} from "react-icons/hi";
import MenuButton from "./ButtonMenu";

interface MenuProps {

}

``
const Menu: FC<MenuProps> = ({}) => {
    return <div className={"flex justify-evenly justify-center items-center"}>
        {
            [
                {icon: <HiOutlineHome/>, name: "Главная", link: "/"},
                {icon: <HiOutlineCollection/>, name: "Портфолио", link: "/portfolio"},
                {icon: <HiOutlinePhone/>, name: "Контакты", link: "/contacts"},
                {icon: <HiOutlineUser/>, name: "Обо мне", link: "/about"},
            ].map((el, i) => {
                return <MenuButton key={i} icon={el.icon} text={el.name} link={el.link}/>
            })
        }
    </div>
}

export default Menu