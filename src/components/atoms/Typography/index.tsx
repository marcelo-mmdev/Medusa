import { Text, TextProps, useTheme } from "@chakra-ui/react";
import {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
  fontSize?: "6.5rem" | "4rem" | "3.5rem" | "3rem" | "2.5rem";
  color?: string;
  style?: CSSProperties;
}

export interface PProps extends TextProps {}

export const H1 = ({
  children,
  fontSize,
  color,
  style,
  ...rest
}: HeadingProps) => {
  return (
    <h1
      style={{
        fontSize,
        color,
        lineHeight: fontSize,
        ...style,
      }}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  fontSize,
  color,
  style,
  ...rest
}: HeadingProps) => {
  return (
    <h2 style={{ fontSize, color, lineHeight: fontSize, ...style }} {...rest}>
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  fontSize,
  color,
  style,
  ...rest
}: HeadingProps) => {
  return (
    <h3 style={{ fontSize, color, lineHeight: fontSize, ...style }} {...rest}>
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  fontSize,
  color,
  style,
  ...rest
}: HeadingProps) => {
  return (
    <h4 style={{ fontSize, color, lineHeight: fontSize, ...style }} {...rest}>
      {children}
    </h4>
  );
};

export const H5 = ({
  children,
  fontSize,
  color,
  style,
  ...rest
}: HeadingProps) => {
  return (
    <h5 style={{ fontSize, color, lineHeight: fontSize, ...style }} {...rest}>
      {children}
    </h5>
  );
};

export const H6 = ({
  children,
  fontSize,
  color,
  style,
  ...rest
}: HeadingProps) => {
  return (
    <h6 style={{ fontSize, color, lineHeight: fontSize, ...style }} {...rest}>
      {children}
    </h6>
  );
};

export const P = ({ children, ...rest }: PProps) => {
  return <Text {...rest}>{children}</Text>;
};
