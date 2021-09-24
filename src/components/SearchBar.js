export const SearchBar = () => {

	return (
		<form className='search-bar'>
			<label htmlFor='search' >
				<input type='text' id='search' className='search-input' placeholder='Search...' disabled />
				<button type='submit' className='search-button' disabled>🔍</button>
			</label >
		</form>
	)
}