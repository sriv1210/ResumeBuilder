import React, { Component } from 'react'
import BuilderSectionContent from './BuilderSectionContent'
// import BuilderSectionSaveButton from './BuilderSectionSaveButton'
import IconDivider from './IconDivider'

export default class BuilderSection extends Component {
    render() {
        return (
            <section className="page-section about mb-0" id="about">
                <div className="container">

                    {/* <!-- Builder Section Heading--> */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary">Resume Builder</h2>

                    {/* <!-- Icon Divider--> */}
                    <IconDivider />

                    {/* <!-- Builder Section Content--> */}
                    <BuilderSectionContent />

                    {/* BuilderSectionEdit Button */}
                    {/* <BuilderSectionSaveButton /> */}

                </div>
            </section>
        )
    }
}
