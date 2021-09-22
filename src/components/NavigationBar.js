import { SearchBar } from "./SearchBar"

export const NavigationBar = () => {

	return (
		<section className='navbar'>
			<ul className='nav-links'>
				<li className='home link'>Home</li>
				<li className='filter link'>Filter</li>
			</ul>
			<h2 className='today'>New York, Monday, September 21, 2021</h2>	
			<SearchBar />
		</section>
	)
}