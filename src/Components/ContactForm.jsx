import React from 'react'
import { useForm } from '../hooks/useForm'
// Styles
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Loader from './Loader';
import Message from './Message';
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
            color: "white",
        },
        "& .MuiButtonBase-root": {
            margin: theme.spacing(2),
            color: "white",
        },
    },
    floatingLabelFocusStyle: {
        color: "white",
    },
    root1: {
        color: 'red',
    },
    customizedButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        cursor: "pointer",
    },
    myLabel: {
        textTransform: 'capitalize',
    }
}));

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comment: "",
}
// 'form' arg refers to submitted data Form
const validateForm = (form) => {
    // Define errors Object (fill for each new error)
    const errors = {};
    // Define regular expression for each input
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    if (!form.name.trim()) {
        errors.name = "Name field is required"
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "Name field only accepts letters and blank spaces"
    }
    if (!form.email.trim()) {
        errors.email = "E-mail field is required"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Incorrect E-mail, try again"
    }
    if (!form.subject.trim()) {
        errors.subject = "Subject field is required"
    }
    if (!form.comment.trim()) {
        errors.comment = "Comment field is required"
    } else if (!regexComments.test(form.comment.trim())) {
        errors.comment = "Comment field allows 255 characters"
    }
    return errors;
}

const ContactForm = () => {
    const classes = useStyles();
    // Manage form with custom hook
    const { form, errors, loading, response, handleBlur, handleChange, handleSubmit } = useForm(initialForm, validateForm)
    return (
        <div>
            <h2>Contact form (Validations)</h2>
            <form className={classes.root} onSubmit={handleSubmit} >
                <TextField type="text" name="name" InputLabelProps={{ style: { color: "#61dafb" } }} label="Type your name" onChange={handleChange} value={form.name} onBlur={handleBlur} autoFocus required />
                {
                    // 'errors' comes from 'useForm'
                    errors.name && <p style={{ color: "#ff005b" }}>{errors.name} </p>
                }
                <TextField color="secondary" type="email" name="email" InputLabelProps={{ style: { color: "#61dafb" } }} label="Type your E-mail" onChange={handleChange} value={form.email} onBlur={handleBlur} required />
                {
                    errors.email && <p style={{ color: "#ff005b" }}>{errors.email} </p>
                }
                <TextField type="text" name="subject" InputLabelProps={{ style: { color: "#61dafb" } }} label="Type your subjet" onChange={handleChange} value={form.subject} onBlur={handleBlur} required />
                {
                    errors.subject && <p style={{ color: "#ff005b" }}>{errors.subject} </p>
                }
                <textarea name="comment" id="" cols="50" rows="5" onChange={handleChange} value={form.comment} onBlur={handleBlur} required></textarea>
                <button type="submit" className={classes.customizedButton} > SEND</button>
            </form>
            {
                loading &&
                <Loader />
            }
            {
                response && <Message message={"Data successfully submited"} bgColor={"green"} />
            }
        </div>
    )
}
export default ContactForm
