import { createContext, useContext, useState, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MainLayout = function () {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Grid container justifyContent="center">
            <Box>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button variant="contained" size="large">
                            <Link to="/dashboard-home">Dashboard</Link>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="large">
                            <Link to="/datatable-home">Datatable</Link>
                        </Button>
                    </Grid>
                    <Grid item>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            color="inherit"
                        >
                            {theme.palette.mode === "dark" ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Grid>
                </Grid>
                <Outlet />
            </Box>
        </Grid>
    );
};

export default function ToggleColorMode() {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                components: {
                    MuiButtonBase: {
                        defaultProps: {
                            disableRipple: true,
                        },
                    },
                },
                typography: {
                    h1: {
                        fontSize: "1.8rem",
                    },
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainLayout />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
