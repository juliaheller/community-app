// Libraries
import React, {useEffect} from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

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
            <User user={me}></User>
        </div>
    );
}
