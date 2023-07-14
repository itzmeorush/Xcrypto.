import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container, HStack, VStack,Image,Heading,Text } from '@chakra-ui/react';
import Loader from '../components/Loader'
import Error from '../components/Error'



const Exchange = () => {

 const [exchanges, setExchanges] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);

  useEffect(()=>{
    const fetchExchange = async() =>{
      try {
        const {data} = await axios.get(`${server}/exchanges`);
    // console.log(data)
      setExchanges(data);
      setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchExchange()
  },[])

    if(error) 
    return <Error message={'Error while fetching'}/>


  return (
    <Container maxW={'container.xl'} mt={'50'}>
      {
        loading? <Loader/> : <>
        <HStack wrap={'wrap'} justifyContent={'center'}>
          {
            exchanges.map((i)=>(
              <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
            ))
          }
        </HStack>
        </>
      }
    </Container>
  )
};

const ExchangeCard = ({name,img,rank,url}) =>(
  <a href={url} target={'blank'}>
     <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={"all .3s"} m={"4"} css={{
      '&:hover':{
        transform:'scale(1.1)'
      }
     }} >
    <Image src={img} w={'10'} h={'10'} objectFit={'contain'} ></Image>
    <Heading size={'md'} noOfLines={1}>{rank}</Heading>
    <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
)


export default Exchange

