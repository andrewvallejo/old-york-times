export const NewsFilter = () => {
	return (
		<form>
		<label htmlFor='sections'>
				<select className='filter-list' name="sections" id="sections">
					<option selected disabled>Filter</option>
					<option value="home">All</option>
					<option value="arts">Arts</option>
					<option value="automobiles">Automobiles</option>
					<option value="books">Books</option>
					<option value="fashion">Fashion</option>
					<option value="food">Food</option>
					<option value="health">Health</option>
					<option value="insider">Insider</option>
					<option value="magazine">Magazine</option>
					<option value="movies">Movies</option>
					<option value="nyregion">NY Region</option>
					<option value="obituaries">Obituaries</option>
					<option value="opinion">Opinion</option>
					<option value="politics">Politics</option>
					<option value="realestate">Real Estate</option>
					<option value="science">Science</option>
					<option value="sport">Sport</option>
					<option value="sundayreview">Sunday Review</option>
					<option value="technology">Technology</option>
					<option value="theater">Theater</option>
					<option value="t-magazine">T-Magazine</option>
					<option value="travel">Travel</option>
					<option value="upshot">Upshot</option>
					<option value="us">US</option>
					<option value="world">World</option>
				</select>
		</label>
			</form>
	)
}