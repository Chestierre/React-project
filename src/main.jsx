import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


//challenge 1
// import { createRoot} from 'react-dom/client';

// const root = createRoot(document.getElementById("root"))
// const root = createRoot(document.querySelector("#root"))
// root.render(<article>hello Chester</article>)
// createRoot(document.getElementById("root")).render(<article>hello Chester</article>)

// import ReactDOM from "react-dom/client"

// ReactDOM.createRoot(document.getElementById("root")).render(<article>hello Chester</article>)

//another challenge
// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById("root"))
// root.render(
//     <>
//     <h1>Challenge 1</h1>
//     <ul>
//         <li>Acquision of skill of making new react projects</li>
//         <li>Practice base javascript or typescript</li>
//         <li>Enhance understanding on other languages</li>
//     </ul>
//     </>
// )