import React from "react";
import { Center, Circle } from "@chakra-ui/react"

const Step = ({index, active}) => {

  return(
    <Center>
      <Circle
      w="40px"
      h="40px"
      bg={active ? "teal.500" : "teal.100"}
      color={active ? "white" : "blackAlpha"}
      style={{scale: active ? "1.2" : "none"}}
      >
        {index}
      </Circle>
    </Center>
  )
}

export default Step;