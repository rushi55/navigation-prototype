import { Box, Button, Spacer, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "remix";

const NEW_BLUE = "#2960F6";

const navigationLinks = [
  { name: "Project Base", route: "/projects/project-base" },
  { name: "Contracts", route: "/projects/contracts" },
  { name: "Payments", route: "/projects/payments" },
  { name: "Jobs", route: "/projects/jobs" },
  { name: "Reports", route: "/projects/reports" },
];
const NavigationLink = ({
  name,
  route,
  developmentId,
}: {
  name: string;
  route: string;
  developmentId?: number;
}) => {
  const { pathname } = useLocation();

  const activeProps = pathname.includes(route)
    ? {
        variant: "solid",
        color: "white",
        bgColor: NEW_BLUE,
        _hover: {
          variant: "ghost",
        },
      }
    : {};

  return (
    <Box>
      <Link to={`${route}?development=${developmentId}`}>
        <Button variant="ghost" {...activeProps}>
          {name}
        </Button>
      </Link>
    </Box>
  );
};

export const ProjectSideBar = ({
  developmentId,
}: {
  developmentId?: number;
}) => {
  const [developments, setDevelopments] = useState<
    { id: number; name: string }[]
  >([]);

  return (
    <Box width="15rem" p={2}>
      <Heading size="md" mb={2} color="gray.400">
        Your projects
      </Heading>
      {developments.map((d) => {
        return (
          <Link key={d.id} to={`/projects/project-base?development=${d.id}`}>
            <Button
              colorScheme="blue"
              bgColor={developmentId === d.id ? "#F0F7FF" : "initial"}
              color={developmentId === d.id ? "#2960F6" : "initial"}
              variant={developmentId === d.id ? "solid" : "ghost"}
              _hover={{
                bgColor: "#2960F6",
                color: "white",
              }}
              mb={2}
            >
              {d.name}
            </Button>
          </Link>
        );
      })}

      <Button
        onClick={() =>
          setDevelopments((d) => [
            ...d,
            { name: `Development ${d.length}`, id: d.length },
          ])
        }
        colorScheme="blue"
        variant="ghost"
      >
        + Add Project
      </Button>
      <Spacer />
      {developmentId || developmentId === 0 ? (
        <>
          {" "}
          <Heading size="md" my={2} color="gray.400">
            Navigation
          </Heading>
          {navigationLinks.map(({ name, route }) => {
            return (
              <NavigationLink
                key="name"
                name={name}
                route={route}
                developmentId={developmentId}
              />
            );
          })}
        </>
      ) : null}
    </Box>
  );
};
