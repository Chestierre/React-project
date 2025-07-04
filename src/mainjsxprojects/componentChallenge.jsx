import { createRoot } from 'react-dom/client'
import ReactLogo from './assets/react.svg'

function MyComponent() {
  return (
    <div>
      <header>
        <img src={ReactLogo} alt="React logo" width ="40px" /> 
      </header>
      {/*<h1>Create custom "Page" Component</h1>*/}
      <main>
        <h1>Reasons I'm excited to Learn React</h1>
        <ol>
          <li>Building</li>
          <li>Serving</li>
          <li>Learning</li>
        </ol>
      </main>
      <footer>
        <small>© 2025 Doliente developmment. All right reserved</small>
      </footer>
    </div>
  )
}


const root = createRoot(document.getElementById('root'))
root.render(<MyComponent />)


