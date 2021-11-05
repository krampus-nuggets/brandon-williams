import React from "react"

const SectionHeading = ({ text }) => {
    return (
        <div className="w-full pt-7 text-center">
            <span className="p-1 bg-white text-black md:text-2xl">
                { text }
            </span>
        </div>
    )
}

export default SectionHeading