import React from 'react'
import Link from 'next/link'
import Card from './Card'

const HomePage = () => {
	return (
		<div>
			<Card topic="home" />
			<div>
				<Link href="/About">About</Link>
			</div>
			<div>
				<Link href="https://adamiverson.github.io/">Resume</Link>
			</div>
			<div>
				<Link href="http://www.adamiversonphotography.com/">Photography</Link>
			</div>
			<div>
				<Link href="/Author">publications</Link>
			</div>
			<div>
			<Link href="/Developer">Developer Projects</Link>
			</div>
			{/* <div>
				<Link href="https://www.letshireadamiverson.com/">let's hire</Link>
			</div> */}
		</div>
	)
}

export default HomePage
