// Libraries
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Material UI
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// Components
import PostPreviewCard from "../../components/posts/PostPreviewCard";

// Services
import categoryService from "../../services/category.service";
import postsService from "../../services/posts.service";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
    paper: {
        display: "flex",
        marginTop: 50,
        flexWrap: "wrap",
        justifyContent: "center",
    },
    button: {
        float: "right",
    },
    postPreviews: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
    },
});

export default function Category() {
    const classes = useStyles();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        async function fetchPosts() {
            const oneCategory = await categoryService.getOneCategory(id);
            setCategory(oneCategory);
            const allPosts = await postsService.getAllPosts(id)
            setPosts(allPosts)
        }
        fetchPosts();
    }, [id]);


    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h3" component="h3">
                    {category.name}
                </Typography>
                <Link className={classes.link} to={`/categories/${category.id}/newpost`}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary">
                    + Neuer Beitrag
                </Button>
                </Link>
                <div className={classes.postPreviews}>
                   { posts.map( post => {
                 return  ( <div key={post.id}>
                 <PostPreviewCard post={post} categoryId={id}></PostPreviewCard><Divider/></div>)
                }
                    )
                    }
                    
                </div>
                
            </Paper>
        </div>
    );
}
