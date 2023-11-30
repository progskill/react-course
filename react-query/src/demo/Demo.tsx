import {useState, useEffect } from 'react'

const Demo = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/your-api")
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])
    

  return (
    <main>
      <h1>Map your data here</h1>
    </main>
  )
}

export default Demo