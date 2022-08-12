import { Box } from "@chakra-ui/react";

export const Card = ({ children }) => (
  <Box
    w={"100%"}
    bg={"#FFFFFF"}
    boxShadow={"0rem 0rem .5rem gray"}
    borderRadius={"1rem"}
    padding={"1.5rem"}
  >
    {children}
  </Box>
);
