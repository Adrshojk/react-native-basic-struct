import React from 'react';
import ComplaintReportView from '../components/ComplaintReportView';

class ComplaintReport extends React.Component {

    render() {
        return (
            <ComplaintReportView {...this.props} />
        );
    }
}

export default ComplaintReport;
