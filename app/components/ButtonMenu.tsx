import Link from "next/link";
import React, {FC} from "react";

interface MenuButtonProps {
    icon: any,
    text: string,
    link: string
}

const MenuButton: FC<MenuButtonProps> = ({icon, text, link}) => {
    return <Link href={link}>
        <a className={"flex items-center hover:bg-gray-100 p-2 mx-2 rounded"}
        >
            {icon} <span className={"ml-1.5"}>{text}</span> </a>
    </Link>
}

export default MenuButton