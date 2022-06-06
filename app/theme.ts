import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#FFFFFF",
        color: "#394E65",
        lineHeight: "tall",
      },
    },
  },
  fonts: {
    heading: "'Sora', sans-serif;",
    body: "'Sora', sans-serif;",
  },
});
