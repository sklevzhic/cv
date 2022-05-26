import Link from "next/link";
import React, {FC} from "react";

interface TitlePageProps {
    text: string
}

const TitlePage: FC<TitlePageProps> = ({text}) => {
    return <p className="py-2 mb-5 border-b-2 font-medium text-4xl">{text}</p>
}

export default TitlePage