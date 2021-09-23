export const Article = ({ content }) => {
	const { title, byline, images, date } = content
	
	return (
		<article className='article'>
			<h4 className='title'> {title} </h4>
			<h5 className='byline'> {byline} </h5>
			<button className='read-button'>Read More</button>
		</article>
	)
}