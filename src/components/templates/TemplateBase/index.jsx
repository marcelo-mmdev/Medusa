import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { CONTAINER } from "src/components/templates/Container";
import { BodyGrid } from "src/components/templates/TemplateBase/BodyGrid";
import { MainGrid } from "src/components/templates/TemplateBase/MainGrid";

interface TemplateBase {
  header?: ReactNode;
  leftSideBar?: ReactNode;
  rightSideBar?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export const TemplateBase = ({
  header,
  children,
  footer,
  leftSideBar,
  rightSideBar,
}: TemplateBase) => {
  const leftSideBreakPoints = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });
  const rightSideBreakPoints = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });

  return (
    <CONTAINER h={"100%"} maxW={"90vw"}>
      <Grid
        templateAreas={{
          base: `
          ${header && '"header"'}
          ${children && '"main"'}
          ${footer ? '"footer"' : ""}
          `,

          md: `
        ${header && '"header header header"'}

         " ${
           leftSideBreakPoints && children && rightSideBreakPoints
             ? "leftSideBar main rightSideBar"
             : children && rightSideBreakPoints
             ? "main main rightSideBar"
             : children && leftSideBreakPoints
             ? "leftSideBar main main"
             : children
             ? "main main main"
             : ""
         } "

          ${footer ? '"footer footer footer"' : ""}
        `,
        }}
        gridTemplateRows={{
          base: `'${header ? "1fr" : ""} ${children ? "8fr" : ""} ${
            footer ? "1fr" : ""
          }'`,
          md: `${header ? "1fr" : ""} ${
            leftSideBar || children || rightSideBar ? "8fr" : ""
          } ${footer ? ".1fr" : ""}`,
        }}
        gridTemplateColumns={{
          base: `1fr`,
          md: `${leftSideBar ? "2fr" : ""} ${children ? "6fr" : ""}  ${
            rightSideBar ? "2fr" : ""
          }`,
        }}
        h={"100%"}
        maxH={"100vh"}
        overflow={"auto"}
        flexWrap={"wrap"}
      >
        {header && (
          <GridItem as={"header"} area={"header"}>
            {header}
          </GridItem>
        )}
        {footer && (
          <GridItem as={"footer"} area={"footer"}>
            {footer}
          </GridItem>
        )}

        {leftSideBar && leftSideBreakPoints && (
          <GridItem
            as={"nav"}
            overflow={"auto"}
            p={"1rem 0 0 0"}
            // maxW={"30rem"}
            minW={"25rem"}
            area={"leftSideBar"}
          >
            {leftSideBar}
          </GridItem>
        )}

        {rightSideBar && rightSideBreakPoints && (
          <GridItem
            as={"aside"}
            overflow={"auto"}
            minW={"25rem"}
            p={"1rem"}
            area={"rightSideBar"}
          >
            {rightSideBar}
          </GridItem>
        )}

        {children && (
          <GridItem
            as={"main"}
            overflow={"auto"}
            minW={"25rem"}
            p={"1rem"}
            area={"main"}
          >
            {children}
          </GridItem>
        )}
      </Grid>
    </CONTAINER>
  );
};
