import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from "../../actions";
class StreamCreate extends React.Component {

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className= 'ui error message'>
                    <div className ='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput({input, label, meta }) {
        // const {value, onChange} = formProps.input;
        // return (
        // <input
        //     onChange={formProps.input.onChange}
        //     value={formProps.input.value}
        // /> )
        return ( 
            <div className="ui container">
                <label>{label}</label>
                <input {...input} autoComplere='off'/>
                {this.renderError(meta)}
            </div>
            )
    }

    onFormSubmit = (formValue) => {
        // event.preventDefault();
        console.log(formValue);
        this.props.createStream(formValue);
    }

    render() {
        console.log("the props are",this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className= "ui form">
                <Field name='title' component={this.renderInput} label= "Enter Title" />
                <Field name='description' component={this.renderInput} label= "Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const formWrapper =  reduxForm({
    form: 'streamCreate'
})(StreamCreate);

export default connect (null, {createStream})(formWrapper)