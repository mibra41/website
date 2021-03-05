import React, {Component} from 'react';
import Client from './Client';

import envatoImage from '../assets/img/logos/envato.jpg';
import creativeImage from '../assets/img/logos/creative-market.jpg';
import designImage from '../assets/img/logos/designmodo.jpg';
import themeImage from '../assets/img/logos/themeforest.jpg';

const clientList=[
    {link:"https://envato.com", image:envatoImage},
    {link:"https://designmodo.com", image:designImage},
    {link:"https://themeforest.net", image:themeImage},
    {link:"https://creativemarket.com", image:creativeImage},
];

class Clients extends Component{
    render(){
        return(
            <div class="py-5">
                <div class="container">
                    <div class="row">
                        {clientList.map((client,index) => {
                            return <Client {...client} key={index}></Client>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;