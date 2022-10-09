import axios from 'axios'

const getEmpresas = async() =>{
   const empresas = await axios.get("/empresa")
   return await empresas.data
}

export {
    getEmpresas,
}