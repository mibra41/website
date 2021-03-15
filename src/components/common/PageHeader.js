import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageHeader extends Component {
    render(){
        return(
            <header className="masthead-small" style={{paddingTop: this.props.paddingTop}}>
                    <div className="container">
                        <div className="masthead-heading text-uppercase">{this.props.value}</div>
                    </div>
            </header>
        );
    }
}  

export default PageHeader;