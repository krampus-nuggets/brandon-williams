import React from "react"

const HeroHeading = ({ headingOne, headingTwo, headingThree }) => {
    return (
        <div className="inline grid grid-cols-1 grid-rows-3 gap-1 md:gap-3 pl-5 xl:pl-14 center-block">
            <div className="h-6 mt-2">
                <span className="p-1 bg-white text-black md:text-2xl">
                    { headingOne }
                </span>
            </div>
            <div className="h-10 mt-1">
                <span className="p-1 text-2xl bg-white text-black md:text-5xl">
                    { headingTwo }
                </span>
            </div>
            <div className="mt-1 md:mt-4">
                <span className="p-1 text-xs bg-white text-black md:text-base">
                    { headingThree }
                </span>
            </div>
        </div>
    )
}

export default HeroHeading