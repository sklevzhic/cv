import React, { FC } from "react";
import {IType} from "../models/ITypeInput";
interface TextProps {
    edit: () => void,
    type?: IType,
    textButton: string
}

const Text: FC<TextProps> = ({edit, type, textButton}) => {
    if (type === IType.titleList) {
        return <div className={"cursor-pointer text-xl"} onClick={edit}>{textButton ? textButton : "[]" }</div>
    }
    return <div className={"cursor-pointer"} onClick={edit}>{textButton}</div>
}

export default Text