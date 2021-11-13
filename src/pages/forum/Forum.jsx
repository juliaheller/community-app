// Libraries
import React, { useState, useEffect } from "react";

// Material UI
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Skeleton from '@material-ui/lab/Skeleton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

// components
import CategoryList from "../../components/categories/CategoryList";
import CategoryCard from "./../../components/categories/CategoryCard";
import categoryService from "../../services/category.service";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // marginTop: "100px",
        // marginLeft: "100px",
    },
    paper: {
        display: "flex",
        marginTop: 50,
        flexWrap: "wrap",
        justifyContent: "center",
    },
    list: {
    width: "100%",
    maxHeight: 300,
        justifySelf: "flex-start"
},
    listlEment: {
        listStyleType: "none"
    }
});
export default function Forum() {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading]= useState(true);
    
    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await categoryService.getAll();
            setCategories(categories);
            setLoading(false);
        };
        fetchCategories();
    }, [loading]);

    return (
        <div>
            
                {!loading ? 
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
         </div> :
            <div className={classes.root}>
            <Typography variant="h3" component="h3">
            Forum
        </Typography>
        <List className={classes.list}>
              
                   

                        <ListItem>
                            <ListItemAvatar>
                            <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </ListItemAvatar>
                            <Skeleton width={100}/>
                            <Divider />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </ListItemAvatar>
                            <Skeleton width={100} />
                            <Divider />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </ListItemAvatar>
                            <Skeleton width={100} />
                            <Divider />
                        </ListItem>
            </List>
        <Divider />
        <Paper className={classes.paper}>
            
        </Paper> 
        </div>
            } 
        </div>
    );
}
