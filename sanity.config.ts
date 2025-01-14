import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const singletonTypes = new Set(["settings", "homepage"]);
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  projectId: "4jobao9y",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Settings")
              .id("settings")
              .child(
                S.document().schemaType("settings").documentId("settings")
              ),
            S.listItem()
              .title("Homepage")
              .id("homepage")
              .child(
                S.document().schemaType("homepage").documentId("homepage")
              ),

            S.documentTypeListItem("post").title("Blog Posts"),
            S.documentTypeListItem("page").title("Pages"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
