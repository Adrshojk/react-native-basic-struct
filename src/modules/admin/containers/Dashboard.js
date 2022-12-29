import React from 'react';
import DashboardView from '../components/DashboardView';

class Dashboard extends React.Component {

    render() {
        return (
            <DashboardView {...this.props} />
        );
    }
}

export default Dashboard;
