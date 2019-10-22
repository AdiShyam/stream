import React from 'react'
import { connect } from 'react-redux';
import { createStream } from "../../actions";
import StreamForm  from './StreamForm';

class StreamCreate extends React.Component {

    onFormSubmit = (formValue) => {
        // event.preventDefault();
        this.props.createStream(formValue)
    }

    render() {
        console.log("the props are",this.props);
        return (
            <div>
                <h3> Create a Stream</h3>
                <StreamForm onSubmit={this.onFormSubmit} />
            </div>
        );
    }
};

export default connect (null, { createStream })(StreamCreate)