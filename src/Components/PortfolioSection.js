import React, { Component } from 'react'
import IconDivider from './IconDivider'
import PortfolioItem from './PortfolioItem'

export default class PortfolioSection extends Component {
    render() {
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* <!-- Portfolio Section Heading--> */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Choose Resume Template</h2>
                    {/* <!-- Icon Divider--> */}
                    <IconDivider />
                    {/* <!-- Portfolio Grid Items--> */}
                    <div className="row justify-content-center">
                        {/* <!-- Portfolio Item 1--> */}
                        <PortfolioItem img={require('../Assets/Brown.png')} dest="#portfolioModal1"/>
                        {/* <!-- Portfolio Item 2--> */}
                        <PortfolioItem img={require('../Assets/BrownFloral.png')} dest="#portfolioModal2"/>                        
                        {/* <!-- Portfolio Item 3--> */}
                        <PortfolioItem img={require('../Assets/BlackWhite.png')} dest="#portfolioModal3"/>                           
                        {/* <!-- Portfolio Item 4--> */}
                        <PortfolioItem img={require('../Assets/DustyPink.png')} dest="#portfolioModal4"/>   
                        {/* <!-- Portfolio Item 5--> */}
                        <PortfolioItem img={require('../Assets/PastelOrange.png')} dest="#portfolioModal5"/> 
                        {/* <!-- Portfolio Item 6--> */}
                        <PortfolioItem img={require('../Assets/Skybluepastel.png')} dest="#portfolioModal6"/>   
                    </div>
                </div>
            </section>
        )
    }
}
