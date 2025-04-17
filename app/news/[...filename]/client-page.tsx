"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { NewsQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: NewsQuery;
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const content = data.news.body;
  return (
    <>
      <h1 data-tina-field={tinaField(data.news, "title")}>
        <div className="mt-container text-center p-4 pt-10">
          <h1 className="text-4xl mb-4">{data.news.title}</h1>
        </div>
      </h1>
      <div data-tina-field={tinaField(data.news, "body")}>
      <div className="mt-container mt-article mx-auto p-4 mt-5">
        <TinaMarkdown content={content} />
        </div>
      </div>
    </>
  );
}
