/* eslint-disable react/jsx-key */
import { Box, Link } from "@chakra-ui/react";
import { Children } from "react";
import { Link as RemixLink } from "remix";

type Props = {
  path?: string;
};

const links = [
  { name: "Projects", route: "/projects" },
  { name: "Customers", route: "/customers" },
  { name: "Vendors", route: "/vendors" },
];

const NavLink = ({
  route,
  name,
  currentPath,
}: {
  route: string;
  name: string;
  currentPath?: string;
}) => {
  const isFocusedLink = currentPath?.includes(route) || false;
  return (
    <Link
      to={route}
      as={RemixLink}
      _hover={{ borderBottom: "1px solid #4299E1" }}
      borderBottom={isFocusedLink ? "1px solid #4299E1" : ""}
      mx={3}
      color={isFocusedLink ? 'blue.400' : ''}
    >
      {name}
    </Link>
  );
};

export const Navbar = ({ path }: Props) => {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      height="70px"
      px={3}
      bgColor='whiteAlpha.800'
    >
      <Box>Kernel</Box>
      <Box>
        {Children.toArray(
          links.map((l) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <NavLink name={l.name} route={l.route} currentPath={path} />
          ))
        )}
      </Box>
      <Box d="flex">
        <Box>Plus</Box>
        <Box>Search</Box>
        <Box>Avatar</Box>
      </Box>
    </Box>
  );
};
