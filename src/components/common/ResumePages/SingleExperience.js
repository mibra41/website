import React, {Component} from 'react';

class SingleExperience extends Component{
    render(){
        return(
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{this.props.jobTitle}</h3>
                    <div className="subheading mb-3">{this.props.company}</div>
                    <ul>
                        {this.props.description.map((description, index) => {
                            return <li key={index}>{description}</li>
                        })}
                    </ul>
                </div>
                <div className="flex-shrink-0"><span className="font-weight-bold text-primary">{`${this.props.startDate} - ${this.props.endDate}`}</span></div>
            </div>
        )
    }
}

export default SingleExperience;