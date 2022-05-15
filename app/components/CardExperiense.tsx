import React from 'react'

interface CardExperienceProps {
    date: string,
    name: string,
    description: string
}

const CardExperience: React.FC<CardExperienceProps> = ({date, name, description}) => {
    return <div className="-my-8 divide-y-2 divide-gray-100">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">{ date }</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">{name}</h2>
                <p className="leading-relaxed">{description}</p>
            </div>
        </div>
    </div>;
};

export default CardExperience