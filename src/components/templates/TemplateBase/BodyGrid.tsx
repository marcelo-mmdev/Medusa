import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BodyGrid {
  left: ReactNode;
  children: ReactNode;
  right: ReactNode;
}

export const BodyGrid = ({ left, children, right }: BodyGrid) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 4, xl: 5 }}
      w={"100%"}
      gap={"1rem"}
    >
      <GridItem
        display={{ base: "none", md: "none", lg: "flex" }}
        colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
        flexDirection={"column"}
        overflow={"auto"}
      >
        {left}
      </GridItem>
      <GridItem
        colSpan={{ base: 1, md: 2, lg: 2, xl: 3 }}
        display={"flex"}
        flexDirection={"column"}
        gap={"1.6rem"}
        p={"1rem"}
        bg={"red"}
        overflow={"auto"}
      >
        {children}
      </GridItem>
      <GridItem
        display={{ base: "none", md: "flex", lg: "flex" }}
        colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
        flexDirection={"column"}
        overflow={"auto"}
        p={"1rem"}
        gap={"1.6rem"}
      >
        {right}
      </GridItem>
    </SimpleGrid>
  );
};
