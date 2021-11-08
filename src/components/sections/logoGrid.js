import React from "react";
import LogoGridImage from "./logoGridImage";

const LogoGrid = ({ content }) => {
    return (
        <div className="pt-10 h-full grid grid-cols-3 grid-rows-3 md:gap-y-8">
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.clover } companyURL={ content.cloverURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.allanGray } companyURL={ content.allanGrayURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.coronation } companyURL={ content.coronationURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.aiimAfrica } companyURL={ content.aiimAfricaURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.eurochem } companyURL={ content.eurochemURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.costain } companyURL={ content.costainURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.pimpMyBook } companyURL={ content.pimpMyBookURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.askthuto } companyURL={ content.askthutoURL } />
            </div>
            <div className="w-full mx-auto">
                <LogoGridImage imageURL={ content.bluegrassDigital } companyURL={ content.bluegrassDigitalURL } />
            </div>
        </div>
    )
}

export default LogoGrid