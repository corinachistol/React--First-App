
import "./Button.css"

//functional component
export default function Button (props) {
    console.warn("A button has been created")

    console.warn("A button has been mounted")

    console.warn("A button has been rendered")

    function handleClick() {
        console.log(`btn ${props.label} clicked`)
    }

    return ( 
        <button 
            onClick={handleClick}
            className={props.color}
        >
            {props.label}
        </button> 
    )

}



// export default Button