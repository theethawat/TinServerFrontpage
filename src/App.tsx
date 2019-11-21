import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import FirebaseConfig from "./FirebaseConfig"
import Firebase from "firebase"
import BasicComponent from "./BasicComponent"
import Status from "./status"
import IMyComponentState from "./MyComponentState"
import IMyComponentProp from "./MyComponentProp"

var firebase = Firebase.initializeApp(FirebaseConfig)
var database = firebase.database()

class App extends Component<any, IMyComponentState> {
  constructor(props: any) {
    super(props)
    this.state = {
      header: "",
      footer: ""
    }
  }

  componentDidMount() {
    database
      .ref("/ServerPage/TDC-Server/ServerInfo")
      .once("value")
      .then(snapshot => {
        var serverName: String =
          (snapshot.val() && snapshot.val().Name) || "Anonymous"
        var serverDescribe: String =
          (snapshot.val() && snapshot.val().Describe) || "Anonymous"
        var serverStart: String =
          (snapshot.val() && snapshot.val().Start) || "Anonymous"
        var serverStatus: Status =
          (snapshot.val() && snapshot.val().Status) || "Anonymous"
        var serverLabel: String =
          (snapshot.val() && snapshot.val().label) || "Anonymous"
        var serverOrganize: String =
          (snapshot.val() && snapshot.val().Organization) || "Anonymous"

        var pageBasicComponent: BasicComponent = new BasicComponent(
          serverName,
          serverDescribe,
          serverStart,
          serverStatus,
          serverLabel,
          serverOrganize
        )

        var heading = pageBasicComponent.getHeader()
        var footer = pageBasicComponent.getFooter()

        this.setState({
          header: heading,
          footer: footer
        })
      })
  }

  render() {
    var pageHeading: String = this.state.header
    var pageFooter: String = this.state.footer
    return (
      <div>
        {pageHeading}
        <br />
        <br />
        {pageFooter}
      </div>
    )
  }
}

export default App
