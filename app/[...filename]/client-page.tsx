"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import Image from "next/image";
import type { PageQuery } from "../../tina/__generated__/types";


interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}
  



export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body; 
  return (

    <div className="flex flex-col md:flex-row w-full">
      {/* Image section - on top for mobile, left side for desktop */}
      <div className="w-full h-96 md:h-screen md:w-1/2 relative">
        <Image
          src="/uploads/mtportrait.png"
          alt="Marie Tidball Portrait"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content section - below image for mobile, right side for desktop */}
      <div className="w-full  md:w-1/2 p-8 grid">
        <div className="my-auto text-center">
          <h1 className="text-2xl md:text-3xl mb-3">
            Marie Tidball is <i>your</i> MP for <br /> Penistone and Stocksbridge.
          </h1>
          <p>
            If you live in the Penistone and Stocksbridge area and have an issue you care about or a problem that needs
            addressing, please let Marie and her team know.
          </p>
          <a
            className="block p-3 bg-rose-600 rounded-full text-white mt-6 font-bold hover:bg-rose-700"
            href="mailto:marie.tidball.casework@parliament.uk"
          >
            Get in touch with Marie Tidball and her team &gt;
          </a>
          <a className="block p-3  " href="https://members.parliament.uk/FindYourMP">
            Is Marie my MP? &gt;
          </a>

          {/* 
          <hr className="text-white mt-5 mb-5" />

          <p>Stay updated on social media</p>

          <a href="https://www.facebook.com/MarieTidballLabour"><i className="bi bi-facebook"></i>dfsd</a>
          <a href="https://www.facebook.com/MarieTidballLabour"><i className="bi bi-twitter"></i>dsfdsf</a>
          */}
        </div>
      </div>
      <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div>
    </div>

  )
}


