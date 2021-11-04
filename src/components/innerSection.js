import React from "react";

const InnerSection = ({ children, sectionType }) => {
    if (sectionType === "flex") {
        return (
            <div className="flex flex-col relative mx-auto my-0 p-0 ">
                { children }
            </div>
        )
    } else {
        return (
            <div className="h-full relative mx-auto my-0 p-0 ">
                { children }
            </div>
        )
    }
    
}

export default InnerSection