import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <nav>
        <ul>
          <li><Link to="/default">Go to Default (Counter)</Link></li>
          <li><Link to="/challenge1">Challenge 1</Link></li>
          <li><Link to="/challenge2">Challenge 2</Link></li>
          <li><Link to="/challenge3">Challenge 3</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
