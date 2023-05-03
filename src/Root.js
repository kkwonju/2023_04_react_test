import { ThemeProvider, CssBaseline, createTheme } from "@emotion/react";
import App from "./App";

export default function Root() {

    const theme = createTheme({
        typography: {
            fontFamily: ["GmarketSansMedium"]
        },
        palette: {
            primary: {
                main: '#f50057',
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

ReactDOM.render(<Root />, document.getElementById("root"));