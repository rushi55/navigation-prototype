import { Box, Button, Spacer, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation, useParams } from "remix";

export const ProjectSideBar = ({
  developmentId,
}: {
  developmentId?: number;
}) => {
  const [developments, setDevelopments] = useState([
    { name: "Development 0", id: 0 },
  ]);

  return (
    <Box width="15rem" p={2}>
      <Heading size="md" mb={2} color="gray.400">
        Your projects
      </Heading>
      {developments.map((d) => (
        <Link key={d.id} to={`/projects/project-base?development=${d.id}`}>
          <Button
            colorScheme="blue"
            variant={developmentId === d.id ? "solid" : "ghost"}
            mb={2}
          >
            {d.name}
          </Button>
        </Link>
      ))}

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
      <Heading size="md" mb={2} color="gray.400">
        Navigation
      </Heading>
      <Box>Project Base</Box>
      <Box>Contracts</Box>
      <Box>Payments</Box>
      <Box>Jobs</Box>
      <Box>Reports</Box>
    </Box>
  );
};
