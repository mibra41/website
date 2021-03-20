import React, {Component} from 'react';

class Education extends Component{
    render(){
        return(
            <section className="resume-section">
                <div className="resume-section-content">
                    <h2 className="mb-5 text-primary">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University of Virginia</h3>
                            <div className="font-weight-light ml-2">Charlottesville, VA</div>
                            <div className="subheading mb-3">Bachelor of Arts</div>
                            <div>Computer Science; Minor in History</div>
                            <p>GPA: 3.69</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2016 - May 2020</span></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;