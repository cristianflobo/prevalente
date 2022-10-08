import React from 'react'
import { cv, empleo, engranaje, flecha, foto, logo1, lupa } from '../../image'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbarconteiner'>
        <div className='navbar'>
            <div style={{height:"100%", display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", marginLeft:51}}>
                    <img src={logo1} alt=""  style={{height:60}}/>
                    <span style={{fontFamily:"Roboto", fontStyle:"normal", fontSize:"16px", color:"white"}}>Gente prevalente</span>
                </div>
                <div>
                    <img src={lupa} alt="" />    
                    <input style={{height:20, alignItems:"center", backgroundColor:"#2F3337", border:"none"}} type="text" placeholder='Buscar' />
                </div>
            </div>
            <div style={{height:"100%", display:"flex"}}>
            <div style={{display:"flex", alignItems:"center", height:'1000%'}}>
                <img src={engranaje} alt="" />    
                <span style={{ fontSize:"16px", color:"white"}}>Administracion</span>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={empleo} alt="" />    
                <span style={{ fontSize:"16px", color:"white", marginLeft:10, marginRight:10}}>Empleo</span>
                <img src={flecha} alt="" />    
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={cv} alt="" />    
                <span style={{ fontSize:"16px", color:"white",marginLeft:10}}>Mi CV</span>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <img style={{height:60, borderRadius:"50%"}} src={foto} alt="" />    
                <span style={{fontSize:"16px", color:"white", marginLeft:10, marginRight:10}}>Cristian</span>
                <img src={flecha} alt="" />    
            </div>
            </div>
        </div>
    </div>
  )
}
