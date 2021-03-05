import React, {Component} from 'react';
import Field from '../common/Field';

const fields = {
    sections: [
        [
            {name: 'name', element: 'input', type: 'text', placeholder: 'Your Name'},
            {name: 'email', element: 'input', type: 'email', placeholder: 'Your Email'},
            {name: 'phone', element: 'input', type: 'tel', placeholder: 'Your Phone Number'}            
        ],
        [
            {name: 'message', element: 'TextArea', type: 'text', placeholder: 'Please Enter Your Message Here'}
        ]
    ]
}


class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    }
    submitForm = (e) => {
        alert(`Thank you very much, ${this.state.name}`)
    }
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={e => this.submitForm(e)}>
                        <div className="row align-items-stretch mb-5">
                                {fields.sections.map((section, sectionIndex) => {
                                    return (
                                        <div className="col-md-6">
                                            {section.map((field, index) => {
                                                return <Field 
                                                            {...field} 
                                                            key={index}
                                                            value={this.state[field.name]}
                                                            onChange={e => this.setState({[field.name]: e.target.value})} />
                                            })}
                                        </div>
                                    )
                                })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;