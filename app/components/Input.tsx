import React, {FC} from "react";
import cn from "classnames";
import {CgClose} from "react-icons/cg";
import {IType} from "../models/ITypeInput";

interface InputProps {
    text: string,
    setText: () => void,
    type?: IType,
    close: () => void,
    btnAgree?: string,
    save: () => void
}

const Input: FC<InputProps> = ({text, setText, type, close, save, btnAgree = "Save"}) => {
    let visibleInput;

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode === 13) save()
        if (e.keyCode === 27) close()
    }

    if (type === IType.titleList) {
        return <input
            ref={visibleInput}
            autoFocus={true}
            value={text}
            onChange={setText}
            onKeyUp={handleKeyUp}
            className={cn("form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white " +
                "bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 " +
                "focus:bg-white focus:border-lime-600 focus:outline-none")}
        />
    }
    return <>
        <input
            ref={visibleInput}
            autoFocus={true}
            value={text}
            onChange={setText}
            onKeyUp={handleKeyUp}
            className={cn("form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white " +
                "bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 " +
                "focus:bg-white focus:border-lime-600 focus:outline-none")}
        />
        <div className={"flex flex-row items-center"}>
            <button onClick={save} disabled={!text}
                    className={cn("inline-flex text-white mt-1 bg-lime-500 border-0 py-1 px-4 focus:outline-none hover:bg-lime-600 rounded text-lg mr-1")}>{btnAgree}
            </button>
            <CgClose className={"cursor-pointer"} onClick={close} size={"1.5em"} color={"#424242"}/>
        </div>
    </>


}

export default Input