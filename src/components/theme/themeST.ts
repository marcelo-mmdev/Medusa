import { extendTheme } from "@chakra-ui/react";

export const ThemeST = extendTheme({
  colors: {
    primary: {
      "300": "#8D7CD1",
      "400": "#644FBC",
      "600": "#404040",
    },
    secondary: {
      "300": "#26BAF5",
      "600": "#0A5DA4",
      "900": "#062958",
    },
    light: {
      "100": "#efefef",
    },
    text: {
      primary: "#FFFFFF",
    },
    menu: {
      primary: "#FFFFFF",
      border: "#FFFFFF",
      hover: "#D9D8D87A",
    },
    input: {
      bg: "#D9D8D87A",
    },
    button: {
      text: "#FFFFFF",
      secondary: "#C4C4C4",
    },
  },

  fonts: {
    heading: "Abel",
    body: ["Abel", "Vazirmatn"],
  },
  // fontSizes: {
  //   xs: "1rem",
  //   sm: "1.2rem",
  //   md: "1.6rem",
  //   lg: "2rem",
  //   xl: "3rem",
  //   "2xl": "4rem",
  //   "3xl": "5rem",
  //   "4xl": "6rem",
  //   "5xl": "7rem",
  //   "6xl": "8rem",
  //   "7xl": "9rem",
  //   "8xl": "10rem",
  //   "9xl": "11rem",
  // },
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
        body: {
          bg: "#EFEFEF",
          fontFamily: "bahnschrift, roboto",
          boxSizing: "border-box",
          color: "primary.400",
          label: {
            color: "black",
            fontSize: "1.5rem",
          },
          h1: {
            fontSize: "3.5rem",
            lineHeight: "4.5rem",
          },
          h2: {
            fontSize: "3rem",
            lineHeight: "3.5rem",
          },
          h3: {
            fontSize: "2.5rem",
            lineHeight: "2.5rem",
          },
          h4: {
            fontSize: "2rem",
            lineHeight: "2rem",
          },
          h5: {
            fontSize: "1.5rem",
            lineHeight: "2rem",
          },
          h6: {
            fontSize: "1rem",
            lineHeight: "2rem",
          },
          p: {
            fontSize: "2rem",
          },
          a: {
            fontSize: "2rem",
            _hover: {
              color: "primary.300",
            },
          },
        },
      },
    },
  },
});
