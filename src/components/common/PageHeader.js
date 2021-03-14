import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageHeader extends Component {
    render(){
        return(
            <header className="masthead-small">
                    <div className="container">
                        <div className="masthead-heading text-uppercase">Resume</div>
                    </div>
            </header>
        );
    }
}  

export default PageHeader;