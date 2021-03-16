import React, {Component} from 'react';
import PageHeader from '../common/PageHeader';

class Resources extends Component{
    render(){
        return(
            <div style={{paddingLeft:"6rem", paddingRight:"8rem"}}>
                <PageHeader value="Useful Resources"></PageHeader>
                <div className="container mb-5">
                    <h5 className="text-primary">Personal Development</h5>
                    <div style={{backgroundColor:"black",width:"75%",justifyContent:"center",margin:"2rem"}}>
                        hello
                    </div>
                </div>
                <div className="container mb-5">
                    <h5 className="text-primary">Financial</h5>
                </div>
                <div className="container mb-5">
                    <h5 className="text-primary">Programming</h5>
                </div>
                <div className="container mb-5">
                    <h5 className="text-primary">Philosophy/Psychology</h5>
                </div>
            </div>
        )
    };
}

export default Resources;