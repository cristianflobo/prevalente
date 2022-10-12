import React from 'react'
import { pdf } from '../../image'
import './pdf.css'

export const Pdf = ({nameEmpresa}) => {
  return (
    <div className='fatherpdf'>
        <div className='divpdfimg'>
            <a className='atextpdf'  href="apple.png" download={"RUT " + nameEmpresa}>RUT {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href="apple.png" download={"Logo " + nameEmpresa}>Logo {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href="apple.png" download={"Acta de constitución" + nameEmpresa}>Acta de constitución {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href="apple.png" download={"Cámara de Comercio" + nameEmpresa}>Cámara de Comercio {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href="apple.png" download={"Otro Document " + nameEmpresa}>Otro Document {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
    </div>
  )
}
