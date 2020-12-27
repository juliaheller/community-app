// Libraries
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CommentCard from "./CommentCard";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";


// Services
import postsService from "../../services/posts.service";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80%",
        color: "#5B6489",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100%"
    },

    avatar: {
        backgroundColor: red[500],
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: "6px",
        justifyContent: "flex-start",
        alignContent: "flex-end",
        alignItems: "flex-end",
        color: "#5B6489",
        width: "100%"
    },
    infoBox: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "50%",
        marginRight: 0,
        float: "right",
    },
    actions: {
        float: "right",
    },

  input: {
    display: "none",
    width: "100%",
    height: "50px",
    borderBottom: "1px solid darkgrey",
    textAlign: "center",
},
    label: {
    display: "flex",
    justifyContent: "center",
    },
    titleBox: {
        display: "flex",
        justifyContent: "space-between",
        width: "65%",
        justifySelf: "flex-end"
    },
    textField: {
        fontSize: "20px",
        width: "100%",
        textAlign: "center"
    },
    btn: {
    
        color: "#1C304A",
        display: "flex",
        justifyContent: "space-between",
      
    },
    submitBtn: {
        width: "20%",
        marginTop: "50px"
    },
}));

export default function PostCard({post, categoryId}) {
    const classes = useStyles();
    const [postData, setPostData] =useState(post);
    const [showInput, setShowInput]=useState(false);
    
    const handlePicChange =  (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log("image changed");//
            setPostData({...post, image: reader.result});    
        };
        reader.readAsDataURL(file);
      
    };

    const handleChangeText = (event, type) => {
        switch (type) {
            case "title":
                setPostData(
                    Object.assign({}, postData, { title: event.target.value })
                );
                break;
            case "content":
                setPostData(
                    Object.assign({}, postData, {
                        content: event.target.value,
                    })
                );
                break;
                default:
                break;
    
    }
}

    const edit = () => setShowInput(true);

    useEffect(() => {
            setPostData(post);    
    }, [post]);

    const updatePost= async () => {
        await postsService.updatePost(postData, post.id, categoryId);
        setShowInput(false);
    }

    return (
        <Card className={classes.root}>
            <div className={classes.infoBox}>
                {" "}
                <CalendarTodayIcon />
                <Typography align="left" variant="body2" component="p">
                    12 March 2018, 1:46PM
                </Typography>
            </div>
            <CardHeader
                avatar={<Avatar className={classes.avatar}></Avatar>}
            />
            <form className={classes.form} onSubmit={updatePost}>
                {showInput ?  
                <TextField
                className={classes.textField}
                id="title"
                name="title"
                label="Titel"
                type="text"
                variant="outlined"
                value={postData.title}
                size="medium"
                onChange={(event) => handleChangeText(event, "title")}
            />: <div className={classes.titleBox}> <Typography style={{ color: " #1C304A" }} variant="h3">
            {postData.title} 
             </Typography> 
             <Button
                variant="contained"
                color="default"
                component="span"
                className={classes.btn}
                onClick={edit}
                >
               <EditIcon></EditIcon>
            </Button></div>}                 
            {postData.image !== "" 
            ? <CardMedia
                className={classes.media}
                image={postData.image}
                title="Post Bild"> 
                <label className={classes.label} htmlFor="contained-button">
                    <Button
                        variant="contained"
                        color="default"
                        component="span"
                        className={classes.btn}
                        >
                    Bild bearbeiten <EditIcon></EditIcon>
                    </Button>      
                </label>
            </CardMedia>
           
            : ""
            }
             <input
        id="contained-button"
        accept="image/*"
        className={classes.input}
        type="file"
        onChange={handlePicChange}/>
            {showInput ?  
                <TextField
                className={classes.textField}
                id="content"
                name="content"
                label="Inhalt"
                type="text"
                variant="outlined"
                value={postData.content}
                size="medium"
                multiline
                onChange={(event) => handleChangeText(event, "content")}
            />: <CardContent>
              {postData.content}
             
            </CardContent>   }
     
            <Button
                variant="contained"
                color="default"
                component="span"
                onClick={edit}
            
                >
               <EditIcon></EditIcon>
            </Button>
             <Button  className={classes.submitBtn} variant="contained" color="primary" type="submit">
                Beitrag aktualisieren
            </Button>
            </form>
            
            <CardActions className={classes.actions}>
            <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<ChatBubbleOutlineIcon />}
            > Kommentieren
            </Button>
            </CardActions>
            <Divider />
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </Card>
    );
}
