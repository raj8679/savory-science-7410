import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

function Accordion_UI(){
    return (
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>See value fast</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
      <h1>Anyone can build a simple solution quickly, for any need.</h1><br />
      <h1 style={{color:"blue"}}>Explore about solutions</h1>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Gain perspective</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    
      <h1>Let your team see work in new ways—or create a View just for yourself.</h1><br />
      <h1 style={{color:"blue"}}>More about views</h1>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Use templates</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <h1>Not sure where to begin? We’ve got you covered with a library of templates pre-built for popular use cases.</h1><br />
      <h1 style={{color:"blue"}}>Explore Templates</h1>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}

export default Accordion_UI;