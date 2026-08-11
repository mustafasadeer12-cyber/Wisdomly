import {useState, useEffect} from 'react';
import './Wisdomly.css'
const RANDOM_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"
export default function Wisdomly() {
    const [quote, setQuote] = useState ({author: "",text: ""})
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
        setQuote(randomQuote)
        setIsLoading(false)
    }
    

    return (
        <main className='Wisdomly'>
            <h1>Wisdomly</h1>
            {isLoading && <p>Loading..⌛︎</p>}
            <h2>{quote.text}</h2>
            <h3>-{quote.author}</h3>
            <button onClick={fetchQuote}>Get</button>
        </main>
    )
}

