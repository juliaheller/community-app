import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

// components
import CategoryList from "../components/Categories/CategoryList";
import CategoryCard from "../components/Categories/CategoryCard";
import categories from "../components/Categories/categoryMock.js";

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
    },
});
export default function Forum() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" component="h3">
                Forum
            </Typography>
            <CategoryList />
            <Divider />
            <Paper className={classes.paper}>
                {categories.map((category, index) => {
                    return <CategoryCard category={category} key={index} />;
                })}
            </Paper>
        </div>
    );
}
