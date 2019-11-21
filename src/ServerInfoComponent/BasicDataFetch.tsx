import FirebaseConfig from "../ModelInterface/FirebaseConfig"
import Firebase from "firebase"
import Status from "../ModelInterface/status"
import BasicComponent from "./BasicComponent"
import React, { Component } from "react"
var firebase = Firebase.initializeApp(FirebaseConfig)
var database = firebase.database()

interface IBasicDataFetchState {
  pageBasicComponent: BasicComponent
}

class BasicDataFetch extends Component<any, IBasicDataFetchState> {
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
      pageBasicComponent: construcBasicComponent
    }
  }

  componentDidMount() {
    console.log("Programing Coming to ComponentDidMount")
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
          (snapshot.val() && snapshot.val().Status) || Status.comeSoon
        var serverLabel: String =
          (snapshot.val() && snapshot.val().label) || "Anonymous"
        var serverOrganize: String =
          (snapshot.val() && snapshot.val().Organization) || "Anonymous"

        var pageBasicComponentVariable: BasicComponent = {
          serverName: serverName,
          description: serverDescribe,
          starterDate: serverStart,
          projectStatus: serverStatus,
          footerLabel: serverLabel,
          organization: serverOrganize
        }

        this.setState({
          pageBasicComponent: pageBasicComponentVariable
        })
      })
  }

  public getBasicData() {
    return this.state.pageBasicComponent
  }
}

export default BasicDataFetch
