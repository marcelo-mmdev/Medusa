import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface LINKProps extends LinkProps {
  //   DetailedHTMLProps<
  //     AnchorHTMLAttributes<HTMLAnchorElement>,
  //     HTMLAnchorElement
  //   >
  children: ReactNode;
  href: string;
}

export const LINK = ({ children, href, ...rest }: LINKProps) => {
  return (
    <NextLink href={href} passHref>
      <Link _hover={{ textDecoration: "none" }} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};
