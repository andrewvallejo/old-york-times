export const NewsFilter = () => {
	return (
		<form>
					<select className='filter-list' name="sections" id="sections">
						<option selected  value="">Filter</option>
						<option value="arts">arts</option>
						<option value="automobiles">automobiles</option>
						<option value="books">books</option>
						<option value="fashion">fashion</option>
						<option value="food">food</option>
						<option value="health">health</option>
						<option value="home">home</option>
						<option value="insider">insider</option>
						<option value="magazine">magazine</option>
						<option value="movies">movies</option>
						<option value="nyregion">nyregion</option>
						<option value="obituaries">obituaries</option>
						<option value="opinion">opinion</option>
						<option value="politics">politics</option>
						<option value="realestate">real estate</option>
						<option value="science">science</option>
						<option value="sport">sport</option>
						<option value="sundayreview">sunday review</option>
						<option value="technology">technology</option>
						<option value="theater">theater</option>
						<option value="t-magazine">t-magazine</option>
						<option value="travel">travel</option>
						<option value="upshot">upshot</option>
						<option value="us">us</option>
						<option value="world">world</option>
					</select>
				</form>
	)
}