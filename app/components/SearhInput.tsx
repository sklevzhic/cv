import React, {FC} from "react";
import {HiOutlineSearch} from "react-icons/hi";

interface SearchInputProps {

}
``
const SearchInput: FC<SearchInputProps> = ({}) => {
    return             <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiOutlineSearch/>
        </div>
        <input type="text" id="email-address-icon"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
               placeholder="Введите текст ..."/>
    </div>
}

export default SearchInput