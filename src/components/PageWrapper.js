import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PageHeader from './common/PageHeader';

class PageWrapper extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "#0009"}} id="mainNav">
                    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">Home</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars ml-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/resources">Resources</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/blog">Thoughts</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/memories">Memories</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <PageHeader></PageHeader>
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;