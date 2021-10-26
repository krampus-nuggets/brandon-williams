import React from "react";

const LogoGridImage = ({ imageURL, companyURL }) => {
    return (
        <a href={ companyURL } target="_blank" rel="noreferrer">
            <img className="h-24 md:h-36 border-4 border-white mx-auto" src={ imageURL } alt="company-logo" />
        </a>
    )
}

export default LogoGridImage