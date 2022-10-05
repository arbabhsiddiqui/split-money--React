import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f8f7ef",
      100: "#f2eee0",
      200: "#ebe6d1",
      300: "#e4ddc2",
      400: "#ddd5b3",
      500: "#d6cda4",
      600: "#d6cda4",
      700: "#afa787",
      800: "#89836a",
      900: "#65614f",
    },
  },

  fonts: {
    heading: `Noto Sans, cursive, ${base.fonts.heading}`,
    body: `Noto Sans, ${base.fonts.body}`,
  },
});

export default theme;
