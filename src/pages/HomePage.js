import React, { useEffect, useState } from "react";
import { getNews } from "../utility/apiCalls/apiCalls";
import { cleanNews } from "../utility/apiCalls/apiCleaner";

export const HomePage = () => {
	const [state, setState] = useState([])



	useEffect(() => {
	(async () => {
		const newsData = await getNews('home')
		const news = cleanNews(newsData)
		setState(news)
		})()
	}, [])


	return (
		<section>	
		</section>
	)
}
