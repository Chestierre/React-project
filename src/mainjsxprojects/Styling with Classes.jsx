import { createRoot } from 'react-dom/client'
import ReactLogo from './assets/react.svg'
import { Fragment } from 'react'
import './index.css'

function MyHeader() {
  return (
    <Fragment>
      <header className = "header">
        <img src={ReactLogo} alt="React logo" className="react-logo" />
          <nav>
            <ul className="nav-list">
              <li className="nav-list-item">Pricing</li>
              <li className="nav-list-item">About</li>
              <li className="nav-list-item">Contact</li>
            </ul>
          </nav>
      </header>
    </Fragment>
    )

}

function MainComponent() {
  return(
      <main>
        <h1>Reasons I'm excited to Learn React</h1>
        <ol>
          <li>Building</li>
          <li>Serving</li>
          <li>Learning</li>
        </ol>
      </main>
    )
}

function MyFooter() {
  return (
      <footer>
        <small>© 2025 Doliente developmment. All right reserved</small>
      </footer>
    )
}

function MyComponent() {
  return (
    <Fragment>
      {/*<h1>Create custom "Page" Component</h1>*/}
      <MyHeader />
      <MainComponent />
      <MyFooter />
{/*      <main>
        <h1>Reasons I'm excited to Learn React</h1>
        <ol>
          <li>Building</li>
          <li>Serving</li>
          <li>Learning</li>
        </ol>
      </main>
      <footer>
        <small>© 2025 Doliente developmment. All right reserved</small>
      </footer>*/}
    </Fragment>
  )
}



const root = createRoot(document.getElementById('root'))
root.render(
  <Fragment>
    <MyComponent />
  </Fragment>
  )


