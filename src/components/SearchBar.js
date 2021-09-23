export const SearchBar = () => {
	
	return (
		<form className='search-bar'>
			<label htmlFor='search' >
				<input id='search' className='search-input' type='text' placeholder='Search...' />
				<button className='search-button'>🔍</button>
				</label >
		</form>
	)				
}