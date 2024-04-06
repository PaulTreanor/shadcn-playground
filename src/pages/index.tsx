import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Button } from "@/components/ui/button"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-gray-200">
      <h1>hello</h1>
      <Button>Hello</Button>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
