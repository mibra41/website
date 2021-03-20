import React, {Component} from 'react';

import Name from '../common/ResumePages/Name';
import Experience from '../common/ResumePages/Experience';
import Education from '../common/ResumePages/Education';
import Skills from '../common/ResumePages/Skills';
import Interests from '../common/ResumePages/Interests';
import Awards from '../common/ResumePages/Awards';
import PageHeader from '../common/PageHeader';

class Resume extends Component {
    render(){
        return(
            <div style={{paddingLeft:"6rem", paddingRight:"8rem"}}>
                <PageHeader value="resume"></PageHeader>
                <Name
                    firstName="Muhammad"
                    lastName="Ibrahim"
                    cityState="Fort Washington, MD"
                    zip="20744"
                    phone="(703)419-0916"
                    email="ibrahim.muhammad4@gmail.com"
                    mission="my name is muhammad ibrahim"
                />
                <Experience></Experience>
                <Education></Education>
                <Skills></Skills>
                <Interests></Interests>
                <Awards></Awards>
            </div>
        );
    }
}

export default Resume;