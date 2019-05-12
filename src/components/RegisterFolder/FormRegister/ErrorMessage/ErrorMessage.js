import React from 'react';
import './ErrorMessage.css';

class ErrorMessage extends React.Component {
    handleDisplay = () => {
        if (this.props.checkRegisterDisplay) {
            if (!this.props.userData.isValid) {
                return (
                    this.props.userData.errorMsg
                );
            }
        }
    }
    
    render() {
        return (
            <div className="ErrorMessage">
                {this.handleDisplay()}
            </div>
        );
    }
}

export default ErrorMessage;