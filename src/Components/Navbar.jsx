import ReactLogo from '../assets/react.svg'

function Navbar() {
	return (
		<header>
			<nav>
				<img src={ReactLogo} alt="React logo" />
				<span>ReactFacts</span>
			</nav>
		</header>
	)
}

export default Navbar