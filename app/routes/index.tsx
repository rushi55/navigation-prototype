import { Box, Heading } from "@chakra-ui/react";
import { Link } from "remix";

export default function Index() {
  return (
    <Box
      fontFamily="system-ui, sans-serif"
      border="1px solid red"
      lineHeight={1.4}
    >
      <Heading as="h1">
        Welcome to Kernel
      </Heading>
      <Link to="/projects/project-base">Go to dashboard</Link>
    </Box>
  );
}
