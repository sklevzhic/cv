import React, {FC, useCallback, useEffect, useRef} from "react";
import cn from "classnames"
import {CgClose} from "react-icons/cg"
import {useClickOutside} from "../hooks/useClickOutside";


interface InputNewCardProps {
    text: string,
    btnText: string,
    handlerText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    handlerClose: () => void,
    handlerSave: () => void,
    handleClickOutside: () => void,
}

const InputText: FC<InputNewCardProps> = (props) => {
    useEffect(() => {
        // @ts-ignore
        outsideRef.current.scrollIntoView({block: "center", behavior: "smooth"})
    }, [])
    const { text,btnText, handlerText,handlerClose,handlerSave,handleClickOutside } = props
    const outsideRef = useRef(null)

    useClickOutside(outsideRef, handleClickOutside)

    const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            handlerSave()
        }
        if (e.keyCode === 27) handlerClose()
    }

    return <div ref={outsideRef}>
        <textarea autoFocus={true} value={text} onChange={handlerText} onKeyUp={handleKeyUp}
          className={cn("form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300" +
              "rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-lime-600 focus:outline-none")}></textarea>
        <div className={"flex flex-row items-center"}>
            <button onClick={handlerSave} disabled={!text}
                    className={cn("inline-flex text-white mt-1 bg-lime-500 border-0 py-1 px-4 focus:outline-none hover:bg-lime-600 rounded text-lg mr-1")}>{btnText}
            </button>
            <CgClose onClick={handlerClose} size={"1.5em"} color={"#424242"}/>
        </div>
    </div>
}

export default InputText