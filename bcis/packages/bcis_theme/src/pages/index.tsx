import React from "react"
import { connect } from "frontity"
import Home from "./home/home"

const Root = () => {

  return (
    <>
      <Home />
    </>
  )
}

export default connect(Root)