import { useContext } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../utility/UserContext"

export const Article = ({ content, id }) => {
	const { state, dispatch } = useContext(UserContext)
	const { title, byline } = content
	const history = useHistory()
	const pathway = title.toString().split(' ').join('-').replace(/['":.]+/g, '',)




	const handleClick = () => {
		history.push(`/article/${pathway}`)
		dispatch({ state, action: { type: 'SETARTICLE', value: content } })
	}

	return (
		<article className='article'>
			<h2 className='title'> {title} </h2>
			<h3 className='byline'> {byline} </h3>
			<button className='read-button' onClick={() => handleClick()}>Read More</button>
		</article>
	)
}