import React from 'react'
import Link from 'next/link'

const HomePage = () => {
	return (
		<div>
			<div>
				<Link href="/About">About</Link>
			</div>
			<div>
				<Link href="/Resume">Resume</Link>
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
