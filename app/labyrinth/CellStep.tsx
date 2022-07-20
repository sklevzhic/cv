import React from 'react'
import {arrows} from "./getCurrentStep";
interface CellStepProps {
    value: string
}

export const CellStep: React.FC<CellStepProps> = ({value}) => {
    if (value) {
        // @ts-ignore
        let Icon = arrows[value].icon
        return <div className={"border shrink-0 w-12 h-12 text-4xl p-1"}>
            <Icon className={"text-gray-700"}/>
        </div>;
    }
    return <div className={"border shrink-0 w-12 h-12"}>       </div>;
};