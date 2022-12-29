import { Platform } from 'react-native'

export default {
    iconFontSize: Platform.OS === 'ios' ? 30 : 28,

    toolbarHeight: Platform.OS === 'ios' ? 64 : 56,
}