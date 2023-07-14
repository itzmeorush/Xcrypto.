import React from 'react'
import { Container, HStack, VStack,Image,Heading,Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const CoinCard = ({name,img,symbol,id,price,currencySymbol='₹'}) =>(
    <Link to={`/coin/${id}`} >
       <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={"all .3s"} m={"4"} css={{
        '&:hover':{
          transform:'scale(1.1)'
        }
       }} >
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} ></Image>
      <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Text>

      </VStack>
    </Link>
  )

export default CoinCard
