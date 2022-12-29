import React from 'react';
import SplashView from '../components/SplashView';

class Splash extends React.Component {

    render() {
        return (
            <SplashView {...this.props} />
        );
    }
}

export default Splash;
