import React from 'react';
import ComplaintDetailView from '../components/ComplaintDetailView';

class ComplaintDetail extends React.Component {

    render() {
        return (
            <ComplaintDetailView {...this.props} />
        );
    }
}

export default ComplaintDetail;
