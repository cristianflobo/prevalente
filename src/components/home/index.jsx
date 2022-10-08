import React from 'react'
import { recta1, recta11, recta2, recta3, recta4 } from '../../image'
import { Card } from '../card'
import { Navbar } from '../navbar/Index'
import './home.css'

export  const Home = () => {
  const datacard = [
    {
      title:"Solicitudes de creación de empresas",
      image1:recta1,
      image2:recta11,
      text:"2 solicitudes sin tratar",
    },
    {
      title:"Indicadores",
      image1:recta1,
      image2:recta2,
      text:"Visitado por última vez: 31/01/2020",
    },
    {
      title:"Inscripción de empleados en empresas",
      image1:recta1,
      image2:recta3,
      text:"3 usuarios sin empresa registrada",
    },
    {
      title:"Gestión de usuarios",
      image1:recta1,
      image2:recta4,
      text:"532 usuarios activos en la plataforma",
    },
  ]
  return (
    <div className='homeconteiner'>
      <Navbar/>
      
      <div className='conteinercard' >
        
        {
          datacard.map(item =>{
            return(
               <Card data = {item} />
        
            )
          })
        }
      
      </div>
    </div>
  )
}

