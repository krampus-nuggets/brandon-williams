import React from "react"

const ProjectGrid = ({ children }) => {
    return (
        <div className="pt-14 h-4/5 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
            <div className="w-full mx-auto">
                { children[0] }
            </div>
            <div className="w-full mx-auto">
                { children[1] }
            </div>
        </div>
    )
}

export default ProjectGrid