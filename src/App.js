import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// Components
import MiniDrawer from "./components/MiniDrawer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Events from "./pages/Events";
import BookOfShadows from "./pages/BookOfShadows";
import Messages from "./pages/Messages";
import Photos from "./pages/Photos";
import Forum from "./pages/forum/Forum";
import Login from "./pages/Login";
import Witches from "./pages/Witches.jsx";
import Category from "./pages/forum/Category";
import Post from "./pages/forum/Post";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: "#1C304A",
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: "#613291",
            main: "#660099",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#FFFFFF",
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <MiniDrawer></MiniDrawer>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/witches" component={Witches}></Route>
                        <Route path="/events" component={Events}></Route>
                        <Route path="/messages" component={Messages}></Route>
                        <Route path="/photos" component={Photos}></Route>
                        <Route
                            path="/bookofshadows"
                            component={BookOfShadows}></Route>
                        <Route path="/forum" component={Forum}></Route>
                        <Route
                            path="/category/:id"
                            component={Category}></Route>
                        <Route path="/post/:id" component={Post}></Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
