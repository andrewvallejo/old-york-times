export const cleanNews = ({ results }) => {
	if (results) {
		let count = 0
		return results.map((news) => {
			count++
			if(count <= 8) {
				return {
					abstract: news.abstract,
					byline:  news.byline,
					date: news.created_date ,
					tags: news.des_facet ,
					images: news.multimedia ,
					section: news.section ,
					url: news.short_url ,
					title: news.title ,
					} 
			} else {
				return {}
			}
		})
	}
	console.error('Server Error: No news available!')
}