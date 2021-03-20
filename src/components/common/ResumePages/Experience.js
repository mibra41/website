import React, {Component} from 'react';
import SingleExperience from './SingleExperience';
const jobs = [
    {
        jobTitle:"Software Developer",
        company:"Epic Systems Corporation",
        description:[
            "Wrote code bro",
            "Wrote code sis",
            "Wrote code mom",
            "Wrote code dad"
        ],
        startDate:"July 2020",
        endDate:"Present"
    },
    {
        jobTitle:"Software Developer",
        company:"Epic Systems Corporation",
        description:[
            "Wrote code bro",
            "Wrote code sis",
            "Wrote code mom",
            "Wrote code dad"
        ],
        startDate:"July 2020",
        endDate:"Present"
    }
]
class Experience extends Component{
    render(){
        return(
            <section className="resume-section" >
                <div className="resume-section-content">
                    <h2 className="mb-5 text-primary">Experience</h2>
                    {jobs.map((experience, index) => {
                        return <SingleExperience {...experience} key={index} />
                    })}
                </div>
            </section>
        );
    }
}

export default Experience;