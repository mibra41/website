import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './common/Footer';

class PageWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            paddingTop: "15rem"
        };
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "#0009"}} id="mainNav">
                    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger text-primary" to="/" onClick={() => this.setState({value: "", paddingTop: "15rem"})}>Home</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars ml-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/resume" onClick={() => this.setState({value: "resume", paddingTop: ""})}>Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/resources" onClick={() => this.setState({value: "useful resources", paddingTop: ""})}>Resources</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/blog" onClick={() => this.setState({value: "random thoughts", paddingTop: ""})}>Thoughts</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/memories" onClick={() => this.setState({value: "memories", paddingTop: ""})}>Memories</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about" onClick={() => this.setState({value: "about me", paddingTop: ""})}>About</Link></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}

export default PageWrapper;