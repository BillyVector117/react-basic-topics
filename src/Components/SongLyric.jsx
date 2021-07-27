import React from 'react'
// Styles
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: "x-large;",
        minWidth: "32rem;",
        textAlign: "center;",
    },
    lyricsStyle: {
        whiteSpace: "pre-wrap;",
        maxHeight: "68rem;",
        overflow: "auto;",
        minWidth: "max-content;",
        marginLeft: "-5rem;"
    },
    h3: {
        marginRight: "5rem;",
    }
}));
const SongLyric = ({ lyric, title, artist }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <h3 className={classes.h3} >{title} - {artist.strArtist} </h3>
            <blockquote className={classes.lyricsStyle} style={{ whiteSpace: "pre-Wrap" }}>{lyric}</blockquote>

        </div>
    )
}

export default SongLyric
