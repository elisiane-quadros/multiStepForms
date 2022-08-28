import * as C from "@chakra-ui/react";

const FormAddress = () => {
  return(
    <C.VStack spacing={5}>
      <C.Input 
        placeholder="Cidade, UF" 
        borderColor="teal.500" />
      <C.Input 
        placeholder="Rua" 
        borderColor="teal.500" />
       <C.Input 
        placeholder="CEP" 
        borderColor="teal.500" />
    </C.VStack>
  );
};
export default FormAddress;