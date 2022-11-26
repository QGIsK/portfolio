import { json, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

// TODO :: Maybe refactor this to kv that updates at buildtime or smth?
// TODO :: Typedefine
const projects: any[] = []

import * as HelloWorld from './hello-world.mdx'
projects.unshift(HelloWorld)

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

type LoaderData = { title: string, slug: string, description: string, featured_image: string }[]

export const loader: LoaderFunction = () => {
  return json<LoaderData>(projects.map(mod => postFromModule(mod)));
}

const Projects = () => {
  const projects = useLoaderData<typeof loader>() as LoaderData

  console.log(projects)

  return (<>
    {projects.map(project => (
      <Link key={project.title} to={project.slug}>{project.title} <img src={project.featured_image} /></Link>
    ))}
  </>)
}

export default Projects;