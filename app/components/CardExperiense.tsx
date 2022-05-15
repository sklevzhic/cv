import React, {ReactNode} from 'react'
import cn from "classnames"

interface CardExperienceProps {
    date: string,
    name: string,
    description: ReactNode
}

const CardExperience: React.FC<CardExperienceProps> = ({date, name, description}) => {
    return <div className="-my-8 divide-y-2 divide-gray-100">
        <div className={cn("py-8 flex flex-wrap md:flex-nowrap", "lg:px-32")}>
            <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">{ date }</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-lg font-medium text-gray-900 title-font mb-2">{name}</h2>
                <div className="text-base leading-relaxed">{description}</div>
            </div>
        </div>
    </div>;
};

export default CardExperience