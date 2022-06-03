import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link, Outlet } from "remix";
import { Box } from "@chakra-ui/react";
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
      <Box>
        <Box d="flex">
          <Link to="/projects/project-base">Overview</Link>
          <Link to="/projects/project-base/cost-system">Cost System</Link>
          <Link to="/projects/project-base/lots">Lots</Link>
          <Link to="/projects/project-base/plans">Plans</Link>
          <Link to="/projects/project-base/options">Options</Link>
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsLayout;
