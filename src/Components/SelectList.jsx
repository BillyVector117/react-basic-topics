import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Loader from "./Loader"
import Message from './Message';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))
const SelectList = ({ title, url, handleChange }) => {
    const classes = useStyles();

    const { data, error, loading } = useFetch(url);
    console.log(data, error, loading)
    // If exist an error do not render the selects option
    if (!data) return null; // Prevent unnecesary renders if data does not exist
    if (error) {
        return <Message message={`Error: ${error.status}: ${error.statusText}`} bgColor="red" />
    }
    let id = `select-${title} ` // Unique id for each select, ex: select-country
    let labelUpperCase = title.charAt(0).toUpperCase() + title.slice(1) // Tranform first char label to upperCase
    let options = data.response[title] // API data response example: data.response.estado.... (title is the name of the select)
    console.log(options)
    return (
        <>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor={id}>{labelUpperCase}</InputLabel>
                {
                    loading && <Loader />
                }
                <Select
                    native
                    key={id}
                    name={id}
                    id={id}
                    onChange={handleChange}
                    inputProps={{
                        id: { id },
                    }}
                >
                    <option aria-label="None" key={id} value={title} > Seleccionar {title}</option>
                    {
                        data && options.map((item) => <option key={item} value={item}>{item} </option>)
                    }

                </Select>
            </FormControl>


        </>
    )
}
export default SelectList
