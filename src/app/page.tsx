/** @format */
'use client'

import { Snippets } from '../data/snippets'
import { ModeToggle } from '@/components/theme-toggle'
import { CrumbBlock } from './_components/crumb-block'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-start p-24'>
			<ModeToggle />
			<div className='grid grid-cols-1 gap-10 mt-8'>
				{Snippets.map((snippet) => (
					<div key={snippet.id}>
						<h2 className='text-xl font-medium text-zinc-300 mb-4'>
							{snippet.name}
						</h2>
						<CrumbBlock crumb={snippet} />
					</div>
				))}
			</div>
		</main>
	)
}
