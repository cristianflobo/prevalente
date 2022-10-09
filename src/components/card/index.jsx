import React from 'react'
import { reloj } from '../../image'
import './card.css'

export const Card = ({data, stateCard}) => {
  return (
    <div className='cardconteiner'>
      <div className='carddiv' onClick={()=> stateCard(data.id)}>
        <div style={{height:"100px", position:"relative", top:"-40px", left:"30px"}}>
          <img style={{position:"absolute", zIndex:1,bottom:"18px",left:"24px"}} src={data.image2} alt="" />
          <img style={{position:"absolute"}} src={data.image1} alt="" /> 
        </div>
        <div style={{height:"94px", width:"450px"}}>
          <p style={{marginLeft:20, fontSize:"36px"}}>{data.title}</p>
        </div>
        <div style={{width:"552px", height:"70px", borderTop:"1px solid",  display:"flex", alignItems:"center", marginTop:"27px"}}>
          <img style={{marginRight:10, marginLeft:20}} src={reloj} alt="" />
          <p style={{color:" #9A9A9A", width:"170px", height:"28px"}}>{data.text}</p>
        </div>
      </div>
    </div>
  )
}
