import {
  Flex,
  InputGroup,
  InputAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { INPUT, BUTTON, Card } from "../../atoms";
import { AddIcon, DragHandleIcon, SearchIcon } from "@chakra-ui/icons";
import React from "react";

interface SEARCHBARprops {}

export const SEARCHBARWITHBUTTON = ({}: SEARCHBARprops) => {
  return (
    <Card>
      <Flex
        flexDir={"row"}
        alignItems="center"
        flexWrap={"wrap"}
        justifyContent="center"
        gap={"1.8rem"}
      >
        <InputGroup flex={2} minW={"20rem"}>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.6em"
            children={<SearchIcon />}
          />
          <INPUT
            placeholder="Pesquisa..."
            color={"primary.300"}
            variant={"filled"}
            fontSize="1.8em"
            p={"0px 30px"}
            borderRadius={"none"}
            borderWidth={"0px 0px 1px 0px"}
            backgroundColor={"transparent"}
            borderColor={"primary.400"}
            _focus={{}}
            marginTop={"3px"}
          />
          <InputRightElement
            flex={1}
            fontSize="1.6em"
            children={<DragHandleIcon color="primary.300" />}
          />
        </InputGroup>
        <BUTTON
          bg={"primary.300"}
          rightIcon={<AddIcon />}
          onClick={() => {}}
          fontWeight="normal"
          padding={"20px 45px"}
          iconSpacing="20px"
          borderRadius={"8px"}
        >
          Cadastre seu serviço
        </BUTTON>
      </Flex>
    </Card>
  );
};
