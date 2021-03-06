import { NavLink } from "react-router-dom"
import { NewsFilter } from "./NewsFilter"
import { SearchBar } from "./SearchBar"

export const NavigationBar = () => {

	return (
		<section className='navbar'>
			<nav className='nav-links'>
				<NavLink to='/' className='home link'>Home</NavLink>
				<NewsFilter />
			</nav>
			<h2 className='today'>New York, Friday, September 24, 2021</h2>
			<SearchBar />
		</section>
	)
}