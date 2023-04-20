export function ExternalPrimaryButton({ children, to }) {
	return (
		<a href={to} target="_blank" rel="noopener noreferrer">
			<button className="truncate bg-primary hover:bg-primary/30 text-neutral-100 font-bold py-2 px-4 border-2 border-neutral-100 rounded-lg">
				{children}
			</button>
		</a>
	)
}
