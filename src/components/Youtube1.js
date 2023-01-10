import axios from 'axios';
import { useEffect } from 'react';

function Youtube1() {
    const key = `AIzaSyDpj8gq78HfcfL10nKyGrVbc_Lkj7kuRMc`;
    const playList = `PLzk8tI3q70motiGO4cgGNkEOGClgjb949`;
    const num = 6;

    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

    useEffect( () => {
        axios.get(URL).then(json => console.log(json.data.items))
    }, []);

    return (
        
        <>
            <h1>Youtube1</h1>
        </>
    );
}

export default Youtube1;