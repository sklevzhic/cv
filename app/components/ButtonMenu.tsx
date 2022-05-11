import React, {FC} from "react";

interface MenuButtonProps {
    icon: any,
    text: string
}
``
const MenuButton: FC<MenuButtonProps> = ({icon, text}) => {
    return <a className={"text-white inline-flex items-center bg-gradient-to-r from-teal-400 via-teal-500 " +
        "to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none " +
        "focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg " +
        "text-sm px-5 py-2.5 text-center mr-2 mb-2"}
              href="/">
        {icon} <span className={"ml-1.5"}>{text}</span> </a>
}

export default MenuButton