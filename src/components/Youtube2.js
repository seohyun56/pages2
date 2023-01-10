import axios from "axios";
import { useEffect, useState } from "react";

function Youtube2() {
    const [ video, setVideo ] = useState([]);

    const key = `AIzaSyDpj8gq78HfcfL10nKyGrVbc_Lkj7kuRMc`;
    const playList = `PLzk8tI3q70motiGO4cgGNkEOGClgjb949`;
    const num = 6;

    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

    useEffect( () => {
        axios.get(URL).then(json => setVideo(json.data.items))
    }, []);

    return (
        <>
            { video.map( (vid, idx) => {
                return <figure key={vid.snippet.position} style={{borderBottom: "1px solid #000"}}>
                    <strong style={{display: 'block'}}>{vid.snippet.title}</strong>
                    <img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
                    <iframe src={`https://www.youtube.com/embed/${video[idx].snippet.resourceId.videoId}?controls=0`} title={vid.snippet.title} frameborder="0"></iframe>
                    <figcaption>{vid.snippet.description.substr(0, 100) + "..."}</figcaption>
                </figure>
            })}

            {/* <figure>
                <h2></h2>
                <img src="" alt="" />
                <iframe src="" frameborder="0"></iframe>
                <figcaption></figcaption>
            </figure> */}
        </>
    );
}

export default Youtube2;