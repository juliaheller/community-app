// Libraries
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Components
import User from "../../components/user/User";

// Redux
// import {getUser} from '../redux/user/user.actions';
// import store from "../redux/store";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
});

export default function Profile() {
    const classes = useStyles();
    const {me} = useSelector(state => state.auth);
  
    return (
        <div className={classes.root}>
             <Typography style={{ color: "#1C304A" }} variant="h2">
                           Mein Profil
                        </Typography>
            <User user={me}></User>
        </div>
    );
}
