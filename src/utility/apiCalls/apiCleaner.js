export const cleanNews = ({ results }) => {
	return results.map((news) => {
		return {
			abstract: news.abstract,
			caption:  news.byline,
			createdDate: news.created_date ,
			tags: news.des_facet ,
			images: news.multimedia ,
			section: news.section ,
			url: news.short_url ,
			title: news.title ,
		}
	})
}