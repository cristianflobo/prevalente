import React from 'react'
import './modal.css'
import { Pdf } from '../pdf'

export const Modal = ({modal, nameModalEmpresa}) => {
    console.log("-------modal--------", nameModalEmpresa)
  return (
    <div className='conteinermodal'>
        
        <div className='prueva'>
        
            <div className='conteinerdata'>
                <div className='divbuttonmodal'>
                    <button className='buttonmodal' onClick={()=> modal(false)} >X</button>
                </div>
                <p style={{fontSize:"36px", fontFamily:'Roboto', fontWeight:"700",lineHeight:"42px", height:"5%" }}>Documentos cargados</p>
                <div className='divpdf' >
                    <Pdf nameEmpresa = {nameModalEmpresa}/>
                </div>
            </div>
           
            
        </div>
      
    </div>
  )
}
