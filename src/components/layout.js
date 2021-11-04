import React from "react"

import GlobalStyle from "./globalStyle"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ content, children }) => {
    return (
        <div id="root" className="w-full">
            <GlobalStyle />
            <Header />
                <div id="main-sections">
                    { children }
                </div>
            <Footer content={ content } />
        </div>
    )
}

export default Layout