// Libraries
import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

// Material UI
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// Components
import PostCard from "../../components/posts/PostCard";

// Services
import categoryService from "../../services/category.service";
import postsService from "../../services/posts.service";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "100px",
    },
    paper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        height: "100%",
        width: "100%",
        color: "#5B6489",
    },
}));

//Add navigation tabs

export default function Post(params) {
    const classes = useStyles();
    let {id, categoryId} = useParams();
    const [category, setCategory] = useState({});
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const oneCategory = await categoryService.getOneCategory(categoryId);
            setCategory(oneCategory);
            const onePost = await postsService.getOnePost(id, categoryId)
            setPost(onePost)
        }
        fetchPosts();
    }, [id, categoryId]);


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            
                <PostCard post={post} categoryId={category.id}/>
                
            </Paper>
        </div>
    );
}
