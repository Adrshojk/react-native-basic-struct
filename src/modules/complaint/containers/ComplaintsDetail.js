import React from 'react';
import { connect } from 'react-redux';
import ComplaintsDetailView from '../components/ComplaintsDetailView';
import { navigation } from '../../../common/actions'

const { navigateBack } = navigation;


class ComplaintsDetail extends React.Component {

    render() {
        return (
            <ComplaintsDetailView {...this.props} />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    navigateBack: () => dispatch(navigateBack()) ,
});

export default connect(mapDispatchToProps)(ComplaintsDetail);

