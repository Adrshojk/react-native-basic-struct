import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DummyView from '../components/DummyView';
import { getUser } from '../selectors';
import * as Actions from '../actions';

class Dummy extends React.Component {

    render() {
        return (
            <DummyView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});

const mapDispatchToProps = dispatch => ({
    sendOtp: (values) => dispatch(Actions.sendOtp(values.phoneNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);

