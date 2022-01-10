import React, { Component } from 'react'
import IconDivider from './IconDivider'

export default class Masthead extends Component {
    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    {/* <!-- Masthead Avatar Image--> */}
                    <img className="masthead-avatar mb-5" src={"https://freesvg.org/img/1549444169.png"} style={{borderRadius: "50%"}} alt="..." />
                    {/* <!-- Masthead Heading--> */}
                    <h1 className="masthead-heading text-uppercase mb-0">First Impression</h1>
                    {/* <!-- Icon Divider--> */}
                    <IconDivider />
                    {/* <!-- Masthead Subheading--> */}
                    <p className="masthead-subheading font-weight-light mb-0">Build your resume with precision. Easy to use and free. </p>
                    <i className="masthead-subheading font-weight-light mb-0">"Because you don't get second chance to make first impression" - Will Rogers</i>
                </div>
            </header>
        )
    }
}
