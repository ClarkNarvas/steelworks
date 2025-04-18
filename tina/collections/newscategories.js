/**
 * @type {import('tinacms').Collection}
 */
export default {
    label: "News Categories",
    name: "newscategories",
    path: "content/newscategories",
    fields: [
      {
        type: "string",
        label: "Category Title",
        name: "title",
      },
      {
        type: "string",
        label: "Description",
        name: "description",
      },
    ],
    ui: {
      router: ({ document }) => {
        return `/newscategories/${document._sys.filename}`;
      },
    },
  };
  