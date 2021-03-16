import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header className="masthead">
                    <div className="container">
                        <div className="masthead-heading text-uppercase text-primary">{this.props.title}</div>
                        <div className="masthead-subheading text-primary">{this.props.subtitle}</div>
                        {this.props.showButton && <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.buttonText}</Link>}
                    </div>
            </header>
        );
    }
}  

export default Header;