import React, { Component } from "react"
class BasicComponent extends Component {
  private serverName: String
  private description: String
  private starterDate: String
  private projectStatus: Status
  private footerlabel: String
  private organization: String

  constructor(
    name: String,
    describe: String,
    start: String,
    status: Status,
    label: String,
    organization: String
  ) {
    super(Component)
    this.serverName = name
    this.description = describe
    this.starterDate = start
    this.projectStatus = status
    this.footerlabel = label
    this.organization = organization
  }

  getHeader() {
    let header =
      "<h1 classname={title is-3 acenter kanit}> " +
      this.serverName +
      "on The Duck Creator Server  </h1>"
    let describe =
      "<p className={is-medium acenter}>" + this.description + "<br/>"
    let describe2 =
      "Since" +
      this.starterDate +
      " | " +
      this.organization +
      " | <span className={tag is-primary} " +
      this.projectStatus.toString +
      "</span>  </p><hr/>"
    return header + describe + describe2
  }

  getFooter() {
    return (
      "Project Made with Love by " +
      this.organization +
      " and TDC | " +
      this.footerlabel
    )
  }
}

enum Status {
  run = "Running",
  comeSoon = "Coming Soon",
  finish = "Finished",
  fail = "Failed Project"
}
