import { Flex } from "@chakra-ui/react";
import { SEARCHBARWITHBUTTON } from "src/components/molecules/SearchBarWithButton";

export const HEADERCENTER = () => {
  return (
    <Flex
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"1.5rem"}
    >
      <SEARCHBARWITHBUTTON />
    </Flex>
  );
};
