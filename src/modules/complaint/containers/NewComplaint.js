import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NewComplaintView from '../components/NewComplaintView';
import { getaddComplaints, getComplaints, getDistrictData, getLsgiData, getWardData, getComplaintModeData, getComplaintCategoryData, getComplaintTypeData } from '../selectors';
import * as Actions from '../actions';

class NewComplaint extends React.Component {

    render() {
        return (
            <NewComplaintView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    addcomplaint: getaddComplaints,
    complaint: getComplaints,
    district: getDistrictData,
    lsgi: getLsgiData,
    ward: getWardData,
    complaintmode: getComplaintModeData,
    complaintcategory: getComplaintCategoryData,
    complainttype: getComplaintTypeData,
});

const mapDispatchToProps = dispatch => ({
    authenticate: (data) => {
        console.log('authenticate disptch')
        dispatch(Actions.authenticate(data))
    },

    addcomplaint: (data) => {
        console.tron.log('authenticate disptch',data)
        dispatch(Actions.addcomplaint(data))
    },

    getDistrict: () => {
        console.log('getDistrict disptch')
        dispatch(Actions.getDistrict())
    },
    getLsgi: () => {
        console.log('getLsgi disptch')
        dispatch(Actions.getLsgi())
    },
    getWard: () => {
        console.log('getWard disptch')
        dispatch(Actions.getWard())
    },
    getComplaintMode: () => {
        console.log('getComplaintMode disptch')
        dispatch(Actions.getComplaintMode())
    },
    getComplaintCategory: () => {
        console.log('getComplaintCategory disptch')
        dispatch(Actions.getComplaintCategory())
    },
    getComplaintType: () => {
        console.log('getComplaintType disptch')
        dispatch(Actions.getComplaintType())
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(NewComplaint);

