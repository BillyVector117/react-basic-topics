import React, { useEffect, useState } from 'react';
// Styles
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),

        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "300px",
        },
        "& .MuiButtonBase-root": {
            margin: theme.spacing(2),
        },
    },
}));
const CrudForm = ({ addData, updateData, editForm, setEditForm }) => {
    const classes = useStyles();
    const initialForm = {
        id: null,
        name: "",
        team: "",
    }
    const [form, setForm] = useState(initialForm); // Inputs value

    useEffect(() => {
        // editForm contains the object to update
        if (editForm) {
            setForm(editForm)
        } else {
            // If 'editForm' is null, then user will add an item
            setForm({
                id: null,
                name: "",
                team: "",
            })
        }
    }, [editForm]);
    const handleReset = (event) => {
        setForm(initialForm);
        setEditForm(null) // Change to default Form instead Update-Form
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.name || !form.team) {
            alert("Incorrect data")
            return;
        }
        // case: Create data sending Data-Form to parent element through a function
        if (form.id == null) {
            addData(form)
        } else {
            // case: Update an existing data (Id found)
            updateData(form)
        }
        handleReset() // Reset changes
    }
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        // console.log(form) Log for changes
    }
    return (
        <div>
            <h3>{editForm ? "Update" : "Add"}</h3>
            <form className={classes.root} onSubmit={handleSubmit} >
                <TextField
                    name="name"
                    InputLabelProps={{ style: { color: "#61dafb" } }}
                    label="Name"
                    variant="filled"
                    required
                    value={form.name}
                    onChange={handleChange}
                />
                <TextField
                    name="team"
                    InputLabelProps={{ style: { color: "#61dafb" } }}
                    label="Team"
                    variant="filled"
                    required
                    value={form.team}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    {editForm ? "Change" : "Add"}
                </Button>
                <Button type="reset" variant="contained" value="Clean" onClick={handleReset}>
                    Cancel
                </Button>
            </form>
        </div>
    )
}
export default CrudForm
