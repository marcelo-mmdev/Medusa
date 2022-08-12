import {
  Box,
  Flex,
  Icon,
  IconProps,
  Image,
  ImageProps,
  LinkProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { LINK, P, PProps } from "src/components/atoms";

type defaultSizes = "3rem" | "4rem" | "5.5" | "6rem";

type objSize = {
  base?: defaultSizes;
  md?: defaultSizes;
  lg?: defaultSizes;
  xl?: defaultSizes;
};
interface LINKWITHIMGProps extends LinkProps {
  img?: string;
  imgSize?: defaultSizes | objSize;
  href: string;
  text: string;
  icon?: IconType;
  pProps?: PProps;
  imgProps?: ImageProps;
  iconProps?: IconProps;
  variant?: "30%" | "50%";
}

export const LINKWITHICONORIMG = ({
  img,
  imgSize = "3rem",
  href,
  text,
  icon,
  pProps,
  imgProps,
  iconProps,
  variant = "30%",
  ...LinkProps
}: LINKWITHIMGProps) => {
  return (
    <LINK href={href} {...LinkProps}>
      <Flex gap={"1.5rem"} alignItems={"center"}>
        {icon ? (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            bg={"menu.hover"}
            w={imgSize}
            h={imgSize}
            borderRadius={variant}
          >
            <Icon as={icon} {...iconProps} />
          </Flex>
        ) : (
          <Image
            src={img || "/img/empty-image.png"}
            w={imgSize}
            h={imgSize}
            borderRadius={variant}
            {...imgProps}
          />
        )}
        <P {...pProps}>{text}</P>
      </Flex>
    </LINK>
  );
};
