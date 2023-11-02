import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Character from './components/Character'
import Paginav from './components/Paginav'
import './App.css'







function App() {

  const [character, setcharacter] = useState([])
  const [info, setinfo] = useState({})

  const url = 'https://rickandmortyapi.com/api/character'
  
  const datosJson = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setcharacter(data.results)
      setinfo(data.info)
    })
    .catch(error => console.log(error))
  }

  const onVer = () => {
    datosJson(info.prev)
  };

  const onSiguiente = () => {
    datosJson(info.next)
  };

  useEffect(()=>{
    datosJson(url)
  },[])

  return (
    <>
    <Navbar texto='Rick And Morty APP' /> 
    <Paginav ver={info.prev} siguiente={info.next} onVer={onVer} onSiguiente={onSiguiente}/>
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-2 '>
      
      <Character characters={character}/>
    </div>
    <Paginav ver={info.prev} siguiente={info.next} onVer={onVer} onSiguiente={onSiguiente}/>
    </>
  )
}

export default App
