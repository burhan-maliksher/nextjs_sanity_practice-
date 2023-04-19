import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { config } from "process";
import clientConfig from "./config/client-config";

// all functions which are going to grab the data
export async function getProjects(): Promise<Project[]> {
  // const client = createClient({
  //   projectId: "gu1fy4xs",
  //   dataset: "production",
  //   apiVersion: "2023-04-18",
  // });

  return createClient(clientConfig).fetch(
    // return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content,
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  // const client = createClient({
  //   projectId: "gu1fy4xs",
  //   dataset: "production",
  //   apiVersion: "2023-04-18",
  // });

  return createClient(clientConfig).fetch(
    groq`*[_type=="project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content,
    }`,
    { slug }
  );
}
