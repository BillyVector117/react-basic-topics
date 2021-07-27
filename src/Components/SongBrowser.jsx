import React, { useEffect, useState } from 'react'
// Components
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from "./Loader"
// Helper
import { helpHttp } from "../helpers/helpHttp"
const SongBrowser = () => {
    const [search, setSearch] = useState(null); // Contains Input-Form-Values
    const [loading, setLoading] = useState(false);
    const [biography, setBiography] = useState(null); // Data response Ex: {artists[0]...}
    const [lyric, setLyric] = useState(null); // Data response Ex: {Lyrics}

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            // Make Custom URL to each fetch request
            // const { artist, song } = search; // ES6- Option #1
            const artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${search.artist}`; // Optional
            const lyricUrl = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}` // Optional
            setLoading(true)
            // Here starts two fetch request, just send ressults once are completed
            const [artistRes, lyricRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(lyricUrl,{mode: "no-cors"})
                /*     
    
                    fetch(lyricUrl, {
                        method: 'GET',
                        headers: new Headers({ 'Content-type': 'application/json'}),
                        mode: 'no-cors'
                }) */
            ])


            console.log('Artist response: ', artistRes) // Return {artists[0]....}
            console.log('Lyrics response: ', lyricRes) // Return {lyrics....}
            /*        const body = document.getElementsByClassName("App-header")
                   console.log(body[0])
                   body[0].style.backgroundImage = `url("https://www.theaudiodb.com/images/media/artist/thumb/qsppwu1379030392.jpg")`
                   body[0].style.backgroundSize = "cover" */

            setBiography(artistRes)
            setLyric(lyricRes)
            setLoading(false)
        };
        fetchData()
    }, [search])
    const handleSearch = (data) => {
        console.log('Searching data from...', data)
        setSearch(data)
    }
    return (
        <div>
            <h2>Artists Browser</h2>
            {
                loading &&
                <Loader />
            }
            {
                biography ?
                    <SongForm handleSearch={handleSearch} setRelative={"absolute"} /> :
                    <SongForm handleSearch={handleSearch} setRelative={"inherit"} />
            }
            {/* "SongDetails" contains Biography and Lyrics and only display it when 'search' contains data info (Submit-Form) AND 'loading' state is false (End of fetch request)*/}
            {
                search && !loading && (

                    <SongDetails search={search} lyric={lyric} biography={biography} />
                )
            }
        </div>
    )
}

export default SongBrowser
