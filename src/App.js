import { Box, Button,  Heading, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { isMotionComponent } from "framer-motion";

function App() {

const[gameStarted ,setGameStarted]=useState(false);
const[selectedNumber,setSelectedNumber]=useState(0);
const[selectedDice,setSelectedDice]=useState(1);
const[error,setError]=useState();
const[score,setScore]=useState(0);


const numbers=[1,2,3,4,5,6];

const startGameHandle =() => {
  setGameStarted(!gameStarted);
}

//console.log(selectedNumber);
const onNumberClicked =(value) =>{
  setSelectedNumber(value)
  setError(null)
}

const genRandomNo = () => {

  if(selectedNumber){
    const Random= Math.ceil(Math.random()*6);
  setSelectedDice(Random)
  console.log(Random);
  
      if(selectedNumber === Random){
          setScore((prev) =>prev + Random)
        }
        else{
          setScore((prev)=>prev -2)
        }
        
  }else{
    setError("Please Select Number")
  }
  
}

  return (
    <>
    {gameStarted ?
       <>
        <Stack  justify="center"align="center">
          <Heading mb="20px"color={error? "red" : "black"}>
            {error? error : "Select Number"}
            </Heading>
          <Flex gap="30px" border="olive" borderRadius="md" >
          {numbers.map((value)=>(
          <Flex
           h="50px" w="50px" color="white" 
           bg={selectedNumber === value ? "green" : "black"} 
           justify="center" align="center" fontSize="2xl"
            key={value}
             onClick={()=>onNumberClicked(value)}
            >
              {value}
              </Flex>
           ))}
          </Flex>
          {/* <Flex h="50px" w="50px" color="white" bg="black" justify="center" align="center" fontSize="2xl"> */}
          <Box h="150px" width="150px" onClick={genRandomNo}>
            <Image src={`/dice/dice${selectedDice}.png`}/>
            </Box>
          <Text>Click On Dice To Roll </Text>
          <Text fontSize="8xl" fontWeight="bold" color={score>0 ? "green" :"red"}>
            {score}
            </Text>
          <Text fontSize="xl">Total Score  </Text>
          <Button alignSelf="center" onClick={() => (setScore(0))}>Reset Score</Button>
          
        </Stack>

        <Stack>
          <Heading as="h2">Rules Of This Game </Heading>
          <List>
            <ListItem>First Select any Number</ListItem>
            <ListItem>Click on Image of Dice to roll</ListItem>
            <ListItem>If Number Selected == image of Dice Image , You will get same point as Dice Image</ListItem>
            <ListItem>If Number Selected not equal to Dice Image , You will get minus 2 points </ListItem>
            <ListItem>You Can Reset the game whenever you want </ListItem>
          </List>
            
            
          
        </Stack>
       </>
    :
    <Flex justify="center" align="center">
    <Image width="50%" src="/dices.png"  alt="Dice"  />
    <Stack>  
     <Heading fontSize="7xl"as="h1">The Dice Game </Heading>
     <Button alignSelf="end" color="white" bg="black" _hover={{bg:"green"}} onClick={startGameHandle}>Start Game</Button>
   </Stack>

   </Flex>
   }
    </>
   
    
  );
} 

export default App;
