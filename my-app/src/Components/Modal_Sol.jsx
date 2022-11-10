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
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
             
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Modal_Sol;