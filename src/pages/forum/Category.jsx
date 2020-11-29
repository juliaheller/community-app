import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { categories } from "../../mocks/categories";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PostPreviewCard from "../../components/posts/PostPreviewCard";

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
});

export default function Category() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h3" component="h3">
                    {categories[0].name}
                </Typography>
                <PostPreviewCard></PostPreviewCard>
                <Divider />
            </Paper>
        </div>
    );
}
