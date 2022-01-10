import React, { Component } from 'react'



export default class PortfolioItem extends Component {
    
    render() {
        return (
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={this.props.dest}>
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid border border-primary" src={this.props.img} alt="..." />
                </div>
            </div>
        )
    }
}
