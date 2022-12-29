import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ForgotpasswordView from '../components/ForgotpasswordView';
import { getUser } from '../selectors';
import * as Actions from '../actions';

class Forgotpassword extends React.Component {

    render() {
        return (
            <ForgotpasswordView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});

const mapDispatchToProps = dispatch => ({
    sendOtp: (values) => dispatch(Actions.sendOtp(values.phoneNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);

