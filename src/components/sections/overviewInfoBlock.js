import React from "react"

const OverviewInfoBlock = ({ children, headingText }) => {
    return (
        <div className="w-full">
            <span className="bg-black text-white p-1">
                { headingText }
            </span>
            <ol className="py-8 text-sm md:text-base mx-auto w-4/5 list-decimal">
                {
                    children.map((value) => (
                        <li key={ `overview-list-item-${ value }` } className="pb-1">{ value }</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default OverviewInfoBlock
