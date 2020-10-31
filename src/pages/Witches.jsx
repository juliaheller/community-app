// Libraries
import React, { useContext, useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ContactMailIcon from "@material-ui/icons/ContactMail";

// Components
import User from "../components/user/User";
import UserTable from "../components/user/UserTable.jsx";

// Services

import userService from "../services/user.service";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
        color: "#5B6489",
    },
    paper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        height: "100%",
        // maxHeight: "500px",
        // minHeight: "500px",
    },
    small: {
        width: "100px",
        height: "100px",
    },
    large: {
        width: "200px",
        height: "200px",
    },
    contactList: {
        display: "flex",
        alignContent: "center",
        padding: "16px",
    },
    contactLink: {
        textDecoration: "none",
        color: "#1C304A",
    },
    witches: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    form: {
        display: "flex",
        // flexDirection: "column",
        padding: "16px",
        flexWrap: "wrap",
        margin: "16px",
        width: "100%",
        height: "500px",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    input: {
        display: "none",
        width: "100%",
        // visibility: "hidden",
        // height: "50px",
        borderBottom: "1px solid darkgrey",
        textAlign: "center",
        height: "100%",
    },
    btns: {
        display: "flex",
        justifyContent: "space-between",
    },
});
export default function Witches() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await userService.getAll();
            const oneUser = await userService.getOne();
            setUsers(allUsers);
            setUser(oneUser);
        };
        fetchUsers();
    }, []);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography style={{ color: " #1C304A" }} variant="h3">
                    Hexen
                </Typography>
                <Typography variant="h5" className={classes.contactList}>
                    <ContactMailIcon
                        style={{
                            padding: "1px",
                            height: "30px",
                            width: "40px",
                            color: "#1C304A",
                        }}
                    />
                    Adressenliste
                </Typography>

                <UserTable user={user} users={users} />

                <div id="allWitches" className={classes.witches}>
                    {users.map((user) => {
                        return (
                            <Avatar
                                alt={user.surname + user.name}
                                src={user.avatar}
                                className={classes.small}
                                key={user.id}
                            />
                        );
                    })}
                </div>
            </Paper>
            {user.id ? <User user={user} /> : ""}
        </div>
    );
}
