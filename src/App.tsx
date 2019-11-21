import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import FirebaseConfig from "./FirebaseConfig"
import Firebase from "firebase"
import BasicComponent from "./BasicComponent"
import Status from "./status"
import IMyComponentState from "./MyComponentState"

var firebase = Firebase.initializeApp(FirebaseConfig)
var database = firebase.database()

class App extends Component<any, IMyComponentState> {
  constructor(props: any) {
    super(props)
    // this.state = {
    //   basicComponent: null
    // }
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

        var pageBasicComponent = {
          serverName: serverName,
          description: serverDescribe,
          starterDate: serverStart,
          projectStatus: serverStatus,
          footerLabel: serverLabel,
          organization: serverOrganize
        }

        this.setState({
          basicComponent: pageBasicComponent
        })
      })
  }

  render() {
    var pageHeading: String = this.state.basicComponent.serverName
    return <div>{pageHeading}</div>
  }
}

export default App
