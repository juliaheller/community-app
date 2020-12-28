// Libraries
import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import parse from 'html-react-parser';

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CommentCard from "./CommentCard";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

// Redux
import { useSelector } from 'react-redux';
import store from "../../redux/store";
import { updatePost } from "../../redux/posts/post.actions";
import {addComment, getAllComments} from "../../redux/comments/comment.actions"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80%",
        color: "#5B6489",
        display: "flex",
        flexDirection: "column",
    },
    cardContent: {
        display: "block",
        alignSelf: "flex-start",
        textAlign: "left"
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
    editor: {
        width: "100%"
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
    const [postData, setPostData] = useState(post);
    const [newComment, setNewComment] = useState("");
    const [showInput, setShowInput]= useState(false);
    const [createdBy, setCreatedBy] = useState({});
    const {me} = useSelector(state => state.auth);
    const [comments, setComments] = useState([]);

    const [modules] = useState({
        toolbar: [
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          [{ 'align': [] }],
          [{ 'color': [] }, { 'background': [] }],
          ['clean']
        ]
    })
    const [formats] = useState([
        'font',
        'size',
        'bold', 'italic', 'underline',
        'list', 'bullet',
        'align',
        'color', 'background'
      ])
    

    const rteChange = (content, delta, source, editor) => {
        setPostData( Object.assign({}, postData, { content: editor.getHTML() }))
    }

    const handlePicChange =  (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setPostData({...post, image: reader.result});    
        };
        reader.readAsDataURL(file);
      
    };

    const handleChangeText = (event) => {
        setPostData( Object.assign({}, postData, { title: event.target.value }))
}

    const edit = () => setShowInput(true);

    useEffect(() => {
        
            setPostData(post);
            setCreatedBy(postData.createdBy)   
    }, [post, postData.createdBy]);

    const submitPost= async (event) => { 
        event.preventDefault();     
        try {
            await store.dispatch(updatePost(postData, post.id, categoryId));    
            setShowInput(false);  
       } catch (error) {     
           console.warn(error)
       }
        
    }

    const changeComment = (event) => {
        setNewComment(event.target.value);
        
         
    }

    const submitComment = async (event) => {
        event.preventDefault();
       
        try {
            await store.dispatch(addComment(newComment, post.id, categoryId));  
            setNewComment("");   
       } catch (error) {     
           console.warn(error)
       }

    }

    useEffect( () => {
        const fetchComments = async () => {
            try {
                if(post.id){
                const commentsList = await store.dispatch(getAllComments(post.id, categoryId));  
                console.log(commentsList);
               setComments(commentsList)
            }
            } catch (error) {     
                console.warn(error)
            }
        };
        fetchComments();
        
    }, [post.id, categoryId])

    return (
        <Card className={classes.root}>
            <div className={classes.infoBox}>
                {" "}
                <CalendarTodayIcon />
                <Typography align="left" variant="body2" component="p">
                    12 March 2018, 1:46PM
                </Typography>
            </div>
            {createdBy ? 
            <CardHeader
                avatar={<Avatar className={classes.avatar} src={createdBy.avatar}></Avatar>}
                title={ <Typography align="left" variant="body2" component="p">
               {createdBy.name} {createdBy.surname}
            </Typography>}
            /> :
            <CardHeader
                avatar={<Avatar className={classes.avatar} ></Avatar>}
            />}
           
            <form className={classes.form} onSubmit={submitPost}>
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
             </div>}                 
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
           
            :  <label className={classes.label} htmlFor="contained-button">
           {me.id === createdBy?.id ? 
           <Button
                variant="contained"
                color="default"
                component="span"
                className={classes.btn}
                >
                <EditIcon></EditIcon>
            </Button> : "" }    
        </label>
            }
             <input
        id="contained-button"
        accept="image/*"
        className={classes.input}
        type="file"
        onChange={handlePicChange}/>
            {showInput ?  
            <ReactQuill className={classes.editor} theme="snow"  modules={modules}
            formats={formats} onChange={rteChange}
            value={postData.content || ''}/>
            : 
            <CardContent className={classes.cardContent}>
              {parse(String(postData.content))}
            </CardContent> 
              }
              {me.id === createdBy?.id ?  <Button
                variant="contained"
                color="default"
                component="span"
                className={classes.btn}
                onClick={edit}
                > BEITRAG bearbeiten
               <EditIcon></EditIcon>
            </Button>: ''}
            {showInput ?  <Button  className={classes.submitBtn} variant="contained" color="primary" type="submit">
                Beitrag aktualisieren
            </Button> : ""}
            
            </form>
            
            <CardActions className={classes.actions}>
          <ChatBubbleOutlineIcon />
          
            </CardActions>
            <Divider />
          
                <TextField id="outlined-basic" label="Kommentieren" variant="outlined" value={newComment} onChange={changeComment}></TextField>
            <Button   variant="contained" color="primary" type="submit" onClick={submitComment}>
                Kommentar abschicken
            </Button>
            
          {comments ? comments.map(comment => { 
           return <CommentCard comment={comment} key={comment.id}/>})  
        : ""}
        
        </Card>
    );
}
