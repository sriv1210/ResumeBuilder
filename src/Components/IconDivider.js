import React, { Component } from 'react'

export default class IconDivider extends Component {
    render() {
        return (
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        )
    }
}
