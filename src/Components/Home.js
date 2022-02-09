import React, { Component, lazy, Suspense } from 'react'
import '../Styles/Home.css'
import '../Scripts/HomeScript'

const Navigation = lazy(()=> import('./Navigation'))
const Masthead = lazy(()=> import('./Masthead'))
const BuilderSection = lazy(()=> import('./BuilderSection'))
const Footer = lazy(()=> import('./Footer'))
const CopyrightSection = lazy(()=> import('./CopyrightSection'))



export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="page-top">
                    {/* <!-- Navigation--> */}
                    <Suspense fallback={<div>Loading...</div>}>
                    <Navigation />
                    </Suspense>
                    
                    {/* <!-- Masthead--> */}
                    <Suspense fallback={<div>Loading...</div>}>

                    <Masthead />
                    </Suspense>
                    
                    {/* <!-- Builder Section--> */}
                    <Suspense fallback={<div>Loading...</div>}>
                    <BuilderSection />
                    </Suspense>
                    
                    {/* <!-- Portfolio Section--> */}
                    {/* <PortfolioSection /> */}
                    {/* <!-- Contact Section--> */}
                    {/* <ContactSection /> */}
                    {/* <!-- Footer--> */}
                    <Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                    </Suspense>
                    
                    {/* <!-- Copyright Section--> */}
                    <Suspense fallback={<div>Loading...</div>}>
                    <CopyrightSection />
                    </Suspense>
                    
                    {/* <!-- Portfolio Modals--> */}
                    {/* <PortfolioModals /> */}
                </div>
            </React.Fragment>
        )
    }
}
