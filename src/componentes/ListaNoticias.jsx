import { useState, useEffect } from 'react';
import { Heading, Box } from '@chakra-ui/react';

import { NoticiaItem } from './NoticiasItem';
import * as API from '../servicios/noticias';

export function ListaNoticias(){
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        API.getAllNoticias().then(setNoticias);
    }, []);
    return (
        <>
            <Heading align='center' as='h1' size='lg' m={4}>
                Últimas Noticias
            </Heading>
            <section align='center'>
                <Box display='none'>{noticias.map((cont, index) => cont.id = index)}</Box>
                {noticias.map(cont => (
                <NoticiaItem key={cont.url} {...cont}/>
                ))}
            </section>
        </>
    );
}


