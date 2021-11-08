import React from "react"

const OverviewGrid = ({ children }) => {
    return (
        <div className="pt-14 h-4/5 flex flex-col xl:flex-row gap-y-8">
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