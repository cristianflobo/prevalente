import React, { useEffect, useState } from 'react'
import { check, clip, flecha_derecha_gris, flecha_derecha_negra, flecha_izquierda_gris, flecha_izquierda_negra, logo_negro, x } from '../../image'
import './form.css'
import useForm from '../../hooks/useForm'
import { Modal } from '../modal'
import { Pdf } from '../pdf'


export const Form = ({modal, nameempresa}) => {
        
        const {dataempresa, aprobada, dataView, aprobar, viewBack, viewNext, viewModal, contadorEmpresa } = useForm(modal, nameempresa)
  return (
    <div className='conteinerform'>
        
        <div className='divlogo_negro' >
            <div className='divbuttoncheck'>
                <button className='buttoncheck' disabled = {dataView.aprobada} onClick={()=> aprobar(true)} style={{marginBottom:"26px"}}> <img style={{marginRight:"10px"}} src={check} alt="" />Aprobar Empresa</button>
                <button className='buttoncheck' disabled = {!dataView.aprobada} onClick={()=> aprobar(false)} > <img style={{marginRight:"10px"}} src={x} alt="" />Rechazar Empresa</button>
            </div>
            
            <div className='padrelogo_negro'>
                <div className='logo_negro'>
                    <img style={{width:"174px", height:"151px"}} src={logo_negro} alt="" />
                </div>
            </div>
            <div style={{width:"33.33%"}}></div>
        </div>
        <div className='divform'>
            <div className='divformtextinput'>
                <div style={{marginRight:"20px"}} >
                    <p className='testoinput'>Nombre de empresa</p>
                    <input value={dataView.name } className='inputform' type="text" />
                </div>
                <div >
                    <p className='testoinput'>Razón Social</p>
                    <input value={dataView.razon } className='inputform' />
                </div>
            </div>
            <div className='divformtextinput' >
                <div style={{marginRight:"20px"}} >
                    <p className='testoinput'>Tipo de identificación</p>
                    <input value={dataView.nit} className='inputform' type="text" />
                </div>
                <div>
                    <p className='testoinput'>Identificación</p>
                    <input value={dataView.identificacion} className='inputform'  type="text" />
                </div>
            </div>
            <div className='divformtextinput2' style={{ alignItems:"flex-end", justifyContent:"center", width:"100%" }}>
                <div style={{marginRight:"20px"}} >
                    <p className='testoinput'># de empleados</p>
                    <input value={dataView.empleados} className='inputform' type="text" />
                </div>
                <div className='buttonviewmodal'>
                    <button className='button' onClick={() => viewModal()}><img style={{marginRight:"10px"}} src={clip} alt="" />Ver archivos adjuntos</button>
                </div>
            </div>
            {
                window.screen.width < 600 ? 
                <div>
                    <p style={{fontFamily:"roboto", fontWeight:"700", fontSize:"18px", marginTop:"50px", marginRight:"90px"}}>Documentos cargados</p>
                    <Pdf nameEmpresa ={dataView.name}/>
                </div> 
                :null
            }
        </div>
        <div className='paginacion'>
            <img style={{height:"38px"}} src={contadorEmpresa + 1 == 1?flecha_izquierda_gris:flecha_izquierda_negra } alt="" onClick={() => viewBack(contadorEmpresa - 1)} />
            <p className='spanpaginacion' >Empresa {contadorEmpresa + 1 } de { dataempresa.length - aprobada } pendiente por aprobación</p>
            <img style={{height:"38px"}} src={contadorEmpresa + 1 >= 1 && dataempresa.length !== contadorEmpresa + 1?flecha_derecha_negra:flecha_derecha_gris } alt="" onClick={() => viewNext(contadorEmpresa + 1)} />
        </div>
    </div>
  )
}
