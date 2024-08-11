import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    try {
      const res = await fetch('/submit', {
        method: 'POST',
        body: new FormData(form),
      })
      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      console.error('Error:', error)
      setResponse('An error occurred')
    }
  }

  return (
    <>
      <h1>Testing redirect with auth header</h1>
      <div>
        <h2>Submit Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
        {response && (
          <div>
            <h3>Response:</h3>
            <pre>{response}</pre>
          </div>
        )}
      </div>
    </>
  )
}

export default App
