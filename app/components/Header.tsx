import React, {FC} from "react";

import Menu from "./Menu";
import SearchInput from "./SearhInput";
import {CgDarkMode} from 'react-icons/cg';
import Link from "next/link";

const Header: FC = () => {
    return <header className="sticky top-0 z-50 shadow flex flex-row justify-between items-center bg-white">
        <div className={"flex flex-row items-center hover:bg-gray-50 p-2 cursor-pointer"}>
            <figcaption className="flex items-center justify-center mr-3 space-x-4 text-left">
                <img src="http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/sovet/klevzhits.jpg"
                     alt=""
                     className="w-12 h-12 rounded-full" loading="lazy"/>
            </figcaption>
            <div className={"flex flex-col"}>
                <Link href="/" className="text-xl font-bold text-gray-700">Alexander Klevzhits</Link>
                <p className="text-xs text-gray-700">sklevzhic@gmail.com (copy)</p>

            </div>

        </div>
        <div className={""}>
            <Menu/>
            <div className="flex md:order-2">
                <button data-collapse-toggle="mobile-menu-4" type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              ></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path 
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              ></path>
                    </svg>
                </button>
            </div>
        </div>

    </header>
}

export default Header