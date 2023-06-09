export default function Title({ children, className = "" }) {
	return (
		<>
			<h1
				className={`text-3xl font-bold text-neutral-900 fade-in-left-750 ${className}`}
			>
				{children}
			</h1>
		</>
	)
}
