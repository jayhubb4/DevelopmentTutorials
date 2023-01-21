// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: "portfolio",
  basePath: '/sanity',
  projectId: "g8tjpmqr",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});