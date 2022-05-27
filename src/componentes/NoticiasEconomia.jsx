import { useState, useEffect } from 'react';
import { Heading, Box } from '@chakra-ui/react';

import { EconomiaItem } from './EconomiaItem';
import * as API from '../servicios/noticias';

export function NoticiasEconomia(){
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        API.getAllEconomia().then(setNoticias);
    }, []);
    return (
        <>
            <Heading align='center' as='h1' size='lg' m={4}>
                Noticias Economía
            </Heading>
            <section align='center'>
                <Box display='none'>{noticias.map((cont, index) => cont.id = index)}</Box>
                {noticias.map(cont => (
                <EconomiaItem key={cont.url} {...cont}/>
                ))}
            </section>
        </>
    );
}