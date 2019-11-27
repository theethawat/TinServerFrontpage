import ICardComponent from "./ICardComponent"
interface ICardArray {
  programComponent: ICardComponent
}

interface ICardComponentState {
  programItem: Array<ICardArray>
}

export default ICardComponentState
