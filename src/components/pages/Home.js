import React, {Component} from 'react';
import Header from '../common/Header';
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