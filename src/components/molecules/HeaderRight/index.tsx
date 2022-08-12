import { Flex, Image } from "@chakra-ui/react";
import { MdNotificationsActive } from "react-icons/md";

export const HEADERRIGHT = () => {
  return (
    <Flex p={"1.6rem"} h={"100%"} alignItems={"center"} justifyContent={"end"}>
      <MdNotificationsActive size={"2.5rem"} />
      <Image
        src={"/img/avatar.png"}
        w={{ base: "5.5rem", md: "6rem" }}
        h={{ base: "5.5rem", md: "6rem" }}
        borderRadius={"1.6rem"}
      />
    </Flex>
  );
};
