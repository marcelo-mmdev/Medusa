import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderGrid {
  left: ReactNode;
  children: ReactNode;
  right: ReactNode;
}

export const HeaderGrid = ({ left, children, right }: HeaderGrid) => {
  return (
    <Grid
      h={"100%"}
      // bg={"red"}
      // p={"1rem"}
      templateAreas={{
        base: `
         "left right"
         "main main"
        `,
        md: `
        "main left"
        "main right"
        `,
        lg: `
        "left main right"
        `,
      }}
      // gridTemplateRows={{
      //   base: `${left ? '"1fr"' : ""} ${children ? '"1fr"' : ""} ${
      //     right ? '"1fr"' : ""
      //   }`,
      // }}
      gridTemplateColumns={{ md: "2fr 1fr", lg: "1fr 3fr 1fr" }}
    >
      <GridItem
        // bg={"purple"}
        area={"left"}
        minW={"2.5rem"}
      >
        {left}
      </GridItem>
      <GridItem
        // bg={"blue"}
        area={"main"}
        minW={"2.5rem"}
      >
        {children}
      </GridItem>
      <GridItem
        // bg={"yellow"}
        area={"right"}
        minW={"2.5rem"}
      >
        {right}
      </GridItem>
    </Grid>
  );
};

{
  /* <SimpleGrid
      columns={{ base: 1, md: 3, lg: 4, xl: 5 }}
      gridRow={{ base: 2 }}
      h={"100%"}
      w={"100%"}
      // bg={"red"}
    >
      <GridItem
        colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
        flexDirection={"column"}
        // bg={"pink"}
      >
        {left}
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1, lg: 2, xl: 3 }}>{children}</GridItem>
      <GridItem
        colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
        flexDirection={"column"}
        // bg={"purple"}
      >
        {right}
      </GridItem>
    </SimpleGrid> */
}
