export const Article = ({ content }) => {
	const { title, byline } = content
	
	return (
		<article className='article'>
			<h2 className='title'> {title} </h2>
			<h3 className='byline'> {byline} </h3>
			<button className='read-button'>Read More</button>
		</article>
	)
}