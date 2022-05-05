import React from "react"
import { connect } from "frontity"

const Root = ({ state }) => {
  const data = state.source.get("/");
  const page = state.source.page[data.id]
  console.log({ page })
  return (
    <>
      <h1>Frontity Workshop</h1>
      <p>Current URL: {state.router.link}</p>
    </>
  )
}

export default connect(Root)