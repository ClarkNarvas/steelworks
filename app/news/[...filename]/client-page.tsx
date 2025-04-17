"use client"
import { tinaField, useTina } from "tinacms/dist/react"
import type { NewsQuery } from "../../../tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { motion } from "framer-motion"

interface ClientPageProps {
  query: string
  variables: {
    relativePath: string
  }
  data: NewsQuery
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const content = data.news.body

  // Format the date to be more human-friendly
  const formatDate = (dateString: string) => {
    if (!dateString) return ""

    const date = new Date(dateString)

    // Check if the date is valid
    if (isNaN(date.getTime())) return dateString

    // Format the date as "Month Day, Year"
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formattedDate = formatDate(data.news.date)

  return (
    <>
      <div data-tina-field={tinaField(data.news, "title")}>
        <div className="mt-container text-center p-4 pt-10">
          <motion.h1
            className="text-4xl mb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.99],
            }}
          >
            {data.news.title}
          </motion.h1>
          <motion.div
            className="text-gray-500 mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.6, 0.05, 0.01, 0.99],
            }}
          >
            {formattedDate}
          </motion.div>
        </div>
      </div>
      <motion.div
        data-tina-field={tinaField(data.news, "body")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="mt-container mt-article mx-auto p-4 mt-5">
          <TinaMarkdown content={content} />
        </div>
      </motion.div>
    </>
  )
}
