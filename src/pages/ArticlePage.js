import { useContext } from "react"
import { UserContext } from "../utility/UserContext"

export const ArticlePage = () => {
	const { state } = useContext(UserContext)
	const { abstract, byline, date, tags, images, section, url, title } = state.article

	return (
		<section className='news-article'>
			{abstract}
			{byline}
			{date}
			{title}
			<a href={`${url}`}>Read more</a>
		</section>
	)
}