
import { createRoot } from 'react-dom/client'
// import ReactLogo from './assets/react.svg'
import { Fragment } from 'react'
import './index.css'
import MyHeader from './Components/Header'
import MyFooter from './Components/Footer'
import MainComponent from './Components/MainComponent'



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


