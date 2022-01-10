import React, { Component } from 'react'
import '../Styles/Home.css'
import '../Scripts/HomeScript'

import Navigation from './Navigation'
import Masthead from './Masthead'
// import PortfolioSection from './PortfolioSection'
import BuilderSection from './BuilderSection'
// import ContactSection from './ContactSection'
import Footer from './Footer'
import CopyrightSection from './CopyrightSection'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="page-top">
                    {/* <!-- Navigation--> */}
                    <Navigation />
                    {/* <!-- Masthead--> */}
                    <Masthead />
                    {/* <!-- Builder Section--> */}
                    <BuilderSection />
                    {/* <!-- Portfolio Section--> */}
                    {/* <PortfolioSection /> */}
                    {/* <!-- Contact Section--> */}
                    {/* <ContactSection /> */}
                    {/* <!-- Footer--> */}
                    <Footer />
                    {/* <!-- Copyright Section--> */}
                    <CopyrightSection />
                    {/* <!-- Portfolio Modals--> */}
                    {/* <PortfolioModals /> */}
                </div>
            </React.Fragment>
        )
    }
}
