import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import categoryService from '../../services/category.service';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxHeight: 300,
        overflow: "scroll",
        color: "#5B6489",
    },
    link: {
        textDecoration: "none",
    },
}));

export default function CategoryList() {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);

    useEffect( () => {
      
        const fetchCategories = async () => {
            const getCategories = await categoryService.getAll();
         
            setCategories(getCategories);
        }
      fetchCategories();
    }, []);

    return (
        <Paper variant="outlined" className={classes.root}>
            <List>
                {categories.map((category, index) => {
                    return (
                        <Link className={classes.link} to={`/categories/${category.id}`} key={index}>
                        <ListItem key={category.name}>
                            <ListItemAvatar>
                                <Avatar
                                    src={category.image}
                                    alt={category.name}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={category.name} />
                            <Divider />
                        </ListItem>
                        </Link>
                    );
                })}
            </List>
        </Paper>
    );
}
