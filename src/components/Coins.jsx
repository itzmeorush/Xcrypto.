import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container, HStack, VStack,Image,Heading,Text,Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from '../components/Loader'
import Error from '../components/Error'
import CoinCard from '../components/CoinCard'
import '../Style.css'



const Coins = () => {

 const [coins, setCoins] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);
 const [page, setPage] = useState(1);
 const [currency, setCurrency] = useState('inr');

 const currencySymbol = currency === 'inr'?'₹':currency==='eur'?'€':'$'

 const ChangePage = (page) =>{
  setPage(page);
  setLoading(true);
 }

 const btns = new Array(132).fill(1);

  useEffect(()=>{
    const fetchCoin = async() =>{
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
    // console.log(data)
      setCoins(data);
      setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchCoin()
  },[currency,page])

    if(error) 
    return <Error message={'Error while fetching Coins'}/>


  return (
    <Container maxW={'container.xl'} mt={'50'}>
      {
        loading? (<Loader/>) :( <>
          
        <RadioGroup value={currency} onChange={setCurrency} pl={'36'} mb={'10'}>
          <HStack spacing={4}>
          <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={'wrap'} justifyContent={'center'}>
          {
            coins.map((i)=>(
              <CoinCard key={i.id} id={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol}/>
            ))
          }
        </HStack>
        <HStack w={'50%'} overflow={'auto'} m={'auto'} className='btn'>
       {
        btns.map((item,index)=>(
          <Button bgColor={'blackAlpha.900'} my={'10'} h={10} w={10} borderRadius={'50%'} color={'white'} onClick={()=>ChangePage(index + 1)} css={{
            '&:hover':{
              border: '1px solid black',
              color: 'black'
            }
          }}>{index+1} </Button>
        ))
       }
        </HStack>
          
        </>
  
     ) }
    </Container>
  )
};




export default Coins


