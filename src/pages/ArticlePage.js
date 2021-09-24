import { useContext } from "react"
import { formatDate } from "../utility/formatDate"
import { UserContext } from "../utility/UserContext"

export const ArticlePage = () => {
	const { state } = useContext(UserContext)
	const { abstract, byline, date, url, title } = state.article

	const updatedDate = formatDate(date)

	return (
		<section className='news-article'>
			<header>
				<h2>{title}</h2>
				<div className='author-container'>
					<h3>{byline} </h3>
					<p>{updatedDate}</p>
				</div>
			</header>
			<p className='abstract'>{abstract}</p>
			<a href={`${url}`}>Read More over at the New York Times</a>
		</section>
	)
}