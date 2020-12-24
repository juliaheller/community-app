import React, { Profiler, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// Components
import AppBar from "../src/components/menu/AppBar";
import { ProtectedRoute } from "../src/components/ProtectedRoute";

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
import Profile from "./pages/forum/Profile";

// Redux
import { loginFromLocalStorage } from "../src/redux/auth/auth.actions";
import store from "../src/redux/store";

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
	store.dispatch(loginFromLocalStorage());
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<AppBar></AppBar>
					<Switch>
						<Route path="/login" component={Login}></Route>
						<ProtectedRoute path="/witches" component={Witches} />
						<ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
						<ProtectedRoute path="/events" component={Events}></ProtectedRoute>
						<ProtectedRoute
							path="/messages"
							component={Messages}
						></ProtectedRoute>
						<ProtectedRoute path="/photos" component={Photos}></ProtectedRoute>
						<ProtectedRoute
							path="/bookofshadows"
							component={BookOfShadows}
						></ProtectedRoute>
						<ProtectedRoute path="/forum" component={Forum}></ProtectedRoute>
						<ProtectedRoute
							path="/profile"
							component={Profile}
						></ProtectedRoute>
						<ProtectedRoute
							path="/categories/:id"
							component={Category}
						></ProtectedRoute>
						<ProtectedRoute path="/post/:id" component={Post}></ProtectedRoute>
						<Route path="*" component={() => "404 Page not found"} />
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
