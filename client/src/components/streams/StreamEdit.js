import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream } from "../../actions"

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValue => {
        console.log("The console is" , this.props.match.params.id);
        this.props.editStream(this.props.match.params.id, formValue);
    }

    render() {
        
            if(!this.props.stream) {
                return (<div> loading ...</div>);
            } else {
                return (
                    <div>
                        <h3> Edit a Stream </h3>
                        <StreamForm
                            initialValues={_.pick(this.props.stream, 'title', 'description')} 
                            onSubmit={this.onSubmit} 
                        />
                    </div>
                )
            }
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(" The props code in mapStatetoprops ", state.streams[ownProps.match.params.id]);
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchStream, editStream })(StreamEdit);
