import { useHistory } from "react-router"

export const Article = ({ content }) => {
	const { title, byline } = content
	const history = useHistory()
	const pathway = title.toString().split(' ').join('-').replace(/['":.]+/g, '',)
	
	const handleClick = () => {
		history.push(`/article/${pathway}`)
	}

	return (
		<article className='article'>
			<h2 className='title'> {title} </h2>
			<h3 className='byline'> {byline} </h3>
			<button className='read-button' onClick={() => handleClick()}>Read More</button>
		</article>
	)
}