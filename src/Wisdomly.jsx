import {useState, useEffect} from 'react';
import './Wisdomly.css'
const RANDOM_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"
export default function Wisdomly() {
    const [qoute, setQoute] = useState ({author: "",text: ""})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchQuote()
    }, [])

    async function fetchQuote() {
        setIsLoading(true)
        const response = await fetch(RANDOM_URL)
        const jsonResponse = await response.json()
        const randomQuote = jsonResponse.quote
        console.log(randomQuote)
        setQoute(randomQuote)
        setIsLoading(false)
    }
    

    return (
        <main className='Wisdomly'>
            <h1>Wisdomly</h1>
            {isLoading && <p>Loading..⌛︎</p>}
            <h2>{qoute.text}</h2>
            <h3>-{qoute.author}</h3>
            <button onClick={fetchQuote}>Get</button>
        </main>
    )
}

