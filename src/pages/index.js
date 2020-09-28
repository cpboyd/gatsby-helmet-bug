import React from "react"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet
        htmlAttributes={{ className: "home" }}
        bodyAttributes={{ className: "root" }}
      />
      <div>Hello world!</div>
    </>
  )
}
