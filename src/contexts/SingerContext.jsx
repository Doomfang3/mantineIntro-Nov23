import { createContext, useEffect, useState } from 'react'

export const SingerContext = createContext()

const SingerContextProvider = ({ children }) => {
  const [singers, setSingers] = useState([])

  const fetchAllSingers = async () => {
    try {
      const response = await fetch('http://localhost:4000/singers?_embed=songs')
      if (response.ok) {
        const singersData = await response.json()
        setSingers(singersData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchAllSingers()
  }, [])

  const createNewSinger = async payload => {
    try {
      const response = await fetch('http://localhost:4000/singers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        const newSinger = await response.json()
        return newSinger
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SingerContext.Provider value={{ singers, createNewSinger }}>{children}</SingerContext.Provider>
  )
}

export default SingerContextProvider
