import React from 'react';
import ComplaintEscalateView from '../components/ComplaintEscalateView';

class ComplaintEscalate extends React.Component {

    render() {
        return (
            <ComplaintEscalateView {...this.props} />
        );
    }
}

export default ComplaintEscalate;
