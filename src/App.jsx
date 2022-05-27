import { Box, Spacer, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Routes, Route, Link } from "react-router-dom";

import { ListaNoticias } from './componentes/ListaNoticias';
import { NoticiasEconomia } from './componentes/NoticiasEconomia';
import { NoticiasEntretenimiento } from './componentes/NoticiasEntretenimiento';
import { NoticiasNegocios } from './componentes/NoticiasNegocios';
import { DetalleNoticias } from './componentes/DetalleNoticias';
import logo from './assets/logoBvlls.jpg';

export function App() {
  return (
    <>
    <Box 
    bg='green.100' 
    m={[2, 3, 4]} 
    borderRadius='lg' 
    p={[2, 3, 4]}
    textAlign='right'
    display='flex'
    >
      <Image src={logo} width={[90, 90, 90]}/>
      <Spacer ml={4} />
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
        <Link to='/' fontSize={['sm', 'md', 'lg']}>Incio</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link to='/economia' fontSize={['sm', 'md', 'lg']}>Economía</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link to='/entretenimiento' fontSize={['sm', 'md', 'lg']}>Entretenimiento</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link to='/negocios' fontSize={['sm', 'md', 'lg']}>Negocios</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
    <Routes>
      <Route path="/" element={<ListaNoticias/>} />
      <Route path="/economia" element={<NoticiasEconomia/>} />
      <Route path="/entretenimiento" element={<NoticiasEntretenimiento />} />
      <Route path="/negocios" element={<NoticiasNegocios />} />
      <Route path="noticia/:url" element={<DetalleNoticias/>} />
    </Routes>
    </>
  )

}

