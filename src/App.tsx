import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import "./TinCSS.css"
import "fontawesome/index"
import Header from "./ServerInfoComponent/Header"
class App extends Component<any, any> {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App
