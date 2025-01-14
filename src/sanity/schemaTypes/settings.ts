// ./src/sanity/schemaTypes/post.ts
import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  type: "document",

  fields: [
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return { ...selection, title: "Settings" };
    },
  },
});
