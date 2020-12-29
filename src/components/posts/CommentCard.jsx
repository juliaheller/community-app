import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Avatar from "@material-ui/core/Avatar";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles({
    root: {
        minWidth: "300px",
        maxWidth: "100%",
        marginTop: "50px",
        color: "#5B6489",
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
        width: '30%'
    },
    comments: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-end",
    },
});

export default function CommentCard({comment}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.infoBox}>
                        <ChatBubbleOutlineIcon />
                        <Typography align="left" variant="body2" component="p">
                            Comment by
                        </Typography>
                       {comment.createdBy.avatar? <Avatar className={classes.avatar} src={comment.createdBy.avatar}></Avatar>
                       : <PersonOutlineIcon />}
                        <Typography align="left" variant="body2" component="p">
                            {comment.createdBy.name}
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
                <div className={classes.comments}>
                   
                        <Typography align="left" variant="body2" component="p">
                           {comment.comment} 
                        </Typography>
    
                </div>
            </CardContent>
        </Card>
    );
}
