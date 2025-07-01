import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(<MyComponent />)

function MyComponent() {
  return (
    <main>
      <h1>Create custom "Page" Component</h1>
      <ol>
        <li>Learning</li>
        <li>Building</li>
        <li>Serving</li>
      </ol>
    </main>
  )
}
