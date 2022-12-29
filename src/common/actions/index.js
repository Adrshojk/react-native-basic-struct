import * as navigation from './navigation';

export { navigation };

export function action(type, payload = {}) {
    return { type, payload: { ...payload } };
}

export const types = {
    ROUTE_CHANGED: 'Common/ROUTE_CHANGED',
    LOG_OUT: 'Common/LOG_OUT',
    TOKEN_EXPIRED: 'Common/TOKEN_EXPIRED',
    REFRESH_TOKEN_API_REQUEST: 'Common/REFRESH_TOKEN_API_REQUEST',
    REFRESH_TOKEN_API_SUCCESS: 'Common/REFRESH_TOKEN_API_SUCCESS',
    REFRESH_TOKEN_API_FAILED: 'Common/REFRESH_TOKEN_API_FAILED',
    API_REQUEST: 'Common/API_REQUEST',
    API_SUCCESS: 'Common/API_SUCCESS',
    API_FAILED: 'Common/API_FAILED'
};

export function routeChanged(name) {
    return action(types.ROUTE_CHANGED, { name });
}
