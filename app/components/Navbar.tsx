/* eslint-disable react/jsx-key */
import { AddIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Children } from "react";
import { Link as RemixLink, useLocation } from "remix";
import { Logo } from "./Logo";

type Props = {
  path?: string;
};

const links = [
  { name: "Projects", route: "/projects" },
  { name: "Customers", route: "/customers" },
  { name: "Vendors", route: "/vendors" },
];

const NavLink = ({ route, name }: { route: string; name: string }) => {
  const location = useLocation();
  const isFocusedLink = location?.pathname?.includes(route) || false;
  return (
    <Link
      to={route}
      as={RemixLink}
      _hover={{ borderBottom: "1px solid #2960F6" }}
      borderBottom={isFocusedLink ? "1px solid #2960F6" : ""}
      mx={3}
      color={isFocusedLink ? "#2960F6" : "#394E65"}
      fontSize="xl"
      fontWeight="bold"
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
      bgColor="whiteAlpha.800"
    >
      <Box>
        <Logo />
      </Box>
      <Box>
        {Children.toArray(
          links.map((l) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <NavLink name={l.name} route={l.route} />
          ))
        )}
      </Box>
      <Box d="flex">
        <IconButton
          aria-label="add item"
          icon={<AddIcon />}
          colorScheme="blue"
          variant="ghost"
          mx={1}
        />
        <IconButton aria-label="search icon" icon={<SearchIcon />} mx={1}>
          Plus
        </IconButton>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Settings"
            icon={<SettingsIcon />}
            mx={1}
          />
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
