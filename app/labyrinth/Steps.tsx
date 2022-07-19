import React from 'react'
import {CellStep} from "./CellStep";

interface StepsProps {
    steps: any
}

export const Steps: React.FC<StepsProps> = ({steps}) => {

    return <div>
        Шаги
        <div className={"flex w-80"}>
            {
                steps.map((el: any, i: React.Key | null | undefined) => {
                    return <CellStep key={i} value={el}/>
                })
            }
        </div>
    </div>;
};