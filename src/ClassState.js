import React from "react";
import App from "./App";
import { Loading } from "./Loading";

class ClassState extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            error:false,
            loading: false          
        };
    }

    // componentDidMount(){
    //    console.log("componentDidMount");
    // }
   
    // UNSAFE_componentWillMount(){
    //     console.log("UNSAFE_componentWillMount");
    // }
    componentDidUpdate(){
        console.log("actualizacion")
        if(this.state.loading){
            setTimeout(()=>{
            console.log("Haciedo la validacion")
            this.setState({loading:false});

            console.log("terminado la validacio")
        },3000)
    }
    }

    render(){
        return (
            <div>
                <h2>Elimiar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad para comprobar </p>
                 {this.state.error && (
                    <p>El codigo es incorrecto</p>
                )}
                 {this.state.loading && (
                    <Loading/>
                )}
                <input placeholder='Codigo de seguridad'/>
                {/* <button onClick={()=> this.setState(prev =>({error:!prev.error})) }>Comprobar</button> */}
                <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
            </div>
        );
    }
}

export {ClassState}