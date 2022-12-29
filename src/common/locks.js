import AwaitLock from 'await-lock';

let toastLock = new AwaitLock();

export {
    toastLock
};
