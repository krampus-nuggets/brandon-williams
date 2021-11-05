import React from "react"

const OverviewInfoContainer = ({ children }) => {
    return (
        <div className="relative w-4/5 mx-auto bg-white text-black text-xs md:text-base 2xl:text-xl box-shadow flex flex-col">
            { children }
        </div>
    )
}

export default OverviewInfoContainer