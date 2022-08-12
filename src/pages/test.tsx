import {
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    Image,
    Input,
    SimpleGrid,
    Text,
    useTheme,
    VStack,
  } from "@chakra-ui/react";
  import { ReactNode } from "react";
  import { MdNotificationsActive } from "react-icons/md";
  import { H1, P } from "src/components/atoms";
  import { MEDIACONTENT } from "src/components/molecules";
  import { BRAND } from "src/components/molecules/Brand/inxex";
  import { HEADERCENTER } from "src/components/molecules/HeaderCenter";
  import { HEADERNAME } from "src/components/molecules/HeaderName";
  import { HEADERRIGHT } from "src/components/molecules/HeaderRight";
  import { MENUDEFAULT } from "src/components/molecules/MenuDefault";
  import { MENULIST } from "src/components/molecules/MenuList";
  import { SEARCHBARWITHBUTTON } from "src/components/molecules/SearchBarWithButton";
  import { CONTAINER } from "src/components/templates";
  import { TemplateBase } from "src/components/templates/TemplateBase";
  import { BodyGrid } from "src/components/templates/TemplateBase/BodyGrid";
  import { HeaderGrid } from "src/components/templates/TemplateBase/HeaderGrid";
  
  interface BodyGrid {
    left: ReactNode;
    middle: ReactNode;
    right: ReactNode;
  }
  
  export const grid = ({ left, middle, right }: BodyGrid) => {
    const theme = useTheme();
  
    return (
      // <TemplateBase
      //   header={
      //     <SimpleGrid columns={3} h={"100%"} bg={"gray"}>
      //       <GridItem>teste</GridItem>
      //       <GridItem>teste</GridItem>
      //       <GridItem>teste</GridItem>
      //     </SimpleGrid>
      //   }
      //   body={<SimpleGrid bg={"gray"}></SimpleGrid>}
      // />
  
      // <Box h={"100vh"}>
      //   <SimpleGrid
      //     columns={{ base: 3, md: 3, lg: 4, xl: 5 }}
      //     h={"100%"}
      //     w={"100%"}
      //     bg={"gray"}
      //   >
      //     <GridItem
      //       display={{ base: "none", md: "none", lg: "flex" }}
      //       colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
      //       bg={"red"}
      //     >
      //       {left}
      //     </GridItem>
      //     <GridItem colSpan={{ base: 2, md: 2, lg: 2, xl: 3 }} bg={"blue"}>
      //       {middle}
      //     </GridItem>
      //     <GridItem colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }} bg={"yellow"}>
      //       {right}
      //     </GridItem>
      //   </SimpleGrid>
      // </Box>
      <TemplateBase
        header={
          <HeaderGrid
            left={
              <HEADERNAME name="Header Name" />
              // <Box bg={"bisque"} w={"100%"}>
              //   a
              // </Box>
            }
            right={
              <HEADERRIGHT />
  
              // <Box w={"100%"}>b</Box>
            }
          >
            <HEADERCENTER />
            {/* <Box w={"100%"}>c</Box> */}
          </HeaderGrid>
        }
        footer={
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            as={"footer"}
            mt={"auto"}
            bg={"primary.400"}
            h={"100%"}
          >
            {/* <BRAND /> */}
            <P color={"black"} fontSize={"1rem"}>
              Todos os direitos reservados.
            </P>
          </Flex>
        }
        leftSideBar={<MENUDEFAULT title="Comeia" variant="column" withHeader />}
        rightSideBar={
          <Flex flexDirection={"column"} p={"0.3rem"} gap={"1.6rem"}>
            <MEDIACONTENT
              title={"SC R"}
              subTitle={"Corte e Costura"}
              img={"/img/favicon comeia.png"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </MEDIACONTENT>
            <MEDIACONTENT
              title={"SC CONFEC"}
              subTitle={"Corte e Costura"}
              img={"/img/favicon comeia.png"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </MEDIACONTENT>
            <MEDIACONTENT
              title={"SC CONFEC"}
              subTitle={"Corte e Costura"}
              img={"/img/favicon comeia.png"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </MEDIACONTENT>
            <MEDIACONTENT
              title={"SC CONFEC"}
              subTitle={"Corte e Costura"}
              img={"/img/favicon comeia.png"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </MEDIACONTENT>
            <MEDIACONTENT
              title={"SC CONFEC"}
              subTitle={"Corte e Costura"}
              img={"/img/favicon comeia.png"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </MEDIACONTENT>
          </Flex>
        }
      >
        <Flex w={"100%"} flexDirection={"column"} p={"0.3rem"} gap={"1.6rem"}>
          <MEDIACONTENT
            title={"SC CONFEC"}
            subTitle={"Corte e Costura"}
            img={"/img/favicon comeia.png"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nihil quae facilis, numquam hic quo similique incidunt, amet dolor
            recusandae animi quos deserunt qui delectus reprehenderit tenetur
            corrupti iusto fuga.
          </MEDIACONTENT>
          <MEDIACONTENT
            title={"SC CONFEC"}
            subTitle={"Corte e Costura"}
            img={"/img/favicon comeia.png"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nihil quae facilis, numquam hic quo similique incidunt, amet dolor
            recusandae animi quos deserunt qui delectus reprehenderit tenetur
            corrupti iusto fuga.
          </MEDIACONTENT>
          <MEDIACONTENT
            title={"SC CONFEC"}
            subTitle={"Corte e Costura"}
            img={"/img/favicon comeia.png"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nihil quae facilis, numquam hic quo similique incidunt, amet dolor
            recusandae animi quos deserunt qui delectus reprehenderit tenetur
            corrupti iusto fuga.
          </MEDIACONTENT>
          <MEDIACONTENT
            title={"SC CONFEC"}
            subTitle={"Corte e Costura"}
            img={"/img/favicon comeia.png"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nihil quae facilis, numquam hic quo similique incidunt, amet dolor
            recusandae animi quos deserunt qui delectus reprehenderit tenetur
            corrupti iusto fuga.
          </MEDIACONTENT>
          <MEDIACONTENT
            title={"SC CONFEC"}
            subTitle={"Corte e Costura"}
            img={"/img/favicon comeia.png"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nihil quae facilis, numquam hic quo similique incidunt, amet dolor
            recusandae animi quos deserunt qui delectus reprehenderit tenetur
            corrupti iusto fuga.
          </MEDIACONTENT>
          <MEDIACONTENT
            title={"SC CONFEC"}
            subTitle={"Corte e Costura"}
            img={"/img/favicon comeia.png"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nihil quae facilis, numquam hic quo similique incidunt, amet dolor
            recusandae animi quos deserunt qui delectus reprehenderit tenetur
            corrupti iusto fuga.
          </MEDIACONTENT>
        </Flex>
      </TemplateBase>
    );
  };
  
  export default grid;
  