import React, { Component } from "react"
import FirebaseDatabase from "../ModelInterface/FirebaseConfig"
import CardComponent from "./CardComponent"
import ICardComponent from "./ICardComponent"
import Status from "../ModelInterface/status"
import ICardComponentState from "./ICardComponentState"
class Card extends Component<any, ICardComponentState> {
    constructor(props: any) {
        super(props)
        var construcCardComponent: ICardComponent = {
            itemName: "",
            itemDescribe: "",
            itemLanguage: [],
            itemStatus: Status.tba,
            itemURL: ""
        }
        this.state = {
            programItem: [
                { programComponent: construcCardComponent }
            ]
        }
    }
    componentDidMount() {
        FirebaseDatabase.ref('/ServerPage/TDC-Server/ServerProgram').on('value', snapshot => {
            snapshot.forEach(() => {

            })
        })
    }
    render() {
        var demoCardComponent: ICardComponent
        demoCardComponent = {
            itemName: "Test",
            itemDescribe: "Describe",
            itemStatus: Status.tba,
            itemLanguage: ["Typescript", "NodeJS"],
            itemURL: "https://www.example.com"
        }
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <CardComponent cardComponent={demoCardComponent} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Card
