export const STATE_REDUCER_KEY = 'User';

export const ROUTE_KEYS = {
    SIGNUP_FORM: 'SignupForm',
    LOGIN_FORM: 'LoginForm',
    OTP_FORM: 'Otp',
    FORGOT_PASSWORD: 'Forgotpassword',
    COMPLAINT: 'Complaint',
    DUMMY: 'Dummy'
};

export const COMMON_SIGNUP_LABELS = {
    USER_NAME: 'userName',
    USER_PASSWORD: 'userPassword',
    FIRST_NAME: 'firstName',
    GENDER: 'gender',
    DISTRICT: 'district',
    ULB: 'ulb',
    WARD: 'ward',
    MOBILE_NO: 'mobileNo',
    ALTERNATE_NO: 'altNo',
    EMAIL: 'email',
    MALE: 'Male',
    FEMALE: 'Female',
    OTHERS: 'Others',
};

export const GENDER_DATA = [
    { id: 1, name: COMMON_SIGNUP_LABELS.MALE },
    { id: 2, name: COMMON_SIGNUP_LABELS.FEMALE },
    { id: 3, name: COMMON_SIGNUP_LABELS.OTHERS }
]