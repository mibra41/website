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
                <Name></Name>
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