import { Box } from "@chakra-ui/react";
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
    <Box d="flex" height="100%" border="1px solid red">
      <ProjectSideBar developmentId={development} />
      <Outlet />
    </Box>
  );
};

export default ProjectsLayout
