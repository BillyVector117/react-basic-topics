import React, { useState } from 'react'
// Styles
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: theme.spacing(2),
        marginLeft: theme.spacing(8),
        background: "#3a3838;" ,
        maxWidth: "max-content;",
        minHeight: "33rem;",
        border: "2.5px solid #0bd0e0;",
        borderRadius: "1.5rem;",
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "300px",
            color: "#ddeaea",
        },
        "& .MuiButtonBase-root": {
            margin: theme.spacing(2),
            color: "#ddeaea0;"
        },
    },
    input: {
        color: "#ddeaea",
    },
}));
let styles = {
  /*   padding: "0.5rem",
    marginBottom: "1rem",
    textAlign: "center", */
    color: "#ddeaea",
    fontWeight: "bold",
    
}
const SongForm = ({ handleSearch, setRelative }) => {
    const classes = useStyles();
    const initialForm = {
        artist: "",
        song: "",
    }

    const [form, setForm] = useState(initialForm)

    const handleChange = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        // console.log(form) Watch for changes
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.artist || !form.song) {
            alert("Enter a valid Artist/Song")
        } else {
            handleSearch(form)
            setForm(initialForm) // Cleaning form when Submit
        }
    }
    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit} style={{position: setRelative }} >
                <TextField className={classes.input} InputLabelProps={{ style: { color: "#61dafb" } }} label="Artist" type="text" name="artist" placeholder="Type an artist" onChange={handleChange} value={form.artist} style={styles} />
                <TextField label="Song" type="text" InputLabelProps={{ style: { color: "#61dafb" } }} name="song" placeholder="Type name Song" onChange={handleChange} value={form.song} />
                <Button
                    type="submit"
                    value="Accept"
                    variant="contained"
                    color="primary">Accept</Button>
            </form>

        </div>
    )
}

export default SongForm
