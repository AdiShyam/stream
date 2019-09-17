import React from 'react';
import { connect} from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        try {
            window.gapi.load('client:auth2', () => {
                console.log("I am loaded");
                window.gapi.client.init({
                    clientId: '1095304880445-r10lgvd25lm97jn1jn25p3v5op8tt1gj.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.props.isSignedIn? signOut() : signIn()
                    this.auth.isSignedIn.listen(this.onAuthChange);
                })
            });
        } catch (e) {
            console.error("the error is ", e);
        }
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        const isSignedIn = this.props.isSignedIn;
        if (isSignedIn === null) {
            return null
        } else if (isSignedIn) {
            return <button className = "ui red google button" onClick = {() => {this.auth.signOut()}} >
                     <i className="google icon" /> 
                Sign Out
            </button>
        } else {
            return  <button className = "ui red google button" onClick = {() => {this.auth.signIn()}}>
            <i className="google icon" /> 
                Sign In with google
                </button>
        }
    }

    render() {
        console.log("the props are ",this.props);
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
     } 
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
