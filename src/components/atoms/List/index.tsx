import {
  ListItem,
  ListItemProps,
  ListProps,
  UnorderedList,
} from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes, LiHTMLAttributes } from "react";

interface LISTProps extends ListProps {}

interface LISTITEMProps extends ListItemProps {}

export const LIST = ({ children, ...rest }: LISTProps) => {
  return (
    <UnorderedList
      display={"flex"}
      flexDirection={"column"}
      listStyleType={"none"}
      {...rest}
    >
      {children}
    </UnorderedList>
  );
};

export const LISTITEM = ({ children, style, ...rest }: LISTITEMProps) => {
  return (
    <ListItem padding={"1.5rem"} {...rest}>
      {children}
    </ListItem>
  );
};
