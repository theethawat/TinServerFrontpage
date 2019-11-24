import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import "./TinCSS.css"
import "fontawesome/index"
import IMyComponentState from "./FrontpageInterface/MyComponentState"
import Header from "./ServerInfoComponent/Header"
class App extends Component<any, IMyComponentState> {
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App
