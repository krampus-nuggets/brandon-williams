import React from "react";
import LogoGridImage from "./logoGridImage";

const LogoGrid = ({ imageArray, companyURLArray }) => {
    return (
        <div className="pt-10 h-full grid grid-cols-3 grid-rows-3">
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[0] } companyURL={ companyURLArray[0] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[1] } companyURL={ companyURLArray[1] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[2] } companyURL={ companyURLArray[2] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[3] } companyURL={ companyURLArray[3] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[4] } companyURL={ companyURLArray[4] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[5] } companyURL={ companyURLArray[5] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[6] } companyURL={ companyURLArray[6] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[7] } companyURL={ companyURLArray[7] } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ imageArray[8] } companyURL={ companyURLArray[8] } />
            </div>
        </div>
    )
}

export default LogoGrid