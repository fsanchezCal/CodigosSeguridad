
import React from "react";

function UseState({name}){
const [error,setError] = React.useState(false);
const [loading,setLoadig] = React.useState(false);

React.useEffect(()=>{
    console.log("Empezando el efecto")

        if(loading){
            setTimeout(()=>{
            console.log("Haciedo la validacion")
            setLoadig(false);

            console.log("terminado la validacio")
        },3000)
    }
    console.log("Termindo el efecto")

},[loading])

    return (
            <div>
                <h2>Elimiar {name}</h2>
                <p>Por favor, escribe el codigo de seguridad para comprobar </p>

                {error && (
                    <p>El codigo es incorrecto</p>
                )}

                {loading && (
                    <p>Cargando...</p>
                )}


                <input placeholder='Codigo de seguridad'/>
                <button onClick={()=>setLoadig(true)}>Comprobar</button>
            </div>
        );
}

export {UseState};