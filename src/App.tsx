import React, { Component } from "react"
import "bulma/css/bulma.min.css"

import BasicComponent from "./BasicComponent"
import Status from "./status"
import IMyComponentState from "./MyComponentState"
import BasicData from "./BasicDataFetch"

class App extends Component<any, IMyComponentState> {
  constructor(props: any) {
    super(props)
    var construcBasicComponent: BasicComponent = {
      serverName: "",
      description: "",
      starterDate: "",
      projectStatus: Status.tba,
      footerLabel: "",
      organization: ""
    }
    this.state = {
      basicComponent: construcBasicComponent
    }
  }

  render() {
    var pageHeading: String = this.state.basicComponent.serverName
    return <div>{pageHeading}</div>
  }
}

export default App
