import React from "react";

class Messaging extends React.Component{
    constructor(){
        super()
        this.state = {
            message : "Good morning Enid"
        }
    }
    changeMessage (){
        this.setState({
            message : "Thank you for subscribing"
        })
    }
    render(){
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}
export default Messaging