import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} 
            className="ui dimmer modals visible active">
        {/* // <div className="ui dimmer modals visible active"> */}
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    { props.actions }
                    {/* <button className="ui primary button">Delete</button>
                    <button className="ui secondary button">Cancel</button> */}
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
}

export default Modal;
