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
        . You can also check out the <a href="https://github.com/larryhudson/netlify-plugin-redirect-with-auth">plugin GitHub repo</a> and <a href="https://github.com/larryhudson/vite-testing-netlify-plugin">this demo site repo</a>.
      </p>
      <p>
        The plugin allows us to define redirects inside <code>netlify.toml</code> that use a secret 'Authorization' header set in an environment variable. This allows us to define the redirects in code, but keep our secrets private.
      </p>
      <div>
        <h2>Submit Form</h2>
        <p>
          This form submits to /submit. The netlify.toml configuration includes a redirect from /submit to https://larryhudson-simpleformdatahello.web.val.run. That redirect includes an 'Authorization' header which includes my <a href="https://docs.val.town/api/authentication/">Val.town API token</a>.
        </p>
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
