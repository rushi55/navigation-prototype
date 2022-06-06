import type { LoaderFunction } from "remix";
import { Link, Outlet, useLoaderData } from "remix";
import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";

const projectBaseTabs = ["overview", "cost-system", "lots", "plans", "options"];

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const development = url.searchParams.get("development");

  const currentTabIndex = projectBaseTabs.findIndex((tabName) =>
    url.pathname.includes(tabName)
  );

  return { development: development ? +development : null, currentTabIndex };
};

const ProjectBaseLayout = () => {
  const { development, currentTabIndex } = useLoaderData();
  return (
    <Box>
      <Tabs tabIndex={currentTabIndex}>
        <TabList>
          <Tab>
            <Link to={`/projects/project-base?development=${development}`}>
              Overview
            </Link>
          </Tab>
          <Tab>
            <Link
              to={`/projects/project-base/cost-system?development=${development}`}
            >
              Cost System
            </Link>
          </Tab>
          <Tab>
            <Link to={`/projects/project-base/lots?development=${development}`}>
              Lots
            </Link>
          </Tab>
          <Tab>
            <Link
              to={`/projects/project-base/plans?development=${development}`}
            >
              Plans
            </Link>
          </Tab>
          <Tab>
            <Link
              to={`/projects/project-base/options?development=${development}`}
            >
              Options
            </Link>
          </Tab>
        </TabList>
      </Tabs>
      <Box width="calc(100vw - 15rem)">
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProjectBaseLayout;
