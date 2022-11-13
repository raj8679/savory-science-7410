import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

function Accordion_two(){
    return (
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Expant toolkits</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
      <h1>Take work to the next level with pre-built extensions.</h1><br />
      <h1 style={{color:"blue"}}>Explore Market place</h1>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Develope Solutions</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    
      <h1>Create custom solutions with easy to use APIs and low-code scripting tools.</h1><br />
      <h1 style={{color:"blue"}}>Learn more</h1>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Get expert Support</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <h1>Accelerate team success with our professional services.</h1><br />
      <h1 style={{color:"blue"}}>Explore Enterprise service</h1>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}

export default Accordion_two;