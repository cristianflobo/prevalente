import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
let data = []

const useForm = (modal, nameempresa) => {
    const [dataempresa, setdataempresa] = useState([])
    const [aprobada, setaprobada] = useState([])
    const [dataView, setdataView] = useState([])
    const [contadorEmpresa, setcontadorEmpresa] = useState(0)

    useEffect(() => {
        getEmpresas() 
    }, [])

    const getEmpresas = async() =>{
        const empresas = await axios.get("/empresa")
        data = empresas
        setdataempresa(empresas.data)
        setdataView(empresas.data[contadorEmpresa])
        nameempresa(empresas.data[contadorEmpresa].name)
       // empresasAprobada()
     }

    const viewModal = ()=>{
        modal(true)
    }

    const viewBack = (position) => {
        if (0 !== contadorEmpresa ) {
            setcontadorEmpresa(contadorEmpresa - 1 )
           setdataView(dataempresa[position])
           nameempresa(dataempresa[position].name)
        }
    } 

    const viewNext = (position) => {
        if (contadorEmpresa < dataempresa.length - 1 ) {
            setcontadorEmpresa(contadorEmpresa + 1 )
            setdataView(dataempresa[position])
            nameempresa(dataempresa[position].name)
        }
    } 
    
    const empresasAprobada = useMemo( ()=>{
        let contadorAprobar = 0
        dataempresa.map(item => {
            if (item.aprobada === true) {    
                ++contadorAprobar
            }
        })
        setaprobada(contadorAprobar)
    },[dataempresa])

     if (aprobada.length === 0 && dataempresa.length !== 0 ) {
        empresasAprobada()
     }   

    const aprobar = async(data)=>{ 
        try {
        const putArprobado = await axios.put("/edit", { name:dataView.name, aprobada:data })
            console.log(putArprobado.status)
            if (putArprobado.status === 200) {
                getEmpresas()
            }
        } catch (error) {
            console.log(error)
        }  
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
        contadorEmpresa,
    }
}

export default useForm