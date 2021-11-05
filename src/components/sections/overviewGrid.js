import React from "react"

const OverviewGrid = ({ children }) => {
    return (
        <div className="pt-14 h-4/5 grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-y-8 lg:gap-y-0">
            <div className="w-full mx-auto">
                { children[0] }
            </div>
            <div className="w-full mx-auto">
                { children[1] }
            </div>
            <div className="w-full mx-auto">
                { children[2] }
            </div>
        </div>
    )
}

export default OverviewGrid