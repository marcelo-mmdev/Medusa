import { Flex, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BRAND } from "src/components/molecules/Brand/inxex";
import { MENULIST } from "src/components/molecules/MenuList";

interface MENUDEFAULTProps {
  title?: string;
  withHeader?: boolean;
  variant?: "row" | "column";
}

export const MENUDEFAULT = ({
  title,
  withHeader,
  variant,
}: MENUDEFAULTProps) => {
  const menu = [
    { name: "home", href: "#" },
    { name: "Feed de Oportunidades", href: "#" },
    { name: "Cadastro", href: "#" },
    { name: "Conexões", href: "#" },
    { name: "Documentos", href: "#" },
  ];
  return (
    <Flex
      w={"100%"}
      flexDirection={"column"}
      alignItems={variant === "column" ? "normal" : "center"}
      gap={"1.5rem"}
      p={{ base: "3rem", md: "1rem", lg: "2rem", xl: "1.5rem" }}
      overflow={"auto"}
      bg={"primary.400"}
      borderTopEndRadius={"1rem"}
      h={"100%"}
    >
      <MENULIST
        title={title}
        withHeader={withHeader}
        variant={variant}
        menu={menu}
      />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        as={"footer"}
        mt={"auto"}
      >
        <BRAND />
      </Flex>
    </Flex>
  );
};
