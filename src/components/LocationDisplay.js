import React from "react";
export default function LocationDisplay(){
    const location = useLocation();
    // console.log(location)

    return (
        <div>
        <h1 data-testid="location-display">{location.pathname}</h1>
        </div >
    )
}
