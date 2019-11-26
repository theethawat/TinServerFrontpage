import ICardState from "./ICardState"
import React, { Component } from "react"

class CardComponent extends Component<any, ICardState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cardComponent: this.props.cardComponent
    }
  }

  renderLanguage = (languge: Array<String>) => {
    var langauageTag = ""
    var i = 0
    while (i < languge.length) {
      langauageTag = langauageTag + languge[i]
      if (i != languge.length - 1)
        langauageTag += ", "
      i++
    }
    return langauageTag
  }

  render() {
    var title = this.state.cardComponent.itemName
    var describe = this.state.cardComponent.itemDescribe
    var status = this.state.cardComponent.itemStatus
    var url = this.state.cardComponent.itemURL
    var language = this.state.cardComponent.itemLanguage
    var langAfterRender = this.renderLanguage(language)
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h4 className="title is-5"><a href={encodeURI(url)}>{title}</a></h4>
            <p className="is-medium">
              {describe}<hr />
              <span className="tag is-info">{status}</span>
              {" | "}  <span className="tag is-warning"> {langAfterRender} </span>

            </p>

          </div>
        </div>
      </div>
    )
  }
}
export default CardComponent
