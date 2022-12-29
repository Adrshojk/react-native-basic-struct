import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import MyComplaintView from '../components/MyComplaintView';
import * as Actions from '../actions';
// import * as complaintActions from '../../complaint/actions';
import { getUser } from '../selectors';

class MyComplaint extends React.Component {
    componentDidMount(){
        console.log("incomponentDidMount")
        this.props.updateUser
    }

    render() {
        return (
            <MyComplaintView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});


const mapDispatchToProps = dispatch => ({
    // updateUser: () =>{ 
    //     console.log("in dispatch")
    //     dispatch(Actions.updateUser())
    // },
    // navigateToComplaint: () =>{ 
    //     console.log("in navigateToComplaint dispatch")
    //     dispatch(Actions.navigateToComplaint())
    // },
    // navigateToNewCompalint: () => {
    //     console.log("in FPAAAAss")
    //     dispatch(Actions.navigateToNewCompalint())
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComplaint);