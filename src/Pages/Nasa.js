import React from "react";
import './Nasa.css'

export default function Nasa(props){
    return( 
      <div  >
        {!props.response ? "Cargando Noticia" :
        props.response.map((result,i)=>{
       return <aside>
        <p>{result.data[0].description}</p>
        {result.links?.length > 0 ? <img className="algo" src={result.links[0].href}/> :null} 
        </aside>})
        }
      </div>
      
    )
}
    