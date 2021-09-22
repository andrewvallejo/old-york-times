import { Masthead } from "../components/Masthead"
import { NavigationBar } from "../components/NavigationBar"

export const PageHeader = () => {

	return (
		<section className='main-header'>
			<Masthead />
			<NavigationBar />
		</section>
	)
}