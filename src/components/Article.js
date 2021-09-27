import { useContext } from "react"
import { useHistory } from "react-router"
import { UserContext } from "../utility/UserContext"

export const Article = ({ content }) => {
	const { state, dispatch } = useContext(UserContext)
	const { title, byline } = content
	const history = useHistory()
	const pathway = title.toString().split(' ').join('-').replace(/['":.]+/g, '',)
	let image

	const handleClick = () => {
		history.push(`/article/${pathway}`)
		dispatch({ state, action: { type: 'SETARTICLE', value: content } })
	}

	const newsShape = (id) => {
		const url = content.images[0].url
		id = parseInt(id.toString().split('').pop())

		switch (id) {
			case 0: case 3: case 6: case 9:
				image = <img  className='image' src={url} alt='Article'/>

			return 'longways'
			case 1: case 4: case 7: case 8:
				
			return 'sideways'
			case 2: case 5:
			return 'square'
			default:
				break;
		}
	}



	return (
		<article className={`article ${newsShape(content.id)}`}>
			{image}
			<h2 className='title'> {title} </h2>
			<h3 className='byline'> {byline} </h3>
			<button className='read-button' onClick={() => handleClick()}>Read More</button>
		</article>
	)
}