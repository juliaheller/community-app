import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles({
    root: {
        minWidth: "300px",
        maxWidth: "80%",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },

    info: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-start",
    },
    infoBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    comments: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-end",
    },
});

export default function PostPreviewCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.infoBox}>
                        <Typography align="left" variant="body2" component="p">
                            Post by
                        </Typography>
                        <PersonOutlineIcon />
                        <Typography align="left" variant="body2" component="p">
                            User
                        </Typography>
                    </div>
                    <div className={classes.infoBox}>
                        {" "}
                        <CalendarTodayIcon />
                        <Typography align="left" variant="body2" component="p">
                            12 March 2018, 1:46PM
                        </Typography>
                    </div>
                </div>
                <Typography
                    align="center"
                    variant="h4"
                    color="textPrimary"
                    gutterBottom>
                    Title of the post
                </Typography>

                <div className={classes.comments}>
                    <div className={classes.infoBox}>
                        {" "}
                        <ChatBubbleOutlineIcon />
                        <Typography align="left" variant="body2" component="p">
                            Comments: 5
                        </Typography>
                    </div>
                    <div className={classes.infoBox}>
                        {" "}
                        <Typography align="left" variant="body2" component="p">
                            Last by
                        </Typography>
                        <PersonOutlineIcon />
                        <Typography align="left" variant="body2" component="p">
                            User XZ
                        </Typography>
                    </div>
                    <div className={classes.infoBox}>
                        <CalendarTodayIcon />
                        <Typography align="left" variant="body2" component="p">
                            12 March 2018, 2:46PM
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
