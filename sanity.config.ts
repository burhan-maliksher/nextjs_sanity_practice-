import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const configSanity = defineConfig({
  title: "My Next Sanity Studio",

  projectId: "gu1fy4xs",
  dataset: "production",

  apiVersion: "2023-04-18",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});

export default configSanity;
