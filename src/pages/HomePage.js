import React, { useEffect, useState } from "react";
import { getNews } from "../utility/apiCalls/apiCalls";

export const HomePage = () => {
	const [state, setState] = useState([])



	useEffect(() => {
	(async () => {
		const news = await getNews('home')
		setState(news.results)
		})()
	}, [])


	return (
		<section>
	{console.log(state)}
		</section>
	)
}

