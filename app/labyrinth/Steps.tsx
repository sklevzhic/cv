import React from 'react'
import {CellStep} from "./CellStep";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface StepsProps {

}

export const Steps: React.FC<StepsProps> = () => {
    let { steps } = useSelector((state: RootState) => state.labyrinth)
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