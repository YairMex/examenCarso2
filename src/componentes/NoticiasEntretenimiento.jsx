import { useState, useEffect } from 'react';
import { Heading, Box } from '@chakra-ui/react';

import { EntretenimientoItem } from './EntretenimientoItem';
import * as API from '../servicios/noticias';

export function NoticiasEntretenimiento(){
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        API.getAllEntretenimiento().then(setNoticias);
    }, []);
    return (
        <>
            <Heading align='center' as='h1' size='lg' m={4}>
                Noticias Entretenimiento
            </Heading>
            <section align='center'>
                <Box display='none'>{noticias.map((cont, index) => cont.id = index)}</Box>
                {noticias.map(cont => (
                <EntretenimientoItem key={cont.url} {...cont}/>
                ))}
            </section>
        </>
    );
}