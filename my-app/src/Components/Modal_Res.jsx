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

  function Modal_Res
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
          Resources >
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="lg">
          <DrawerOverlay />
          <DrawerContent>
           
            <DrawerBody>
              <div style={{width:"100%",height:'550px',display:"flex"}}>
            <div style={{height:"100%",width:"50%",padding:"15px"}}>
            <h1 style={{fontSize:"20px"}}>Learn</h1><br />
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Webinars</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Demos</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Guides</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Articles</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Blog</h1><br />
              <h1 style={{fontSize:"20px"}}>Develope</h1><br />
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}> API docs</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Custom Extensions</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Developer Community</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Scripting</h1><br />
            </div>
            <div style={{height:"100%",width:"50%",padding:"15px"}}>
            <h1 style={{fontSize:"20px"}}>Inspiration</h1><br />
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Template</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Universe</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Customer Stories</h1><br />
              <h1 style={{fontSize:"20px"}}>Services and support</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Contact Support</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Enterprcie Services</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>PRicing</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>support docs</h1><br />
              <h1 style={{fontSize:"20px"}}>Connect</h1>
              <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Community Forum</h1>
            </div>
            </div>
            </DrawerBody>
            <DrawerFooter>
           
              <Box bg="#ffe6ff" w="100%" h="200px">
                <Text marginTop="30px" marginLeft="20px" fontSize="xl" fontWeight="bold">Most popular Resourses</Text>
                <div style={{width:"100%",height:"50px",display:"flex",justifyContent:"space-around",fontWeight:"bold"}}>
                  <div>Webinar</div>
                  <div>Reports</div>   
                </div>
                <div style={{width:"100%",height:"50px",display:"flex",justifyContent:"space-around",fontWeight:"bold"}}>
                <div>eBooks</div>
                  <div>Demos</div>
                  </div>
                <Text  marginLeft="20px" color="#d966ff">Explore All Resourses</Text>

              </Box>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Modal_Res
  ;