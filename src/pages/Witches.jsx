// Libraries
import React, { useContext, useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// Components
import User from "../components/User";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
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
    large: {
        width: "200px",
        height: "200px",
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
    // const { user, dispatch } = useContext(userContext);
    // const [formData, setFormData] = useState({});
    // const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            //     if (!_.isEmpty(user)) {
            //         console.log("user:", user);
            //         setFormData(user);
            //         setLoading(false);
            // }
        },
        []
        // [user]
    );

    // const handleChange = (event, type) => {
    //     // switch (type) {
    //     //     case "name":
    //     //         setFormData(
    //     //             Object.assign({}, formData, { name: event.target.value })
    //     //         );
    //     //         break;
    //     //     case "surname":
    //     //         setFormData(
    //     //             Object.assign({}, formData, { surname: event.target.value })
    //     //         );
    //     //         break;
    //     //     case "avatar":
    //     //         let file = event.target.files[0];
    //     //         let reader = new FileReader();
    //     //         reader.onloadend = () => {
    //     //             console.log("image changed");
    //     //             setFormData(
    //     //                 Object.assign({}, formData, {
    //     //                     avatar: reader.result,
    //     //                 })
    //     //             );
    //     //         };
    //     //         reader.readAsDataURL(file);
    //     //         break;
    //     //     default:
    //     //         break;
    //     // }
    // };
    // const changeUserData = (event) => {
    //     event.preventDefault();
    //     UserService.updateUser(formData._id, formData)
    //         .then((response) => {
    //             if (response.errors) {
    //                 console.log(response.errors);
    //             } else {
    //                 setFormData(response);
    //                 dispatch({ type: "saveUser", userData: response });
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h3">Hexenschwestern</Typography>
                <a
                    href="https://drive.google.com/file/d/0By9JKH_OQiqEYkVZY2I5U0dodHM/view?usp=sharing"
                    rel="noopener oreferrer"
                    target="_blank">
                    Adressenliste
                </a>
                <div id="allWitches" className={classes.witches}>
                    {/* Add map od all users avatars */}{" "}
                    <Avatar
                        alt="user name"
                        // src={formData.avatar}
                        className={classes.small}
                    />
                    <Avatar
                        alt="user name"
                        // src={formData.avatar}
                        className={classes.small}
                    />
                    <Avatar
                        alt="user name"
                        // src={formData.avatar}
                        className={classes.small}
                    />
                    <Avatar
                        alt="user name"
                        // src={formData.avatar}
                        className={classes.small}
                    />
                </div>
            </Paper>
            <User />
        </div>
    );
}
