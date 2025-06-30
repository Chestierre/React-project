//RandomHousekeeping Challenge
import reactLogo from './assets/react.svg'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"))
// root.render(<h1>RandomHousekeeping </h1>)
root.render(
    <div>
        <img src={reactLogo} alt="React logo" /> 
        <h1>This is another element</h1>
    </div>
    // <img src="./assets/react.svg" /> 
)