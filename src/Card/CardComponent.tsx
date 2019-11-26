import ICardConponent from "./ICardComponent"
import Status from "../ModelInterface/status"
import ICardState from "./ICardState"
import React, { Component } from "react"

class CardComponent extends Component<any, ICardState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cardComponent: this.props.cardComponent
    }
  }
  render() {
    var title = this.state.cardComponent.itemName
    var describe = this.state.cardComponent.itemDescribe
    var status = this.state.cardComponent.itemStatus
    var url = this.state.cardComponent.itemURL
    var language = this.state.cardComponent.itemLanguage
    return (
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">{title}</p>
        </div>
      </div>
    )
  }
}
export default CardComponent
