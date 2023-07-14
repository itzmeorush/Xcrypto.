import { Alert, AlertIcon, useDisclosure, CloseButton,Button} from '@chakra-ui/react'
import React from 'react'


const Error = ({message}) => {
  const {
   
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return (
    <Alert status='error' color={'blackAlpha.800'}>
      <AlertIcon/>
      {message}
    
    </Alert>

  )
}

export default Error
