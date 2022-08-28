import React from "react";
import * as C from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const FormAccount = () => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <C.VStack spacing={5}>
      <C.Input
        type="email"
        placeholder="E-mail" 
        borderColor="teal.500"
        focusBorderColor="teal" />
      <C.Input
          type="email"
          placeholder="Confirme seu E-mail"
          borderColor = "teal.500" />
      <C.InputGroup>
        <C.Input
          type={show ? "text" : "password"}
          placeholder="Senha"
          borderColor="teal.500"
        />
          <C.InputRightElement>
            {show ? (
              <ViewOffIcon onClick={handleClick} color='teal' />
              ) : (
              <ViewIcon onClick={handleClick} color='teal' />
            )}     
          </C.InputRightElement>
      </C.InputGroup>
     
     
    </C.VStack>
  );
};
export default FormAccount;