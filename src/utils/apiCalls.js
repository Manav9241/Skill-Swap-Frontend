import React from 'react'
import axios from 'axios'

export const getAPIcalls = async (mid, id) =>{
      const baseURL = import.meta.env.VITE_API_URL
      const url = baseURL+mid+id ;
      const response = await axios.get(url) ;
      return response ;
  }

  export const postAPIcalls = async (mid, id, credentials) =>{
    const baseURL = import.meta.env.VITE_API_URL
    const url = baseURL+mid+id ;
    
    const response = await axios.post(url, credentials) ;
    return response ;
  }