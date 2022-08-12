import {
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  useTheme,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { MdHome, MdSettings } from "react-icons/md";
import { H1, LINK, P } from "src/components/atoms";
import { LIST, LISTITEM } from "src/components/atoms/List";
import { LINKWITHICONORIMG } from "src/components/molecules/LinkWithIconOrImg";

type menuItem = {
  href: string;
  name: string;
  icon?: IconType;
  img?: string;
};

interface MENUProps {
  img?: string;
  title: string;
  menu: menuItem[];
  withHeader?: boolean;
  variant?: "row" | "column";
}

export const MENULIST = ({
  img,
  title,
  menu,
  withHeader = true,
  variant = "column",
}: MENUProps) => {
  const theme = useTheme();

  return (
    <Flex flexDirection={variant}>
      <Flex
        justifyContent={"center"}
        alignItems={"start"}
        gap={"1.6rem"}
        flexDirection={variant}
        borderRightWidth={variant === "row" && "0.1rem"}
        pr={variant === "row" && "1.6rem"}
        mb={variant === "column" && "2rem"}
      >
        {withHeader && (
          <LINKWITHICONORIMG
            variant={"30%"}
            fontSize={"2.5rem"}
            color={"menu.primary"}
            href="#"
            text={title}
            imgSize={{ base: "6rem" }}
            pProps={{ fontSize: "2.5rem" }}
          />
        )}
      </Flex>

      <LIST flexDirection={variant}>
        {menu &&
          menu.map((link, i) => (
            <LISTITEM
              key={i}
              padding={"1rem"}
              borderBottomColor={"menu.border"}
              borderBottomStyle={"solid"}
              borderBottomWidth={
                i !== menu.length - 1 && variant === "column" && "0.1rem"
              }
              borderRightWidth={
                i !== menu.length - 1 && variant === "row" && "0.1rem"
              }
              cursor={"pointer"}
            >
              <LINKWITHICONORIMG
                color={"menu.primary"}
                href={link.href}
                text={link.name}
                icon={link.icon}
                img={link.img}
              />
            </LISTITEM>
          ))}
      </LIST>
    </Flex>
  );
};
