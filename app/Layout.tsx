import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Navbar } from "./components/Navbar";

type Props = {
  path?: string;
  children: ReactNode;
};

export const Layout = ({ path, children }: Props) => {
  return (
    <Box d="flex" flexDirection="column" height="100vh">
      <Navbar path={path}/>
      <Box flexGrow={100}>{children}</Box>
    </Box>
  );
};
