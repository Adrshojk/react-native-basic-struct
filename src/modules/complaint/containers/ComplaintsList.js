import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Actions from '../actions'
import { getComplaints, deleteComplaintData } from '../selectors';
import { navigation } from '../../../common/actions'

const { navigateBack } = navigation;

import ComplaintsListView from '../components/ComplaintsListView';

class ComplaintsList extends React.Component {

    render() {
        return (
            <ComplaintsListView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    complaintsList: getComplaints,
    deleteComplaint: deleteComplaintData,
});

const mapDispatchToProps = dispatch => ({
    fetchComplaints: () => dispatch(Actions.fetchComplaints()),
    deleteComplaint: () => dispatch(Actions.deleteComplaint()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsList);

