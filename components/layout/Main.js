import React from 'react'

import Header from "../shared/header/Header"
import Footer from "../shared/footer/Footer"

const Main = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Main