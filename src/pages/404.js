import * as React from "react"
import Layout from "../components/layout"



const NotFoundPage = () => {
  return (
    <main>
      <Layout>
        <h1>Not found</h1>
        <p>Sorry, we couldn't find what you were looking for.</p>
      </Layout>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
