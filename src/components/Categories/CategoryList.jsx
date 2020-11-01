import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxHeight: 300,
        overflow: "scroll",
    },
}));

export default function CategoryList() {
    const classes = useStyles();
    const categories = [
        {
            name: "Orga & Planung",
            image:
                "https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_960_720.png",
        },
        {
            name: "Diskussion & Abstimmung",
            image:
                "https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_960_720.png",
        },
        {
            name: "Persoenliches",
            image:
                "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
        },
        {
            name: "Ankuendigungen",
            image:
                "https://cdn.pixabay.com/photo/2016/06/26/12/05/megaphone-1480342_960_720.jpg",
        },
    ];

    return (
        <Paper variant="outlined" className={classes.root}>
            <List>
                {categories.map((category) => {
                    return (
                        <ListItem key={category.name}>
                            <ListItemAvatar>
                                <Avatar
                                    src={category.image}
                                    alt={category.name}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={category.name} />
                            <Divider />
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
}
