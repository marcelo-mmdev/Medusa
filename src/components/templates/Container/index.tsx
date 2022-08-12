import { Box, BoxProps, Center } from "@chakra-ui/react";

interface CONTAINER extends BoxProps {}

export const CONTAINER = ({ children, ...rest }: CONTAINER) => (
  <Center>
    <Box
      maxW={"1920px"}
      bg={"#FFFFFF"}
      boxShadow={"0rem 0rem 2.5rem gray"}
      {...rest}
    >
      {children}
    </Box>
  </Center>
);
