import React from 'react'
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { deleteStream, fetchStream } from '../../actions';
import { connect} from 'react-redux';
import history from '../../history';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    renderActions() {
        const { id } = this.props.match.params;
        return (
            /* <> */
            <React.Fragment>
                <button
                    className="ui button negative"
                    onClick={(e) => (this.props.deleteStream(id))}
                    > Delete
                </button>
                <Link
                    className="ui button"
                    to = "/"
                    // onClick={() => (history.push('/'))}
                    >cancel
                </Link>
            </React.Fragment>
            // </>
            )
        }

        renderContent() {
            if(!this.props.stream) {
                return 'Are you sure you want to delete this stream?'
            }
            return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
        }
        render() {
            console.log("the delete prosp are", this.props);
        return (
            <Modal
                title='Delete stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
                />
        )
    }
}

const mapStateToprops = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToprops, { fetchStream, deleteStream })(StreamDelete);