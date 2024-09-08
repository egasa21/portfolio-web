import React, { useState } from 'react'
import { Header } from '../../components/Header'

export const Layout = ({ children, scrollToSection }) => {

    return (
        <>
            <Header scrollToSection={scrollToSection}/>
            <main>{children}</main>
        </>
    )
}
