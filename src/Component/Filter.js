import React, { useEffect, useState } from "react";
import Nasa from "../Pages/Nasa";
import './Filter.css'
export default function Filtro(props){

    const [res, setRes] = useState(null)
    const fetchAPI = async() =>{
        const response = await fetch(url)
            const responseJSON = await response.json()
            setRes(responseJSON)
            console.log() 
      }
    const [text, setText]= useState(window.localStorage.getItem('text'))
    console.log(text)
    const url = 'https://images-api.nasa.gov/search?q='+text
    const setLocalStorage = value => {
        try{
            setText(value)
            window.localStorage.setItem('text', value)    
        }catch(error){
            console.error(error)
        }
    }
    const handleSubmit = evt =>{
        evt.preventDefault();
        fetchAPI();
    }
    useEffect(()=>{
        console.log(res)
    },[res])
        
    return(
        <section>
            <form className="bus" onSubmit={handleSubmit}>
                <input className="modinp" value={text} onChange={ e => setLocalStorage(e.target.value)}
                    type='text'name='search' placeholder="Elemento del espacio" />
                <button className="buttom" type="submit" ><b>Buscar</b></button>
            </form>
            <div>
            { res?.collection?.items?.length > 0 ?<Nasa response={res?.collection.items}/>: null}
            </div>
        </section>

    )
}