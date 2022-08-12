import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainGrid {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export const MainGrid = ({ header, children, footer }: MainGrid) => {
  const HeaderFooter = "10vh";
  const Main = "80vh";
  return (
    <SimpleGrid
      display={"flex"}
      flexDirection={"column"}
      h={"100%"}
      maxH={"100vh"}
    >
      {header && <GridItem flex={1}>{header}</GridItem>}

      <GridItem flex={8}>{children}</GridItem>

      {footer && <GridItem flex={1}>{footer}</GridItem>}
    </SimpleGrid>
  );
};
