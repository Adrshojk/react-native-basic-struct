import React from 'react';
// import { logger } from 'react-native-logs';
// import BuildConfig from 'react-native-build-config';
// import { colorConsoleAfterInteractions } from 'react-native-logs/dist/transports/colorConsoleAfterInteractions';
// import InfoToast from 'react-native-toast-message/src/components/info';
// import SuccessToast from 'react-native-toast-message/src/components/success';
// import ErrorToast from 'react-native-toast-message/src/components/error';
// import Toast from 'react-native-toast-message';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

// const log = logger.createLogger({
//     transport: colorConsoleAfterInteractions,
// });

// if (__DEV__) {
//     log.setSeverity('debug');
// } else {
//     log.setSeverity('error');
// }

// export { log };

const toastConfig = {
    success: ({ hide, ...rest }) => (
        <BaseToast
            {...rest}
            style={{ width: '95%',borderColor: '#30D5DD',marginTop: 20, borderLeftWidth:5 , elevation: 8}}
            contentContainerStyle={{ paddingHorizontal: 15,marginHorizontal:15 }}
            text1Style={{
            fontSize: 15,
            fontWeight: '400'
            }}
        />
        // <Toast {...rest} onTrailingIconPress={hide} text1NumberOfLines={2} />
    ),
    error: ({ hide, ...rest }) => (
        <Toast {...rest} onTrailingIconPress={hide} text1NumberOfLines={2} />
    ),
    info: ({ hide, ...rest }) => (
        <Toast {...rest} onTrailingIconPress={hide} text1NumberOfLines={2} />
    )
};

// const mqConfig = {
//     host: BuildConfig.MQ_HOST,
//     port: BuildConfig.MQ_PORT,
//     username: BuildConfig.MQ_USERNAME,
//     password: BuildConfig.MQ_PASSWORD,
//     ssl: BuildConfig.MQ_SSL
// }

// export { toastConfig, mqConfig };
export { toastConfig };

export default {
    apiServer: {
        url: 'https://mis-dev.smartgms.in:9443'
    },
    authServer: {
        url: 'https://mis-dev.smartgms.in:9443'
    },
    // oneSignal: {
    //     appId: 'fd175534-41f6-424d-872b-d31ff6bdb50d'
    // }
};
