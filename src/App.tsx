import React, { Component } from "react";
import "bulma/css/bulma.min.css"

class App extends Component {

  private HandlingAboveSection(webName: String): String {
    let report: String = webName + " Server on the Duck Creator Server";
    return report;
  }

  render() {
    return (
      <div>
        <h1 className="title is-3"> {this.HandlingAboveSection("Theethawat")} </h1>
      </div>
    )

  }
}

export default App;
