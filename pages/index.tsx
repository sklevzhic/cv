import React, {FC} from "react";
import Header from "../app/components/Header";

const HomePage: FC = () => {
    return <div className="grid grid-flow-row-dense grid-cols-6 ">

        {/*<div className="col-span-1 h-6 border-r-2" style={{height: "400px"}}>sitebar</div>*/}
        <div className="col-span-6">
            <section className={"bg-lime-100 rounded-lg"}>
                <div className="py-16">
                    <div className="container m-auto px-6">

                        <div className="lg:flex justify-between items-center">
                            <div className="lg:w-6/12 lg:p-0 p-7">
                                <h1 className="text-4xl font-bold leading-tight mb-5 capitalize"> Professional Tailwind
                                    theme designed for developers. </h1>
                                <p className="text-xl"> With Tailwind you can optimized the customization process to
                                    save your team time when building websites. </p>

                                <div className="py-5">
                                    <a href="#"
                                       className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Try
                                        for free</a>
                                    <a href="#"
                                       className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black">Requist
                                        a demo</a>
                                </div>

                            </div>
                            <div className="lg:w-5/12 order-2">
                                <img
                                    src="http://ipkip.bspu.by/admin-panel/vendor/kcfinder/upload/images/sovet/klevzhits.jpg"
                                    alt="" className="rounded" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>2</section>
            <section>3</section>
            <section>4</section>
            <section>1</section>
            <section>1</section>
        </div>

    </div>
}

export default HomePage
