import React, { useContext, useEffect } from "react";
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

	console.log(state)
	return (
		<section>
			<p>meo </p>
		</section>
	)
}
