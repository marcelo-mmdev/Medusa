import { Flex } from "@chakra-ui/react";
import { H1, P } from "src/components/atoms";

interface HEADERNAME {
  name: string;
}

export const HEADERNAME = ({ name }: HEADERNAME) => {
  return (
    <Flex
      p={"1.6rem"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <P>{name}</P>
    </Flex>
  );
};
