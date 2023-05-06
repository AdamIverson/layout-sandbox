import React from 'react'
import Link from 'next/link'
import Card from './Card'

const HomePage = () => {
	return (
		<div>
			<Card topic="home" />
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
