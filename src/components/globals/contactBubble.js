import React from "react";

const ContactBubble = () => {
    return (
        <a href="mailto:brandon@wemakeart.co.za" title="Contact Me" rel="noreferrer">
            <div className="fixed z-50 bottom-0 right-0 h-8 w-8 md:h-12 md:w-12 mr-2 mb-2">
                <img className="w-full" src="https://res.cloudinary.com/wemakeart/image/upload/e_negate/v1636383867/github/brandon-williams/icons/mail_ovuyza.webp" />
            </div>
        </a>
    )
}

export default ContactBubble