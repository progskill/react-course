export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

/** 
  const fetchData = async () => {
    const response = await fetch("/your-api-end-point")
    const data = await response.json()
    setData(data)
}

// Will run infinitly
// get away with it by wraping the above one with useCallback
useEffect(() => {
    fetchData()
}, [fetchData]) // adding the dependancy aray will make is run infinitly 

*/


// useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("/your-api")
    //         const data = await response.json()
    //         setData(data)
    //     }
    //     fetchData()
    // }, [])