import Status from "../ModelInterface/status"
export default interface ICardComponent1 {
  itemName: String
  itemDescribe: String
  itemURL: string
  itemStatus: Status
  itemLanguage: Array<String>
}
