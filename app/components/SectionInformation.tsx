import React from 'react'
import CardExperience from "./CardExperiense";

interface SectionInformationProps {
    arr: any,
    title: string,
    description?: string
}

const SectionInformation: React.FC<SectionInformationProps> = ({arr, title, description}) => {
    return <section>
        <div className="container px-5 py-10 mx-auto">
            <div className="mb-10">
                <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{title}</h2>
                <p className={"text-center"}>
                    {description}
                </p>
            </div>

            <div className="container px-5 mx-auto text-gray-600 body-font">
                {
                    arr.map((el: any) => {
                        return <CardExperience
                            name={el.name}
                            date={el.date} description={el.description}/>
                    })
                }

            </div>
        </div>
    </section>;
};

export default SectionInformation