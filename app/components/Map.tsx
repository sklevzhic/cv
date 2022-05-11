import React, { FC } from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";




const Map: FC = () => {
    const containerStyle = {
        width: '400px',
        height: '700px'
    };

    const center = {
        lat: 53.904541,
        lng: 27.561523
    };


    let YOUR_API_KEY = "AIzaSyBDU5UV-wIq85xajxT3NkwDlvb_DyHsidw"


    return (
        <LoadScript googleMapsApiKey={YOUR_API_KEY} >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                options={{
                    zoomControl: false,
                    fullscreenControl: false,
                    keyboardShortcuts: false,
                    clickableIcons: false,
                    scrollwheel: false
                }}
            >
            </GoogleMap>
        </LoadScript>
    )
}

export default Map