/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true,
    },
    {
      type: "string",
      label: "Category",
      name: "category",
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/news/${document._sys.filename}`;
    },
  },
};
