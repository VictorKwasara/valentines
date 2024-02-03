import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero/>
      // <div id="pink">
      //   pink
      // </div>
      // <div id="white">
      //   white
      // </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Love</title>
