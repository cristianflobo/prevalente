import React, { useEffect, useState } from 'react'
import axios from "axios"
let data = []
let contadorEmpresa = 0

const useForm = (modal) => {
    let conta = 0
    const [dataempresa, setdataempresa] = useState([])
    const [aprobada, setaprobada] = useState([])
    const [dataView, setdataView] = useState([])
    useEffect(() => {
        getEmpresas() 
    }, [])
    const getEmpresas = async() =>{
        const empresas = await axios.get("/empresa")
        console.log("first" , empresas.data)
        data = empresas
        setdataempresa(empresas.data)
        setdataView(empresas.data[contadorEmpresa])
     }
    const viewModal = ()=>{
        modal(true)
    }
    const viewBack = () => {
        if (0 !== contadorEmpresa ) {
            contadorEmpresa = --contadorEmpresa
        }
        setdataView(dataempresa[contadorEmpresa])
    } 
    const viewNext = () => {
        if (contadorEmpresa < dataempresa.length - 1 ) {
            contadorEmpresa = ++contadorEmpresa
        }
        setdataView(dataempresa[contadorEmpresa])
    } 
    const empresasAprobada = ()=>{
        let arrayAprobado = []
        let contadorAprobar = 0
        dataempresa.forEach(item => {
            arrayAprobado.push(item.aprobada)
            if (item.aprobada === true) {
                ++contadorAprobar
            }
        })
        setaprobada(contadorAprobar)
        console.log("---------", aprobada , contadorAprobar, "----------" )
    }

     if (aprobada.length === 0 && dataempresa.length !== 0 ) {
        empresasAprobada()
     }   

    const aprobar = async(data)=>{ 
        const putArpobado = await axios.put("/edit", { name:dataView.name, aprobada:data })
        getEmpresas()
        empresasAprobada()
        console.log( aprobada )
    }

   

    
    return {
        dataempresa, 
        setdataempresa,
        aprobada, 
        setaprobada,
        dataView, 
        setdataView,
        viewModal,
        viewBack,
        viewNext,
        aprobar,
    }
}

export default useForm