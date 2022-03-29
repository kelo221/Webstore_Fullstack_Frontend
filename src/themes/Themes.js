import {createTheme} from "@mui/material/styles";

//https://coolors.co/b8d8ba-d9dbbc-fcddbc-ef959d-69585f
const ThemeLight = createTheme({

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#FCDDBC",
                }
            }
        }
    },

    palette: {
        primary: {
            main: '#EF959D',
        },
        secondary: {
            main: '#E4E3E9',
        },
        common: {
            main: '#B8D8BA'
        },
        background: {
            main: '#FCDDBC'
        },
        action: {
            main: '#D9DBBC'
        },
    },
});


//https://coolors.co/484a4a-3b3b3b-222120-83837e-7a7070
const ThemeDark = createTheme({

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#83837E",
                }
            }
        }
    },


    palette: {
        primary: {
            main: '#484A4A',
        },
        secondary: {
            main: '#9590A8',
        },
        common: {
            main: '#222120'
        },
        background: {
            main: '#83837E'
        },
        action: {
            main: '#989898'
        },
    },
});



const Themes = {
    ThemeLight,
    ThemeDark,
}

export default Themes;