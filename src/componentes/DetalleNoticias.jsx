import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import * as API from '../servicios/noticias';


export function DetalleNoticias(){
    const [noticias, setNoticias] = useState([]);
    const {url} = useParams();

    useEffect(() => {
        API.getNoticia(url).then(setNoticias).catch(console.log);
    }, [url]);

    return(
        <div>
            <pre>{JSON.stringify(noticias)}</pre>
        </div>
    )
}