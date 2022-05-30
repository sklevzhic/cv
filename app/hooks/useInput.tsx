import {ChangeEvent, useState} from "react";

export const useInput = (initialValue: string, save: () => void) => {
    let [text, setText] = useState<string>(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) save()
    }

    return {
        text, onChange, onKeyUp
    }

};