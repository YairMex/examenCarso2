import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Image, Button, Icon} from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

export function EconomiaItem(cont){
    return(
        <Box  
            bg='blue.100'
            textAlign='left' 
            p={4} 
            m={4}
            borderRadius='lg'
            width={['90%', '45%', '30%']}
            display='inline-block'
            >
              <Flex display='flex'>
                <Text fontSize='2x1' noOfLines={4}>
                  <strong>{cont.name} </strong> <br />  
                  Por: {cont.provider[0].name}
                </Text>
                <Spacer ml={4} />
                <Image src={cont.image.thumbnail.contentUrl} width={100} height={100}/>
              </Flex>
              <Flex align="center">
                <Icon as={HiCalendar} color='gray.500'></Icon>
                <Text ml={1} color='gray.500'>
                  {dayjs(cont.datePublished)
                    .locale('es')
                    .format('DD MMMM YYYY')}
                </Text>
              </Flex>
              <Text fontSize='sm' noOfLines={2} color='blue.500'>
                {cont.description}
              </Text>
              <Link to={`/noticia/${cont.url}`}>
                <Button mt={2} colorScheme='purple'>Ver más...</Button>
              </Link>
              
          </Box>
    )
}