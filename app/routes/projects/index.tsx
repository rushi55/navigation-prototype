import type { LoaderFunction} from "remix";
import { Outlet, redirect } from "remix";

export let loader: LoaderFunction = () => redirect("/projects/project-base");

export const Projects = () => <Outlet />;

export default Projects;
