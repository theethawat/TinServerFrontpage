import React, { Component } from "react"
import "bulma/css/bulma.min.css"

import BasicComponent from "./ServerInfoComponent/BasicComponent"
import Status from "./ModelInterface/status"
import IMyComponentState from "./FrontpageInterface/MyComponentState"
import BasicData from "./ServerInfoComponent/BasicDataFetch"

class App extends Component<any, IMyComponentState> {
  private basicDataClass: BasicData
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
    this.basicDataClass = new BasicData(construcBasicComponent)
    var basicData = this.basicDataClass.getBasicData()
    this.state = {
      basicComponent: basicData
    }
  }
  componentDidMount() {
    this.setState({
      basicComponent: this.basicDataClass.getBasicData()
    })
  }
  render() {
    var stateComponent = this.state.basicComponent
    var heading: String = stateComponent.projectStatus
    return (
      <div>
        <h1>Hi {heading}</h1>
      </div>
    )
  }
}

export default App
