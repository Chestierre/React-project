import { Fragment } from 'react'
import ReactLogo from '../assets/react.svg'


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

export default MyHeader