import { Box, Flex, Image, useTheme } from "@chakra-ui/react";
import { H1, P } from "src/components/atoms";

export const BRAND = () => {
  const theme = useTheme();
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <P
        fontSize={{ base: "2rem", md: "2.5rem", lg: "2.5rem", xl: "2.5rem" }}
        color={theme.colors.menu.primary}
      >
        HUBCONFECÇÃO
      </P>

      <Image width={"6rem"} src="/img/comeia-logo-branco.png" />
    </Flex>
  );
};
