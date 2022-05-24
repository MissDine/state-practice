import React, {useState} from "react";

// State in Class component
// class Messaging extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             message : "Good morning Enid"
//         }
//     }
//     changeMessage (){
//         this.setState({
//             message : "Thank you for subscribing"
//         })
//     }
//     render(){
//         return(
//             <>
//                 <h1>{this.state.message}</h1>
//                 <button onClick = {() => this.changeMessage()}>Subscribe</button>
//             </>
//         )
//     }
// }

const Messaging = () => {
    const [message, setMessage] = useState("Good morning Enid")
    function changeMessage(){
        setMessage("Thank you for subscribing")
    }
    return(<>
    <h1>{message}</h1>
        <button onClick = {() => changeMessage()}>Subscribe</button>
    </>)
        
}
export default Messaging