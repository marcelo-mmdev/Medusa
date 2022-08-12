import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconBaseProps } from "react-icons/lib";
import { MdArrowBack, MdChevronLeft } from "react-icons/md";

interface BUTTONProps extends ButtonProps {}

interface BUTTONBACKProps {
  backButtonProps?: ButtonProps;
  buttonProps?: BUTTONProps;
  iconProps?: IconBaseProps;
  children: ReactNode;
}

export const BUTTON = ({ children, ...rest }: BUTTONProps) => {
  return (
    <Button
      bg={"primary.400"}
      color={"button.text"}
      p={"1.5rem 2rem"}
      fontSize={"1.5rem"}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const BUTTONBACK = ({
  buttonProps,
  backButtonProps,
  iconProps,
  children,
}: BUTTONBACKProps) => {
  return (
    <Flex
      w={"fit-content"}
      bg={"button.secondary"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"1.2rem"}
    >
      <Button
        p={"1.5rem 2rem"}
        fontSize={"1.5rem"}
        bg={"button.secondary"}
        {...backButtonProps}
      >
        <MdArrowBack size={"2rem"} {...iconProps} />
      </Button>

      <BUTTON {...buttonProps}>{children}</BUTTON>
    </Flex>
  );
};
