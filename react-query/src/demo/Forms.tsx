import {useState, useEffect} from 'react'

interface formProps{
    userId: number
}

export default function Forms({userId} : formProps ){

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")

    // Resets form on userId Change
    // useEffect(() => {
    //     setFName("")
    //     setLName("")
    //     setEmail("")
    // }, [userId])

    const handleSubmit = () => {
        // form logic
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={fName} onChange={(e) => setFName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </form>
    )
}