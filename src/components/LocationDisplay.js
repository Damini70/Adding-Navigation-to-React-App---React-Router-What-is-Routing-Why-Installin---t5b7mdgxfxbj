import React from "react";
import { useLocation } from "react-router-dom";
export default function LocationDisplay(){
    const location = useLocation();
    // console.log(location)

    return (
        <div>
        <h1 data-testid="location-display">{location.pathname}</h1>
        </div >
    )
}
