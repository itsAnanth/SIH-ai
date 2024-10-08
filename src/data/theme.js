export const blueThemeLight = {
    type: 'light',
    primary: '#3246c2',
    secondary: '#667aff',
    tertiary: '#5565d4',
    bg: '#ccc',
    text: 'white',
    bg50: '#e6e9ff50',
    tertiary50: '#7386ff50',
    secondary50: '#667aff50',
    lightbg: '#6c7be0',
    lightText: '#1f1d1d'

}

export const darkTheme = {
    type: 'dark',
    primary: '#202225',
    secondary: '#292b2f',
    tertiary: '#2f3136',
    bg: '#40444b',
    lightbg: '#40444b',
    text: 'white',
    secondary50: '',
    tertiary50: '',
    bg50: '',
    lightText: 'white'

}

const type = {
    light: {
        blueThemeLight
    }
};

const all = {
    blueThemeLight,
    darkTheme
}

export { type, all };