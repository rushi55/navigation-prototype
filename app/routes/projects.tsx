import { Box, Heading } from "@chakra-ui/react";
import type { LoaderFunction } from "remix";
import { Outlet, useLoaderData } from "remix";
import { ProjectSideBar } from "~/components/ProjectSideBar";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const development = url.searchParams.get("development");

  return { development: development ? +development : null };
};

const ProjectsLayout = () => {
  const { development } = useLoaderData();
  return (
    <Box d="flex" height="100%">
      <ProjectSideBar developmentId={development} />
      {development === 0 || development ? (
        <Outlet />
      ) : (
        <Box>
          <Heading as="h1">Select or create a development </Heading>
        </Box>
      )}
    </Box>
  );
};

export default ProjectsLayout;
