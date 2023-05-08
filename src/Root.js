import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";

export default function Root() {
    const theme = createTheme({
        typography: {
            fontFamily: ["GmarketSansMedium"]
        },
        palette: {
            primary: {
                main: '#ff80ab',
                contrastText: 'white',
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
}