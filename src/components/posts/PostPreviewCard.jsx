// Libraries
import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Avatar from "@material-ui/core/Avatar";

// Components
// Services


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
        width: "22%"
    },
    avatar: {
        width: "20px",
        height: "20px",
    },
    link: {
        textDecoration: "none"
    },
    comments: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-end",
    },
});

export default function PostPreviewCard({post, categoryId}) {
    const classes = useStyles();
   
   
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.infoBox}>
                        <Typography align="left" variant="body2" component="p" >
                            Post by 
                        </Typography>
                        <Avatar className={classes.avatar} src={post.createdBy.avatar}></Avatar>
                        <Typography align="left" variant="body2" component="p">
                             {post.createdBy.name}
                        </Typography>
                    </div>
                    <div className={classes.infoBox}>
                        {" "}
                        <CalendarTodayIcon />
                        <Typography align="left" variant="body2" component="p">
                            {moment(post.createdAt).format(`DD.MM.YY, HH:MM`)} Uhr
                        </Typography>
                    </div>
                </div><Link className={classes.link} to={`/categories/${categoryId}/post/${post.id}`}>

                <Typography
                    align="center"
                    variant="h4"
                    color="textPrimary"
                    gutterBottom>
                   {post.title}
                </Typography>
                </Link>

                <div className={classes.comments}>
                    <div className={classes.infoBox}>
                        {" "}
                        <ChatBubbleOutlineIcon />
                        <Typography align="left" variant="body2" component="p">
                            {post.comments.total} Kommentare
                        </Typography>
                    </div>
                    {post.comments.lastBy.avatar?
                    <div className={classes.infoBox}>
                        {" "}
                        <Typography align="left" variant="body2" component="p">
                            Letzter von
                        </Typography>
                         <Avatar className={classes.avatar} src={post.comments.lastBy.avatar}></Avatar>
                         <Typography align="left" variant="body2" component="p">
                            {post.comments.lastBy.name}
                        </Typography>
                         </div>
                       : ""}
                   {post.comments.date ?
                    <div className={classes.infoBox}>
                        <CalendarTodayIcon />
                        <Typography align="left" variant="body2" component="p">
                        {moment(post.comments.date).format(`DD.MM.YY, HH:MM`)} Uhr
                        </Typography>
                    </div> : ""}
                </div>
            </CardContent>
        </Card>
    );
}
