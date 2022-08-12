import { Box, Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MdNotificationsActive } from "react-icons/md";

interface GridMainProps {
  children: ReactNode;
  rightMenu?: ReactNode;
  leftMenu?: ReactNode;

  // headerRight?: ReactNode;
  headerCenter?: ReactNode;
  headerLeft?: ReactNode;
}

export const GridMain = ({
  children,
  rightMenu,
  headerCenter,
  leftMenu,
  headerLeft,
}: // headerRight,
GridMainProps) => {
  const maxHeightHeader = { base: "30vh", xl: "10vh" };
  const maxHeightContent = { base: "70vh", xl: "90vh" };
  const router = useRouter();
  return (
    <SimpleGrid columns={1} gap={"1.5rem"} minH={"100vh"}>
      <GridItem
        as={"header"}
        colSpan={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
        display={"flex"}
        flexDirection={"column"}
        gap={"1.5rem"}
        bg={"red"}
        h={maxHeightHeader}
      >
        {/* <Flex w={"100%"} flexDirection={"column"} gap={"1.5rem"} p={".1rem"}>{header}</Flex> */}
        <SimpleGrid
          // bg={"blue"}
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
          // gap={"1.5rem"}
          h={"100%"}
        >
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            colSpan={{ base: 1, md: 3, lg: 1, xl: 1 }}
            bg={"yellow"}
          >
            {headerLeft}
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            colSpan={{ base: 1, md: 2, lg: 2, xl: 2 }}
            padding={"1.6rem"}
            // bg={"black"}
          >
            {headerCenter}
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            gap={"1.5rem"}
            alignItems={"center"}
            colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
            // bg={"blue"}
          >
            <MdNotificationsActive size={"2.5rem"} />
            <Image
              src={"/img/avatar.png"}
              w={{ base: "5.5rem", md: "6rem" }}
              h={{ base: "5.5rem", md: "6rem" }}
              borderRadius={"1.6rem"}
            />

            {/* {headerRight} */}
          </GridItem>
        </SimpleGrid>
      </GridItem>

      <GridItem
        colSpan={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
        h={maxHeightContent}
        bg={"gray"}
      >
        <SimpleGrid
          bg={"red"}
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
          h={"100%"}
        >
          {leftMenu && (
            <GridItem
              as={"aside"}
              colSpan={{ base: 1, xl: 1 }}
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              <Flex
                w={"100%"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                gap={"1.5rem"}
                p={"3rem"}
                overflow={"auto"}
                bg={"primary.400"}
                borderTopEndRadius={"1rem"}
                // h={"90vh"}
              >
                {leftMenu}
                <Text fontSize={"1rem"} color={"black"} align={"center"}>
                  Developed by Comeia
                </Text>
              </Flex>
            </GridItem>
          )}

          <GridItem
            as={"main"}
            flex={1}
            colSpan={{ base: 1, md: 2, lg: 2, xl: 2 }}
          >
            <Flex
              w={"100%"}
              flexDirection={"column"}
              gap={"1.5rem"}
              p={".1rem"}
              overflow={"auto"}
            >
              {children}
            </Flex>
          </GridItem>

          {rightMenu && (
            <GridItem
              as={"aside"}
              // mr={"1.5rem"}
              colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }}
            >
              <Flex
                w={"100%"}
                flexDirection={"column"}
                gap={"1.5rem"}
                p={".1rem"}
                overflow={"auto"}
              >
                {rightMenu}
              </Flex>
            </GridItem>
          )}
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
};
