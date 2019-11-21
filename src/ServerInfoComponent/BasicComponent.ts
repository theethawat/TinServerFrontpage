import Status from "../ModelInterface/status"

interface BasicComponent {
  serverName: String
  description: String
  starterDate: String
  projectStatus: Status
  footerLabel: String
  organization: String
}

export default BasicComponent
