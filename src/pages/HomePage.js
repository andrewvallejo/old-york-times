import React, { useContext, useEffect } from "react";
import { Article } from "../components/Article";
import { getNews } from "../utility/apiCalls/apiCalls";
import { cleanNews } from "../utility/apiCalls/apiCleaner";
import { UserContext } from "../utility/UserContext";

export const HomePage = () => {
	const { state, dispatch } = useContext(UserContext);
	const { loaded, section } = state

	useEffect(() => {
		!loaded && (async () => {
			const newsData = await getNews(section)
			const news = cleanNews(newsData)
			dispatch({ state, action: { type: 'SETNEWS', value: news } })
		})()
	}, [dispatch, loaded, section, state])

	const articles = state.news.map((article) => article.title && <Article key={article.id} content={article} />)

	return (
		<section className='newspaper'>
			{articles}
		</section>
	)
}
