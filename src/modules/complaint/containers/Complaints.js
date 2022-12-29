import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import ComplaintsView from '../components/ComplaintsView';
import * as Actions from '../actions';
import { getUser } from '../selectors';

class Complaints extends React.Component {
    componentDidMount(){
        console.log("incomponentDidMount")
        this.props.updateUser
    }

    render() {
        return (
            <ComplaintsView {...this.props} />
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
    navigateToComplaintsList: () =>{ 
        console.log("in navigateToComplaint dispatch")
        dispatch(Actions.navigateToComplaintsList())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Complaints);