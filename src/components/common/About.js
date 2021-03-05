import React, {Component} from 'react';
import AboutItem from './AboutItem';

//Images
import beginningsImage from '../assets/img/about/1.jpg';
import bornImage from '../assets/img/about/2.jpg';
import transitionImage from '../assets/img/about/3.jpg';
import expansionImage from '../assets/img/about/4.jpg';

const about = [
    {title: "Our Humble Beginnings", date: "2009-2011", class:"", description:"Be humble", image: beginningsImage},
    {title: "An Agency is Born", date: "March 2011", class:"timeline-inverted", description:"Birth", image: bornImage},
    {title: "Transition to Full Service", date: "December 2012", class:"", description:"Fully serviceable", image: transitionImage},
    {title: "Phase Two Expansion", date: "July 2014", class:"timeline-inverted", description:"Expand", image: expansionImage},
];
class About extends Component{
    render(){
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        {about.map((aboutItem, index) => {
                            return <AboutItem {...aboutItem} key={index}></AboutItem>
                        })}
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About;