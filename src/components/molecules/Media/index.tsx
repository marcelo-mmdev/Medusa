import { Flex, Image } from "@chakra-ui/react";
import { Card, H1, H2, P } from "src/components/atoms";
import { LINKWITHICONORIMG } from "src/components/molecules/LinkWithIconOrImg";

interface MediaProps {
  img?: string;
  title: string;
  subTitle?: string;
  children: string;
}

export const MEDIACONTENT = ({
  img,
  title,
  subTitle,
  children,
}: MediaProps) => {
  return (
    <Card>
      <Flex
        justifyContent={"start"}
        alignItems={"center"}
        gap={"1.6rem"}
        mb={"3rem"}
      >
        <LINKWITHICONORIMG
          variant={"30%"}
          fontSize={"2.5rem"}
          href="#"
          img={img}
          title={title}
          text={title}
          imgSize={{ base: "6rem" }}
          pProps={{ fontSize: "2.5rem" }}
        />
      </Flex>
      <H2 fontSize="2.5rem" style={{ marginBottom: "1.6rem" }}>
        {subTitle}
      </H2>
      <P>{children}</P>
    </Card>
  );
};
