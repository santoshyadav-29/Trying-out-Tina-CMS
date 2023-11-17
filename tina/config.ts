import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable


export default defineConfig({
  branch:process.env.VERCEL_GIT_COMMIT_REF,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,

          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,

          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: false,
          },
          {
            type: "string",
            name: "heroImage",
            label: "Hero Image",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
