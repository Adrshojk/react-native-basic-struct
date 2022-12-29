import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import LoginView from '../components/LoginView';
import * as Actions from '../actions';
// import * as complaintActions from '../../complaint/actions';
import { getUser } from '../selectors';

class Login extends React.Component {
    componentDidMount(){
        console.log("incomponentDidMount")
        this.props.updateUser
    }

    render() {
        return (
            <LoginView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});


const mapDispatchToProps = dispatch => ({
    updateUser: () =>{ 
        console.log("in dispatch")
        dispatch(Actions.updateUser())
    },
    navigateToComplaint: () =>{ 
        console.log("in navigateToComplaint dispatch")
        dispatch(Actions.navigateToComplaint())
    },
    navigateToForgotpassword: () => {
        console.log("in FPAAAAss")
        dispatch(Actions.navigateToForgotpassword())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);