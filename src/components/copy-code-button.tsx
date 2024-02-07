/** @format */

import { useState } from 'react'
import { Clipboard, ClipboardCheck } from 'lucide-react'
import { Button } from './ui/button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

type CopyCodeButtonProps = {
	copyString: string
	className?: string
	copyName?: string
}

export const CopyCodeButton = ({
	copyString,
	className,
}: CopyCodeButtonProps) => {
	const [copyState, setCopyState] = useState(false)

	const handleCopy = () => {
		setCopyState(true)
		toast.success('Code has been copied to the clipboard!')
		setTimeout(() => {
			setCopyState(false)
		}, 2000)
	}

	return (
		<div className={className}>
			<CopyToClipboard text={copyString}>
				<Button
					variant={'default'}
					size={'icon'}
					className={cn(
						'dark:bg-zinc-700/30 text-zinc-400 flex items-center justify-center h-7 w-7 dark:hover:bg-zinc-700 shadow-md border dark:border-zinc-700/70',
						{ 'text-teal-600': copyState, '!text-teal-600': copyState },
					)}
					onClick={() => handleCopy()}
				>
					{copyState ? (
						<ClipboardCheck size={16} className='text-inherit' />
					) : (
						<Clipboard size={16} className='text-inherit' />
					)}
				</Button>
			</CopyToClipboard>
		</div>
	)
}
