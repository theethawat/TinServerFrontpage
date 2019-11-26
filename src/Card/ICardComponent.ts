import Status from "../ModelInterface/status"
interface ICardComponent {
  itemName: String
  itemDescribe: String
  itemURL: String
  itemStatus: Status
  itemLanguage: Array<String>
}
export default ICardComponent
