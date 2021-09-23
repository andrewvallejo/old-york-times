import React, { useContext, useEffect } from "react";
import { Article } from "../components/Article";
import { getNews } from "../utility/apiCalls/apiCalls";
import { cleanNews } from "../utility/apiCalls/apiCleaner";
import { UserContext } from "../utility/UserContext";

export const HomePage = () => {
	const { state, dispatch } = useContext(UserContext);

	useEffect(() => {
		!state.loaded && (async () => {
			const newsData = await getNews('home')
			const news = cleanNews(newsData)
			dispatch({ state, action: { type: 'SETNEWS', value: news } })
		})()
	}, [dispatch, state])

	const articles = state.news.map(article => article.title && <Article key={article.date} content={article} />)

	return (
		<section className='newspaper'>
			{articles}
		</section>
	)
}
