import React from "react";

const InnerSection = ({ children }) => {
    return (
        <div className="h-full inner-section relative mx-auto">
            { children }
        </div>
    )
}

export default InnerSection