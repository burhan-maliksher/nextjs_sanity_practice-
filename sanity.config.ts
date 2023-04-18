import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

const configSanity = defineConfig({
  // name: "default",
  name: "default",
  title: "My Next Sanity Studio",

  projectId: "gu1fy4xs",
  dataset: "production",

  apiVersion: "2023-04-18",
  basePath: "/admin",

  plugins: [
    deskTool(),
    // visionTool()
  ],

  // schema: {
  //   types: schemaTypes,
  // },
});

export default configSanity;
