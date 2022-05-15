import React, {FC} from "react";
import {HiOutlineCollection, HiOutlineHome, HiOutlinePhone, HiOutlineUser} from "react-icons/hi";
import MenuButton from "./ButtonMenu";

interface MenuProps {

}

//Works
// Resume
//Services
//Contacts
const Menu: FC<MenuProps> = ({}) => {
    return <div className={"flex justify-evenly justify-center items-center " +
        "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"}>
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