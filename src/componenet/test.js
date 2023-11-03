import React from "react";
import Welcom from "./Welcom";
class Test extends React.Component {
    state = {
        firstname : "ahmed",
        lastname:"hamamo"
    }
    render(){
        return(

            <>
        <h2>Hello ya ma3lm </h2>
        <h3> your name is {this.state.firstname} {this.state.lastname}  your age {this.props.age}</h3>
        <button onClick={()=>{
            this.setState({
                firstname:"ebrahim"
            })
        }}>
            change
        </button>
        <Welcom title="bate"/>
            </>
        )
    }
    componentDidMount(){
            this.setState({
                firstname:"abdelhady"
            })
    }
}
export default Test;
