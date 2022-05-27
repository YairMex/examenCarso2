import { useState, useEffect } from 'react';
import { Heading, Box } from '@chakra-ui/react';

import { NegociosItem } from './NegociosItem';
import * as API from '../servicios/noticias';

export function NoticiasNegocios(){
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        API.getAllNegocios().then(setNoticias);
    }, []);
    return (
        <>
            <Heading align='center' as='h1' size='lg' m={4}>
                Noticias Negocios
            </Heading>
            <section align='center'>
                <Box display='none'>{noticias.map((cont, index) => cont.id = index)}</Box>
                {noticias.map(cont => (
                <NegociosItem key={cont.url} {...cont}/>
                ))}
            </section>
        </>
    );
}