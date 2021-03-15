import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../common/Services';
import About from '../common/About';
import Team from '../common/Team';
import Clients from '../common/Clients';
import Contact from '../pages/Contact';
import Footer from '../common/Footer';
import PageHeader from '../common/PageHeader';
class Home extends Component{
    render() {
        return (
            <div>
                <PageHeader value="" paddingTop="15rem"></PageHeader>
                <Header 
                    title="Welcome to my website!"
                    subtitle="I like traveling, learning, and impacting lives."
                    //buttonText="Tell me more"
                    //link="/services"
                    //showButton={false}
                    //image={image}
                />
            </div>
        );
    }
}

export default Home;