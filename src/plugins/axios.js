// /plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return {
    provide: {
      api,
    },
  }
})

