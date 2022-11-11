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

  function Modal_Sol() {
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
          Solutions >
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="lg">
          <DrawerOverlay />
          <DrawerContent>
            
            <DrawerBody>
            <Box >
             <Text fontSize="xl" fontWeight="bold">By Team</Text>
              <Text fontSize="lg">See how Teams of all stripes and sizes use Airtable</Text>
              </Box>
              <Box marginTop="20px">
             <Text fontSize="xl" fontWeight="bold">By Use Case</Text>
              <Text fontSize="lg">Get inspired by usecases that will that will make you fall with Airtable</Text>
              </Box>
              <Box marginTop="20px">
             <Text fontSize="xl" fontWeight="bold">By Team</Text>
              <Text fontSize="lg">See how Teams of all stripes and sizes use Airtable</Text>
              </Box>
              <Box marginTop="20px" fontSize="xl" fontWeight="bold">See all solutions</Box>
            </DrawerBody>
            <DrawerFooter>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Modal_Sol;