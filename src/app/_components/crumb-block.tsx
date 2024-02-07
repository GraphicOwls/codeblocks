/** @format */

import { Key, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
	atomDark,
	gruvboxLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'
import { CopyCodeButton } from '@/components/copy-code-button'

type Fragment = {
	id: string
	name: string
	language: string
	codeString: string
}

export type Crumb = {
	fragments: Fragment[]
	id: Key
	name: string
	description?: string
	tags?: string[]
}

type Test = typeof CrumbBlock

export function CrumbBlock({ crumb }: { crumb: Crumb }) {
	const [language, setLanguage] = useState(crumb.fragments[0].language)
	const { theme } = useTheme()

	return (
		<>
			<Tabs
				defaultValue={crumb.fragments[0].name}
				className='w-[640px] m-0 rounded-xl overflow-hidden border-zinc-200 dark:border-zinc-800 border'
				onChange={() => {
					const selectedFragment = crumb.fragments.find(
						(fragment) => fragment.name === fragment.id,
					)
					if (selectedFragment) {
						setLanguage(selectedFragment.language)
					}
				}}
			>
				<TabsList className='p-2 py-2 pr-3 m-0 h-auto rounded-none bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-medium text-sm flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 bg-opacity-70'>
					<div className='flex justify-between items-center w-full'>
						<div>
							{crumb.fragments.map((fragment: Fragment) => (
								<TabsTrigger
									key={fragment.id}
									value={fragment.name}
									className='m-0 rounded-md border-t border-t-zinc-600/0 data-[state=active]:dark:border-t-zinc-600/70 text-zinc-500 dark:text-zinc-500 data-[state=active]:dark:bg-zinc-300/10 data-[state=active]:dark:text-zinc-300 data-[state=active]:dark:shadow-md'
									onClick={() => setLanguage(fragment.language)}
								>
									{fragment.name}
								</TabsTrigger>
							))}
						</div>
						<div>
							<Badge
								variant='secondary'
								className='border bg-amber-500/10 text-amber-600 border-amber-600/20 dark:bg-sky-600/10 dark:text-sky-600 dark:border-sky-600/30'
							>
								{language}
							</Badge>
						</div>
					</div>
				</TabsList>
				{crumb.fragments.map((fragment: Fragment) => (
					<TabsContent
						value={fragment.name}
						key={fragment.id}
						className='m-0 group'
					>
						<div className='relative'>
							<SyntaxHighlighter
								language={fragment.language}
								style={theme === 'light' ? gruvboxLight : atomDark}
								showLineNumbers={true}
								className='!p-4 !bg-zinc-100 dark:!bg-zinc-800/70 text-base leading-relaxed !m-0 !rounded-none'
							>
								{fragment.codeString.trim()}
							</SyntaxHighlighter>
							<CopyCodeButton
								copyString={fragment.codeString}
								className={
									'absolute top-2 right-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
								}
								copyName={fragment.name}
							/>
						</div>
					</TabsContent>
				))}
			</Tabs>
		</>
	)
}
