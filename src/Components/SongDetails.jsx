import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message from "./Message"
const SongDetails = ({ search, lyric, biography }) => {
    const styles = {
        display:"inline-flex",
        flexDirection:"row",
    }
    // console.log('lyric, ', lyric)
    if (!lyric || !biography) return null;
    const artist = biography.artists[0];
    return (
        <div style={styles} >
            {
                // If artist fetch() response is Null (Some error) show a Message, else show a component
                biography.artists ? <SongArtist artist={artist} /> : <Message message={`Error: We could not found this artist: '${search.artist}' `} bgColor={"Red"} />
            }
            {
                // If exist an error in lyric fetch() response then lyric responses with lyric.error (EPI response), or 
                // If AbortC ontroller from helpHttp responses with error then create a lyric.name with its error (Helper abort error)
                // lyric.err is custom err from Helper
                lyric.name === "AbortError" || lyric.error ? <Message message={`Error: We could not found this lyrics: <em>'${search.song}</em>' `} bgColor={"#3a383873"} /> : <SongLyric lyric={lyric.lyrics} title={search.song} artist={artist} />
            }



        </div>
    )
}

export default SongDetails
