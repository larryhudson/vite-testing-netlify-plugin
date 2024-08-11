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
    <div className="container">
      <h1>netlify-plugin-redirect-with-auth</h1>
      <p>
        This is a demonstration of the netlify-plugin-redirect-with-auth.
        For more information, visit{' '}
        <a href="https://npmjs.com/package/netlify-plugin-redirect-with-auth" target="_blank" rel="noopener noreferrer">
          netlify-plugin-redirect-with-auth on npm
        </a>
        .
      </p>
      <p>
        Note: This site contains a redirect from /submit to https://larryhudson-simpleformdatahello.web.val.run
      </p>
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
    </div>
  )
}

export default App
