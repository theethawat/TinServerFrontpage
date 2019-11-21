import React, { Component } from "react"
import "bulma/css/bulma.min.css"
import FirebaseConfig from "./FirebaseConfig"
import Firebase from "firebase"
var firebase = Firebase.initializeApp(FirebaseConfig)
var database = firebase.database()

class App extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      serverName: "",
      serverDescribe: "",
      serverOrganize: "",
      serverStrat: "",
      serverStatus: "",
      serverLabel: ""
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 className="title is-3"> </h1>
      </div>
    )
  }
}

export default App
