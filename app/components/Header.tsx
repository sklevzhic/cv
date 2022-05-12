import React, {FC} from "react";

import Menu from "./Menu";
import SearchInput from "./SearhInput";

const Header: FC = () => {
    return <header className="sticky top-0 z-50 col-span-6 shadow flex flex-row justify-center p-2 bg-white">
        <div className="basis-4/12 ">
            <SearchInput/>
        </div>
        <div className="basis-full ">
            <Menu/>
        </div>
        <div className="basis-1/12">
            <figcaption className="flex items-center justify-center space-x-4 text-left cursor-pointer">
                <img src="http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/sovet/klevzhits.jpg"
                     alt=""
                     className="w-14 h-14 rounded-full" loading="lazy"/>
            </figcaption>

        </div>
    </header>
}

export default Header