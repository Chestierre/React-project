// import { createRoot } from 'react-dom/client'
// import reactImage from './assets/react.svg'

// const root = createRoot(document.getElementById('root'))
// root.render(
//     <main>
//         <div>
//             <img src={reactImage} alt="react-image" width="40px"/>
//             <h2>React Facts</h2>
//         </div>
//         <div>
//             <h1>Fun facts about React!</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on Github</li>
//                 <li>Is maintained by Meta</li>
//                 <li>Powers thousands of enterprise apps including mobile apps</li>
//             </ul>
//         </div>
//     </main>
// )

import { createRoot } from 'react-dom/client'
import reactImage from './assets/react.svg'

const root = createRoot(document.getElementById('root'))
root.render(
    <main>
        <div>
            <img src={reactImage} alt="react-image" width="40px"/>
            <h2>React Facts</h2>
        </div>
        <div>
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
        </div>
    </main>
)

