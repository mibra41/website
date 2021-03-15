import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import About from '../common/About';
import Team from '../common/Team';
import Clients from '../common/Clients';
import Contact from '../pages/Contact';
import Footer from '../common/Footer';
class Home extends Component{
    render() {
        return (
            <div>
                <Header 
                    title="Welcome to my website!"
                    subtitle="I like traveling, learning, and impacting lives."
                    //buttonText="Tell me more"
                    //link="/services"
                    //showButton={false}
                    //image={image}
                />
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;