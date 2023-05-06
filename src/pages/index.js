import React from 'react'
import Link from 'next/link'
// import About from './About'

const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<div>
				<Link href="/test">Test</Link>
			</div>
			<div>
				<Link href="/About">About</Link>
			</div>
		</div>
	)
}

export default HomePage
