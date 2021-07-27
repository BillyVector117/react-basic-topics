import React from 'react'
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const CrudTableRow = ({ item, setEditForm, removeData }) => {
    const classes = useStyles();

    let { name, team, id } = item;
    return (
        <tr>
            <td>{name}</td>
            <td>{team}</td>
            <td>
                <div className={classes.root}>


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => setEditForm(item)}
                    >
                        Edit
                </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={() => removeData(id)}
                    >
                        Delete
                </Button>
                </div>
            </td>
        </tr>
    )
}

export default CrudTableRow
