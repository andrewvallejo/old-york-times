export const Article = ({ content }) => {
	const { title, byline, images, date } = content
	return (
		<article className='article'>
			<h4> {title} </h4>
			<h5> {byline} </h5>
			<button>Read More</button>
		</article>
	)
}