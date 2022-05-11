import Map from "../app/components/Map"
import {FC} from "react";
import cn from "classnames"
import Form from "../app/components/Form";

const MapPage: FC = () => {
  return (
    <div  className={cn("relative","p-8")}>

        <Map />
        <div className={cn("absolute bg-amber-400 max-w-md mx-auto rounded-xl shadow-md overflow-hidden")}>
            <Form />
        </div>
    </div>
  )
}

export default MapPage
