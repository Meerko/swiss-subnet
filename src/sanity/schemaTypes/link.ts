// ./src/sanity/schemaTypes/post.ts
import { defineField } from "sanity";

export const link = defineField({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "type",
      type: "string",
      title: "Type of Link",
      options: {
        list: [
          { title: "URL", value: "url" },
          { title: "Page Reference", value: "reference" },
          { title: "File Download", value: "file" },
        ],
        layout: "radio",
      },
    },
    // URL
    {
      name: "url",
      type: "url",
      title: "URL",
      hidden: ({ parent }) => parent?.type !== "url", // Show only if type is "url"
    },
    // Reference
    {
      name: "reference",
      type: "reference",
      title: "Page Reference",
      to: [{ type: "page" }], // Adjust to your schema
      hidden: ({ parent }) => parent?.type !== "reference", // Show only if type is "reference"
    },
    // File
    {
      name: "file",
      type: "file",
      title: "File Download",
      hidden: ({ parent }) => parent?.type !== "file", // Show only if type is "file"
    },
  ],
});
