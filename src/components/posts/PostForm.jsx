// Libraries
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

// Services
import postsService from "../../services/posts.service";

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
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: "6px",
        width: "fit-content",
        height: "500px",
        justifyContent: "space-evenly",
        alignContent: "stretch",
        alignItems: "stretch",
        color: "#5B6489",
    },
  textField: {
    width: '80vw',
  },
  input: {
    display: "none",
    width: "100%",
    // visibility: "hidden",
    height: "50px",
    borderBottom: "1px solid darkgrey",
    textAlign: "center",
},
btn: {

    color: "#1C304A",
},
});
export default function PostForm( {params}) {
    const classes = useStyles();
    let {categoryId} = useParams();
    const history = useHistory();
    const defaultValues = {
        title: "",
        image: "",
        categoryId: categoryId,
      };
    const [formValues, setFormValues] = useState(defaultValues);

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

  const [content, setContent] = useState('');


   const rteChange = (content, delta, source, editor) => {
    setContent(editor.getHTML());
	console.log(editor.getHTML()); // HTML/rich text
	console.log(editor.getText()); // plain text
	console.log(editor.getLength()); // number of characters
}

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(formValues);
    
        try {
           await postsService.createPost(categoryId, {  
            title: formValues.title,
            content: content,
            image: formValues.image,
        }  );
            history.push(`/categories/${categoryId}`);
           } catch (error) {
               console.warn(error);
           }
      };


  


      return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography variant="h3" component="h3">
                    Beitrag erstellen
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
        id="title-input"
        name="title"
        label="Titel"
        type="text"
        variant="outlined"
        value={formValues.title}
        onChange={handleInputChange}
      />
      <input
        id="contained-button"
        accept="image/*"
        className={classes.input}
        type="file"
        onChange={handleInputChange}/>
        <label htmlFor="contained-button">
            Füge ein Bild hinzu <Button
                variant="contained"
                color="default"
                component="span"
                className={classes.btn}
                style={{
                    width: "50px",
                    marginTop: "40px",
                }}>
                <EditIcon></EditIcon>
            </Button>
        </label>
      <ReactQuill theme="snow"  modules={modules}
				formats={formats} onChange={rteChange}
			value={content || ''}/>
      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
  Beitrag posten
</Button>
</form>
</Paper>

</div>
      )
}