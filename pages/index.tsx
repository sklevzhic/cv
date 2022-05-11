import React, {FC} from "react";
import { HiOutlineSearch, HiOutlineCollection, HiOutlineUser, HiOutlineSparkles, HiOutlinePhone,HiOutlineHome } from 'react-icons/hi';
import Header from "../app/components/Header";

const HomePage: FC = () => {
    return <div className="grid grid-flow-row-dense grid-cols-6 ">
        <Header />
        <div className="col-span-2 h-6">sitebar</div>
        <div className="col-span-4">menu</div>
        <div className="col-span-6">reklama</div>
        <div className="col-span-3">info1</div>
        <div className="col-span-3">indo2</div>
    </div>
}

export default HomePage
