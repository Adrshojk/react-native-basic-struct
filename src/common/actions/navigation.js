import { DrawerActions } from '@react-navigation/native';

export const types = {
    NAVIGATE: 'Navigation/NAVIGATE',
    NAVIGATE_WITH_RESET: 'Navigation/NAVIGATE_WITH_RESET',
    NAVIGATE_BACK: 'Navigation/NAVIGATE_BACK',
};

export function navigate(name, params) {
    return {
        type: types.NAVIGATE,
        payload: { name, params },
    };
}

export function navigateBack() {
    console.log("in navigateBack action")
    return {
        type: types.NAVIGATE_BACK,
    };
}

export function navigateWithReset(name, params) {
    return {
        type: types.NAVIGATE_WITH_RESET,
        payload: { name, params },
    };
}

export function toggleDrawer() {
    return DrawerActions.toggleDrawer();
}
