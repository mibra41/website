import React, {Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';

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
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                                {fields.sections.map((section, sectionIndex) => {
                                    return (
                                        <div className="col-md-6" key={sectionIndex}> 
                                            {section.map((field, index) => {
                                                return <Field 
                                                            {...field} 
                                                            key={index}
                                                            value={this.props.values[field.name]}
                                                            name={field.name}
                                                            onChange={this.props.handleChange}
                                                            onBlur={this.props.handleBlur}
                                                            touched={this.props.touched[field.name]}
                                                            errors={this.props.errors[field.name]}
                                                />
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

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),

    validate: (values) => {
        const errors = {};
        Object.keys(values).map(v => {
            if(!values[v]){
                errors[v] = "Required";
            }
        })
        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form!", JSON.stringify(values));
    },

    handleBlur: (values) => {
        const touched = {}
        Object.keys(values).map(v => {
            touched[v] = true;
        })
        return touched;
    }

})(Contact);