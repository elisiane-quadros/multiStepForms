import * as C from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons'


const FormPersonalDetails = () => {
  return(
    <C.VStack spacing={5}>
      <C.Input 
        placeholder="Nome Completo" 
        borderColor="teal.500" />
      <C.Input 
        placeholder="CPF" 
        borderColor="teal.500" />
      <C.InputGroup>
         <C.InputLeftElement  
          children={<PhoneIcon color='gray.500' />}
        /> 
      <C.Input
        type="tel" 
        placeholder="Celular" 
        borderColor="teal.500" />
      </C.InputGroup>
    </C.VStack>
  );
};
export default FormPersonalDetails;