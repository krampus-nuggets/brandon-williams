import React from "react"

const InfoBlock = ({ children, heading, headingText }) => {
    if (heading) {
        return (
            <div>
                <span>
                    { headingText }
                </span>
                <p className="pt-2">
                    { children }
                </p>
            </div>
        )
    } else {
        return (
            <div className="w-4/5 h-full mx-auto bg-white text-black text-xs md:text-base 2xl:text-xl box-shadow">
                <p className="p-4">
                    { children }
                </p>
            </div>
        )
    }
}

export default InfoBlock