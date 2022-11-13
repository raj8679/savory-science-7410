import {InputGroup,Input,InputRightElement,Button} from "@chakra-ui/react"
import React from "react"


function Input_UI(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Work Email address'
            size="lg"
           
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' style={{backgroundColor:"blue",color:"white"}} >
            Try for free
            </Button>
          </InputRightElement>
        </InputGroup>
      )
}

export default Input_UI;