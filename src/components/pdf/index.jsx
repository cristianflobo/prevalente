import React from 'react'
import { logo_negro, pdf } from '../../image'
import './pdf.css'

export const Pdf = ({nameEmpresa}) => {
  return (
    <div className='fatherpdf'>
        <div className='divpdfimg'>
            <a className='atextpdf'  href={logo_negro} download={"RUT " + nameEmpresa}>RUT {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href={logo_negro} download={"Logo " + nameEmpresa}>Logo {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href={logo_negro} download={"Acta de constitución" + nameEmpresa}>Acta de constitución {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href={logo_negro} download={"Cámara de Comercio" + nameEmpresa}>Cámara de Comercio {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
         <div className='divpdfimg'>
            <a className='atextpdf' href={logo_negro} download={"Otro Document " + nameEmpresa}>Otro Document {nameEmpresa}</a>
            <img className='imgpdf' src={pdf} alt="" />
         </div>
    </div>
  )
}
