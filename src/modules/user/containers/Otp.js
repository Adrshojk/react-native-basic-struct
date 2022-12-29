import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import OtpView from '../components/OtpView';
import { getUser } from '../selectors';
import * as Actions from '../actions';

class Otp extends React.Component {

    render() {
        return (
            <OtpView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});

const mapDispatchToProps = dispatch => ({
    sendOtp: (values) => dispatch(Actions.sendOtp(values.phoneNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Otp);

