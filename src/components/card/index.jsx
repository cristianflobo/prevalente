import React from 'react'
import { reloj } from '../../image'
import './card.css'

export const Card = ({data}) => {
  console.log(data)
  return (
    <div className='cardconteiner'>
      <div className='carddiv'>
        <div style={{height:"100px"}}>
          <img src={data.image2} alt="" />
          <img src={data.image1} alt="" /> 
        </div>
        <div style={{height:"94px", width:"450px"}}>
          <p style={{marginLeft:20, fontSize:"36px"}}>{data.title}</p>
        </div>
        <div style={{width:"552px", height:"70px", borderTop:"1px solid",  display:"flex", alignItems:"center"}}>
          <img style={{marginRight:10, marginLeft:20}} src={reloj} alt="" />
          <p style={{color:" #9A9A9A"}}>{data.text}</p>
        </div>
      </div>
    </div>
  )
}
