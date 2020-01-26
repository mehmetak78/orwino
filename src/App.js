import React from 'react';
import {Provider} from "react-redux"
import reduxStore from "./redux/store"
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import ContainerMAK from "./components/common/ContainerMAK";

import MiddlePage from "./layout/MiddlePage";
import BottomBar from "./layout/BottomBar";
import './App.css';
import LeftMenu from "./layout/LeftMenu";

import Home from "./pages/Home";
import TopMenu from "./layout/TopMenu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        marginTop: "1px",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function App() {
    const theme = createMuiTheme({

                                     palette: {
                                         type: "light",
                                         primary: {
                                             main: '#2e7d32',
                                             light: "#2e7d32",
                                             dark: "#2ead32",
                                             contrastText: "#fff"
                                         },
                                         secondary: {
                                             main: '#388e3c',
                                             light: "#ff4081",
                                             dark: "#38be3c",
                                             contrastText: "#fff"
                                         },
                                         text: {
                                             primary: '#2e7d32',
                                             secondary: "#388e3c",
                                             disabled: "rgba(0, 0, 0, 0.38)",
                                             hint: "rgba(0, 0, 0, 0.38)"
                                         },
                                     },
                                     typography: {
                                         useNextVariants: true,
                                         fontSize: 12,

                                         button: {
                                             fontSize: 14,
                                             fontWeight: 700,
                                             textTransform: "none"
                                         },
                                         h1: {
                                             fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif"',
                                             fontWeight: 600,
                                             fontSize: "2rem",
                                             lineHeight: 1,
                                             letterSpacing: "-0.01562em"
                                         }
                                     }
                                 });
    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <div className="App">
                        <div className="TopMenu">
                            <TopMenu/>
                        </div>
                        <Grid container spacing={1} className={classes.grid}>
                            <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
                                <Paper className={classes.paper}><LeftMenu/></Paper>
                            </Grid>
                            <Grid item xs={6} sm={7} md={8} lg={9} xl={10}>
                                <Paper className={classes.paper}><MiddlePage/></Paper>
                            </Grid>
                        </Grid>
                        <div className="TopMenu">
                            <BottomBar/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
