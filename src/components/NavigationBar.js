import { NavLink } from "react-router-dom"
import { SearchBar } from "./SearchBar"

export const NavigationBar = () => {

	return (
		<section className='navbar'>
			<nav className='nav-links'>
				<NavLink to='/' className='home link'>Home</NavLink>
				<nav className='filter link'>Filter</nav>
			</nav>
			<h2 className='today'>New York, Monday, September 21, 2021</h2>	
			<SearchBar />
		</section>
	)
}