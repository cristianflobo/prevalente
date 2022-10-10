import React, { useEffect, useState } from 'react'
import { check, clip, flecha_derecha, flecha_izquierda, logo_negro, x } from '../../image'
import './form.css'
import useForm from '../hooks/useForm'


export const Form = ({modal}) => {
    const {dataempresa, aprobada, dataView, aprobar, viewBack, viewNext, viewModal} = useForm(modal)
  return (
    <div className='conteinerform'>
        
        <div className='divlogo_negro' >
            <div className='divbuttoncheck'>
                <button className='buttoncheck' onClick={()=> aprobar(true)} style={{marginBottom:"26px"}}> <img style={{marginRight:"10px"}} src={check} alt="" />Aprobar Empresa</button>
                <button className='buttoncheck' onClick={()=> aprobar(false)} > <img style={{marginRight:"10px"}} src={x} alt="" />Rechazar Empresa</button>
            </div>
            <div className='logo_negro'>
                <img style={{width:"174px", height:"151px"}} src={logo_negro} alt="" />
            </div>
        </div>
        <div className='divform'>
            <div style={{display:"flex", marginBottom:"100px"}}>
                <div style={{marginRight:"20px"}} >
                    <p className='testoinput'>Nombre de empresa</p>
                    <input value={dataView.name } className='inputform' type="text" />
                </div>
                <div >
                    <p className='testoinput'>Razón Social</p>
                    <input value={dataView.razon } className='inputform' />
                </div>
            </div>
            <div style={{display:"flex", marginBottom:"100px"}}>
                <div style={{marginRight:"20px"}} >
                    <p className='testoinput'>Tipo de identificación</p>
                    <input value={dataView.nit} className='inputform' type="text" />
                </div>
                <div>
                    <p className='testoinput'>Identificación</p>
                    <input value={dataView.identificacion} className='inputform'  type="text" />
                </div>
            </div>
            <div style={{display:"flex", alignItems:"flex-end", justifyContent:"center", width:"100%" }}>
                <div style={{marginRight:"20px"}} >
                    <p className='testoinput'># de empleados</p>
                    <input value={dataView.empleados} className='inputform' type="text" />
                </div>
                <div style={{width:"350px"}}>
                    <button className='button' onClick={() => viewModal()}><img style={{marginRight:"10px"}} src={clip} alt="" />Ver archivos adjuntos</button>
                </div>
            </div>
        </div>
        <div className='paginacion'>
            <img src={flecha_izquierda} alt="" onClick={() => viewBack()} />
            <span style={{padding:"10px"}}>Empresa {aprobada} de { dataempresa.length - aprobada } pendiente por aprobación</span>
            <img src={flecha_derecha} alt="" onClick={() => viewNext()} />
        </div>
    </div>
  )
}
