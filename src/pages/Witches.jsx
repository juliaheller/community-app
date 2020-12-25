// Libraries
import React, { useState, useEffect } from "react";

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


// Redux
import { useSelector } from 'react-redux';
import {getUser} from '../redux/user/user.actions';
import store from "../redux/store";



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
        marginBottom: "-6px",
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
    status: {
        display: "inline-block",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        marginRight: "6px",
    },
    online: {
        background: "#aed581",
    },
    offline: {
        background:"#f4511e",
    },
    form: {
        display: "flex",
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
     const [isOnline, setIsOnline] = useState(false);
    const {user} = useSelector(state =>state.user);
    const {me} = useSelector(state => state.auth);

    const selectUser = async (id) => {
        try {
            await store.dispatch(getUser(id));       
       } catch (error) {     
           console.warn(error)
       }
    }
   
    useEffect(() => {
       if(me.id) {
           selectUser(me.id)
        };      
        const fetchUsers = async () => {
            const allUsers = await userService.getAll();     
            setUsers(allUsers);
        };
        fetchUsers();
        
    }, [me.id]);

    

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

                <UserTable users={users} />

                <div id="allWitches" className={classes.witches}>
                    {users.map((user) => {
                      
                        return (
                            <div key={user.id} onClick={() => {selectUser(user.id)}}>
                                <Avatar
                                    alt={user.surname + user.name}
                                    src={user.avatar}
                                    className={classes.small}
                                    
                                />
                                    <div className={isOnline ? `${classes.online} ${classes.status}` : `${classes.offline} ${classes.status}`}></div>
                                
                            </div>
                        );
                    })}
                </div>
            </Paper>
            {user.id ? <User user={user} /> : ""}
        </div>
    );
}
