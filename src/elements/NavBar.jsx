import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#1b1e23",
        color: "#61dafb"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    customLink: {
        color: "#61dafb",
        textDecoration: "none",
    }
}));

function NavBar() {
    const classes = useStyles();
    // Clock Song Browser NestedSelects Contact Form Modals Crud-API Crud
    return (
        <div className={classes.root}>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.customLink} to="/" >
                            React JS
                    </Link>
                    </Typography>
                    <Link className={classes.customLink} to="/clock" >
                        <Button color="inherit">Clock</Button>
                    </Link>
                    <Link className={classes.customLink} to="/songbrowser" >
                        <Button color="inherit">Song-Browser</Button>
                    </Link>
                    <Link className={classes.customLink} to="/nestedselects" >
                        <Button color="inherit">Nested-Selects</Button>
                    </Link>
                    <Link className={classes.customLink} to="/contactform" >
                        <Button color="inherit">Contact-Form</Button>
                    </Link>
                    <Link className={classes.customLink} to="/modals" >
                        <Button color="inherit">Modals</Button>
                    </Link>
                    <Link className={classes.customLink} to="/crudapi" >
                        <Button color="inherit">Crud-API</Button>
                    </Link>
                    <Link className={classes.customLink} to="/crud" >
                        <Button color="inherit">Crud</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;