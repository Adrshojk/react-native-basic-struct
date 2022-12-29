import Toast from 'react-native-toast-message';
import { toastLock } from '../locks';

const DEFAULT_TOAST_TIMEOUT = 4000;

export const infoToast = (title = 'Performing operation', timeout = DEFAULT_TOAST_TIMEOUT) => {
    console.log("in infotoast")
    showToast('info', title, timeout);
}

export const successToast = (title = 'Success', timeout = DEFAULT_TOAST_TIMEOUT) => {
    showToast('success', title, timeout);
}

export const errorToast = (title = 'Error', timeout = DEFAULT_TOAST_TIMEOUT) => {
    showToast('error', title, timeout);
}

export const hideToast = () => {
    Toast.hide();
}

const showToast = async (type, title, timeout) => {
    console.log("in showToast")
    await toastLock.acquireAsync();
    try {
        Toast.hide();
        Toast.show({
            type,
            text1: title,
            autoHide: false
        });
        await new Promise(resolve => setTimeout(resolve, timeout));
        if (timeout !== 0) {
            Toast.hide();
        }
    } catch {
        // NOOP
    } finally {
        toastLock.release();
    }
}
