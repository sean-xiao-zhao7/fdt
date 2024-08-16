import { createContext, useContext, useState, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MainLayout = function () {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Container maxWidth="lg" sx={{ padding: "2% 0" }}>
            <Box>
                <Typography
                    variant="h1"
                    component="h1"
                    textAlign={"center"}
                    marginBottom={"2rem"}
                >
                    <Link to="/">Hermeneutic Questions & Answers by Jamey</Link>
                </Typography>
                <Grid container justifyContent={"center"} spacing={1}>
                    <Grid item>
                        <Link to="/faith-doubt">
                            <Button variant="contained" size="large">
                                Faith & Doubt
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/salvation">
                            <Button variant="contained" size="large">
                                Salvation
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/relationships">
                            <Button variant="contained" size="large">
                                Relationships
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/old-testament">
                            <Button variant="contained" size="large">
                                Old Testament
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/early-church">
                            <Button variant="contained" size="large">
                                Early Church
                            </Button>
                        </Link>
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
                <Box sx={{ padding: "1rem 0" }}>
                    <Outlet />
                </Box>
            </Box>
        </Container>
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
                        fontWeight: "400",
                    },
                    h2: {
                        fontSize: "1.6rem",
                        fontWeight: "400",
                        textAlign: "center",
                    },
                    body1: {
                        fontSize: "1.1rem",
                        fontWeight: "400",
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
