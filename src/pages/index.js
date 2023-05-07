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
				<Link href="https://www.mcsweeneys.net/articles/things-my-girlfriend-did-not-say-after-i-told-her-that-i-sometimes-feel-stuck">Author</Link>
			</div>
			{/* <div>
				<Link href="https://www.letshireadamiverson.com/">let's hire</Link>
			</div> */}
		</div>
	)
}

export default HomePage
