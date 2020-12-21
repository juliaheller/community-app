import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PostPreviewCard from "../../components/posts/PostPreviewCard";
import Button from "@material-ui/core/Button";
import categoryService from "../../services/category.service";
import { useParams } from "react-router-dom";

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
        justifySelf: "flex-end",
    },
});

export default function Category() {
    const classes = useStyles();
    const [category, setCategory] = useState({});
 let {id} = useParams();

    useEffect(() => {
        const fetchCategories = async () => {
            const oneCategory = await categoryService.getOne(id);
            setCategory(oneCategory);
            console.log(category);
        };
        fetchCategories();
    }, []);
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h3" component="h3">
                    {category.name}
                </Typography>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary">
                    + Neuer Beitrag
                </Button>
                <PostPreviewCard></PostPreviewCard>
                <Divider />
            </Paper>
        </div>
    );
}
