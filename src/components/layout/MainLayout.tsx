import { createContext, useContext, useState, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ChurchIcon from "@mui/icons-material/Church";
import GradeIcon from "@mui/icons-material/Grade";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Divider, Typography } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MainLayout = function () {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <>
            <Box
                sx={{
                    height: "1rem",
                    background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,127,153,1) 100%);",
                    marginBottom: "0.5rem",
                }}
            ></Box>
            <Container maxWidth="lg">
                <Grid container spacing={1} marginTop={1} marginBottom={2}>
                    <Grid container item xs={6}>
                        <Link to="/lifestyle">
                            <Button size="large" startIcon={<InfoIcon />}>
                                About
                            </Button>
                        </Link>
                        <Button size="large" startIcon={<ChurchIcon />}>
                            Fellowship Church
                        </Button>
                        <Button size="large" startIcon={<MenuBookIcon />}>
                            Other Resources
                        </Button>
                    </Grid>
                    <Grid container item xs={6} justifyContent={"flex-end"}>
                        <Link to="/lifestyle">
                            <Button size="large" startIcon={<GradeIcon />}>
                                My Saved Articles
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Box>
                    <Typography
                        variant="h1"
                        component="h1"
                        textAlign={"center"}
                        marginBottom={"1.5rem"}
                    >
                        <Link to="/">
                            Hermeneutic Questions & Answers by Fellowship Church
                            GTA
                        </Link>
                    </Typography>
                    <Grid container justifyContent={"center"} spacing={1}>
                        <Grid item>
                            <Link to="/lifestyle">
                                <Button variant="contained" size="large">
                                    Lifestyle
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
                            <Link to="/jesus">
                                <Button variant="contained" size="large">
                                    Jesus
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
                            <Link to="/christianity">
                                <Button variant="contained" size="large">
                                    Christianity
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
            <Box
                sx={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,127,153,1) 100%);",
                    marginTop: "1rem",
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: "white",
                        fontFamily: "'Bebas Neue', sans-serif",
                    }}
                >
                    &copy; Fellowship Church GTA {new Date().getFullYear()}
                </Typography>
            </Box>
        </>
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
                    primary: {
                        main: "#1c57b4",
                        contrastText: "#fff",
                    },
                    secondary: {
                        main: "#040057",
                        contrastText: "#fff",
                    },
                },
                components: {
                    MuiButtonBase: {
                        defaultProps: {
                            disableRipple: true,
                        },
                    },
                },

                typography: {
                    fontFamily: "'Poppins', sans-serif;",
                    h1: {
                        fontSize: "2.4rem",
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: mode === "light" ? "#060087" : "#fff",
                    },
                    h2: {
                        fontSize: "2rem",
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: mode === "light" ? "#060087" : "#fff",
                    },
                    h3: {
                        fontSize: "1.6rem",
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: mode === "light" ? "#1c57b4" : "#fff",
                    },
                    body1: {
                        fontSize: "1.1rem",
                        fontWeight: "400",
                    },
                    subtitle1: {
                        color: mode === "light" ? "#4e4e4e" : "#fff",
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
