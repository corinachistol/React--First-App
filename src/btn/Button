import { Component } from "react";
import "./Button.css"


class Button extends Component {

    //capture the construction phase
    constructor(props) {
        super(props)
        console.warn("A button has been created")
    }

    //capture the END of MOUNT phase
    componentDidMount() {
        console.warn("A button has been mounted")
    }


    handleClick() {
        console.log(`btn ${this.props.label} clicked`)
    }

   render() {
    console.warn("A button has been rendered")
    return ( 
    <button 
        onClick={this.handleClick.bind(this)}
        className={this.props.color}
    >
        {this.props.label}
    </button>

  )}
}

export default Button