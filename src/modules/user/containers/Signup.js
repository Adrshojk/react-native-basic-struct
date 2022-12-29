import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignupView from '../components/SignupView';
import { getUser, getDistrictData, getUlbData, getWardData, getGenderData, getUserTypeData, getLoginTypeData } from '../selectors';
import * as Actions from '../actions';

class Signup extends React.Component {

    render() {
        return (
            <SignupView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser,
    district:getDistrictData,
    ulb:getUlbData,
    ward:getWardData,
    gender:getGenderData,
    usertype: getUserTypeData,
    logintype: getLoginTypeData
});

const mapDispatchToProps = dispatch => ({
    authenticate: (data) => { console.log('authenticate disptch') 
    dispatch(Actions.authenticate(data))},
    getDistrict: () => { 
        console.log('getDistrict disptch') 
        dispatch(Actions.getDistrict())
    },
    getUlb: () => { 
        console.log('getUlb disptch') 
        dispatch(Actions.getUlb())
    },
    getWard: () => { 
        console.log('getWard disptch') 
        dispatch(Actions.getWard())
    },
    getGender: () =>{
        console.log('getGender disptch') 
        dispatch(Actions.getGender())
    },
    getUserType: () =>{
        console.log('getUSERTYPE disptch') 
        dispatch(Actions.getUserType())
    },
    getLoginType: () =>{
        console.log('getLOGINTYPE disptch') 
        dispatch(Actions.getLoginType())
    },
    sendOtp: (values) => dispatch(Actions.sendOtp(values.phoneNumber))

});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

