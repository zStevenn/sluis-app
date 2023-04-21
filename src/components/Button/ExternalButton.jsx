export function ExternalPrimaryButton({ children, to }) {
	return (
		<a href={to} target="_blank" rel="noopener noreferrer" title={children}>
			<button className="truncate transition-all duration-500 ease-in-out bg-primary hover:bg-primary/50 text-neutral-100 font-bold py-2 px-4 border-2 border-neutral-100 rounded-lg shadow shadow-primary">
				{children}
			</button>
		</a>
	)
}

export function ExternalSecondaryButton({ children, to }) {
	return (
		<a href={to} target="_blank" rel="noopener noreferrer" title={children}>
			<button className="truncate transition-all duration-500 ease-in-out bg-secondary hover:bg-secondary/50 text-neutral-100 font-bold py-2 px-4 border-2 border-secondary rounded-lg shadow-secondary">
				{children}
			</button>
		</a>
	)
}
