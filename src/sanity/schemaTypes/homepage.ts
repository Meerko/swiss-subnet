// ./src/sanity/schemaTypes/post.ts
import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  type: "document",
  fields: [
    {
      name: "heroSection",
      type: "object",
      fields: [
        {
          name: "headline",
          type: "string",
        },
        {
          name: "subHeadline",
          type: "string",
        },
        {
          name: "ascii",
          type: "blockContent",
        },
        {
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
        },
      ],
    },
    {
      name: "aboutSection",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "text",
          type: "blockContent",
        },
        {
          name: "data",
          type: "array",
          of: [
            {
              name: "card",
              type: "object",
              fields: [
                {
                  name: "number",
                  type: "string",
                },
                {
                  name: "text",
                  type: "string",
                },
                {
                  name: "subText",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "featuresSection",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "headline",
          type: "string",
        },
        {
          name: "cards",
          type: "array",
          of: [
            {
              name: "card",
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "text",
                },
                {
                  name: "number",
                  type: "string",
                },
                {
                  name: "title",
                  type: "string",
                },
                {
                  name: "text",
                  type: "text",
                  rows: 3,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "subnetSection",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "cards",
          type: "array",
          of: [
            {
              name: "card",
              type: "object",
              fields: [
                {
                  name: "title",
                  type: "string",
                },
                {
                  name: "text",
                  type: "text",
                  rows: 3,
                },
                {
                  name: "link",
                  type: "url",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "nftSection",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "headline",
          type: "string",
        },
        {
          name: "text",
          type: "text",
          rows: 3,
        },
        {
          name: "ascii",
          type: "text",
        },
      ],
    },
    {
      name: "newsSection",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "headline",
          type: "string",
        },
        {
          name: "news",
          type: "array",
          of: [
            {
              name: "post",
              type: "reference",
              to: [{ type: "post" }],
            },
          ],
        },
      ],
    },
    {
      name: "contactSection",
      type: "object",
      fields: [
        {
          name: "asciiTitle",
          type: "text",
        },
        {
          name: "text",
          type: "text",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return { ...selection, title: "Homepage" };
    },
  },
});
