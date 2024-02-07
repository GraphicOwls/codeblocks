/** @format */

// <Tabs defaultValue='account' className='w-[640px]'>
// 	<TabsList>
// 		<TabsTrigger value='account'>Code Snippets</TabsTrigger>
// 		<TabsTrigger value='password'>Documentation</TabsTrigger>
// 	</TabsList>
// 	<TabsContent value='account'>
// 		<div className=' space-y-2'>
// 			{Crumbs.map(
// 				(crumb: {
// 					id: Key | null | undefined
// 					fragment: Array<string>
// 					code: string
// 					language: string
// 					name: string
// 				}) => (
// 					<div key={crumb.id} className='rounded-xl overflow-hidden'>
// 						<div className='py-3 px-4 bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-medium text-sm flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 bg-opacity-70'>
// 							{crumb.name}
// 							<Badge
// 								variant='secondary'
// 								className='border bg-white dark:bg-zinc-700'
// 							>
// 								{crumb.language}
// 							</Badge>
// 						</div>
// 						<SyntaxHighlighter
// 							language={crumb.language}
// 							style={theme === 'light' ? githubGist : atomOneDark}
// 							showLineNumbers={true}
// 							className='!p-4 !bg-zinc-100 dark:!bg-zinc-800/70'
// 						>
// 							{crumb.code}
// 						</SyntaxHighlighter>
// 					</div>
// 				),
// 			)}
// 		</div>
// 	</TabsContent>
// 	<TabsContent value='password'>
// 		<p>
// 			Below is a list of languages. Copy the script for language you wish to use
// 			and place it underneath the Date Picker script (above the Date Picker
// 			function). Next, copy the abbreviated &quot;value&quot; from the second
// 			column and use that as the value for the language option in the Date
// 			Picker function.
// 		</p>
// 	</TabsContent>
// </Tabs>
