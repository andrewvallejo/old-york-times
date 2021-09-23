export const cleanNews = ({ results }) => {

	if (results) {
		return results.map((news) => {
			return {
				abstract: news.abstract,
				byline: news.byline,
				date: news.created_date,
				tags: news.des_facet,
				images: news.multimedia,
				section: news.section,
				url: news.short_url,
				title: news.title,
			}
		})
	}
	console.error('Server Error: No news available!')
}