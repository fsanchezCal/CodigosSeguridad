import React from "react";
import App from "./App";

class ClassState extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            error:false          
        };
    }

    render(){
        return (
            <div>
                <h2>Elimiar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad para comprobar </p>
                 {this.state.error && (
                    <p>El codigo es incorrecto</p>
                )}
                <input placeholder='Codigo de seguridad'/>
                {/* <button onClick={()=> this.setState(prev =>({error:!prev.error})) }>Comprobar</button> */}
                <button onClick={() => this.setState({ error: !this.state.error })}>Comprobar</button>
            </div>
        );
    }
}

export {ClassState}