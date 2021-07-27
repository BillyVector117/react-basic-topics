import React from 'react'
// Styles
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: theme.spacing(1),
        marginLeft: theme.spacing(8),
        /* maxWidth: "90rem", */
        background: "#3a3838;",
        /*  maxWidth: "max-content;",
         minHeight: "33rem;",
         position: "fixed;", */
        border: "2.5px solid #0bd0e0;",
        /*  borderRadius: "1.5rem;", */
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
    picture: {
        maxWidth: "27.5rem",
        border: "0.5px solid grey",
        boxShadow: `blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;`
    },
    bio: {
        fontSize: "x-large;",
        maxWidth: "88%;",
        textAlign: "justify;",
        padding: "3rem;",
    }
}));
const SongArtist = ({ artist }) => {
    const classes = useStyles();
    return (
        <section >
            <div >

                <h3>{artist.strArtist} ({artist.intBornYear || artist.intFormedYear} - {artist.intDiedYear || "Present"}) </h3>
                <img className={classes.picture} src={artist.strArtistThumb} alt={artist.strArtist} />
                <p>{artist.strCountry} </p>
                <p>{artist.strGenre} - {artist.strStyle} </p>
                <a href={`https://${artist.strWebsite}`} target="_blank" rel="noreferrer" style={{ color: "#10e0d7", textDecoration: "none" }} >Official site</a>
                <p className={classes.bio} >{artist.strBiographyEN} </p>
            </div>
        </section>
    )
}

export default SongArtist
