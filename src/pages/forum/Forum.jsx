import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

// components
import CategoryList from "../../components/categories/CategoryList";
import CategoryCard from "./../../components/categories/CategoryCard";
import categoryService from "../../services/category.service";

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
export default function Forum() {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await categoryService.getAll();
            setCategories(categories);
            console.log(categories);
        };
        fetchCategories();
    }, []);
    console.log(categories);
    return (
        <div>
            <div className={classes.root}>
                <Typography variant="h3" component="h3">
                    Forum
                </Typography>
                <CategoryList categories={categories} />
                <Divider />
                <Paper className={classes.paper}>
                    {categories.map((category, index) => {
                        return <CategoryCard category={category} key={index} />;
                    })}
                </Paper>
            </div>
        </div>
    );
}
