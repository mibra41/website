import React, {Component} from 'react';
const errorString2 = "This is required";
class Field extends Component{
    render(){
        return(
            <div className="form-group">
                {this.props.element === 'input' ?
                    <input 
                        className="form-control" 
                        id={this.props.name}
                        type={this.props.type} 
                        placeholder={this.props.placeholder}
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />  
                    : <textarea 
                        className="form-control"     
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />  
                }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        );
    }
}

export default Field;