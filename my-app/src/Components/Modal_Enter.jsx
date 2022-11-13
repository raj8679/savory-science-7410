import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Box,
    Text,

  } from '@chakra-ui/react'

  import React from 'react'
  import { useState } from 'react'

  function Modal_Enter
  () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          {/* <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack> */}
        </RadioGroup>
        <Button style={{backgroundColor:"white",fontWeight:"bold",fontSize:"18px"}} onClick={onOpen}>
          Enterprices >
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="lg">
          <DrawerOverlay />
          <DrawerContent>
           
            <DrawerBody>
            <Box >
             <Text fontSize="xl" fontWeight="bold">Enterprice Overview</Text>
              <Text fontSize="lg">See how Airtable scales for large and complex organisation</Text>
              </Box>
              <Box marginTop="20px">
             <Text fontSize="xl" fontWeight="bold">Enterprice Service</Text>
              <Text fontSize="lg">We offer professional services and support to help you get the most</Text>
              </Box>
              <Box marginTop="20px">
             <Text fontSize="xl" fontWeight="bold">Enterprice Security</Text>
              <Text fontSize="lg">Learn about our data protection,admin tooling and more</Text>
              </Box>
              
            </DrawerBody>

            <DrawerFooter>
           
            <Box bg="#e9f6fb" w="100%" h="200px">
                <Text marginTop="30px" marginLeft="20px" fontSize="xl" fontWeight="bold">Pricing</Text>
                <Text marginTop="20px" marginLeft="20px">From small business to global enterprise, there’s an Airtable plan that’s just right for you.</Text>
                <Text  marginLeft="20px" color="navy">Explore Pricing</Text>

              </Box>
         </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Modal_Enter
  ;