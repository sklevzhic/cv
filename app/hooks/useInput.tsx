import {ChangeEvent, useState} from "react";

export const useInput = (initialValue: string, saveTitle: () => void) => {
    let [text, setText] = useState<string>(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) saveTitle()
        if (e.keyCode === 27) {console.log("handlerClose()")}
    }

    return {
        text, onChange, onKeyUp
    }

};