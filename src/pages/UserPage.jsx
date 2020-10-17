// Libraries
import React, { useContext, useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
});
export default function UserPage() {
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
                <Avatar
                    alt="user name"
                    // src={formData.avatar}
                    className={classes.large}
                />

                <input
                    id="contained-button-file"
                    accept="image/*"
                    className={classes.input}
                    type="file"
                    // onChange={(event) => {
                    //     handleChange(event, "avatar");
                    // }}
                />
                {/* {user.avatar ? (
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                style={{
                                    backgroundColor: "#3788d8",
                                }}>
                                Change profile picture
                            </Button>
                        </label>
                    ) : (
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                style={{
                                    backgroundColor: "#3788d8",
                                }}>
                                Add profile picture
                            </Button>
                        </label>
                    )} */}
                <Typography variant="h3">
                    {/* {user.name + " " + user.surname} */}
                </Typography>
                <Typography variant="subtitle1">
                    {/* Joined: {moment(user.createdAt).format("MMMM DD, YYYY")} */}
                </Typography>
            </Paper>
            <Paper className={classes.paper}>
                <form
                    className={classes.form}
                    // onSubmit={changeUserData}
                >
                    <TextField
                        id="name"
                        type="text"
                        label="Name"
                        // value={formData.name}
                        variant="outlined"
                        // onChange={(event) =>
                        //     handleChange(event, "name")}
                    ></TextField>
                    <TextField
                        label="Surname"
                        id="surname"
                        type="text"
                        // value={formData.surname}
                        variant="outlined"
                        // onChange={(event) =>
                        //     handleChange(event, "surname")
                        // }
                    ></TextField>
                    <TextField
                        id="email"
                        // label={formData.email}
                        variant="outlined"
                        disabled></TextField>
                    <div className={classes.btns}>
                        <Button
                            style={{
                                alignSelf: "flex-end",
                                fontSize: "13px",
                                margin: "16px",
                            }}
                            color="secondary">
                            delete account
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{
                                backgroundColor: "#3788d8",
                                margin: "16px",
                                width: "150px",
                                alignSelf: "flex-end",
                                color: "white",
                            }}
                            className={classes.submit}>
                            Save
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
}
