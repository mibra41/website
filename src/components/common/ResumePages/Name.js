import React, {Component} from 'react';

class Name extends Component{
    render(){
        return(
            <section className="resume-section name-section-center" >
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        {this.props.firstName}
                        <span className="text-primary">{this.props.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">
                        {`${this.props.cityState} ${this.props.zip} · ${this.props.phone} · `}
                        <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
                    </div>
                    <p className="lead mb-5">{this.props.mission}</p>
                </div>
            </section>
        );
    }
}

export default Name;