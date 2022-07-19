import React from 'react'

interface CellStepProps {
    value: string
}

export const CellStep: React.FC<CellStepProps> = ({value}) => {
    return <div className={"border shrink-0 w-10 h-10"}>{value}</div>;
};