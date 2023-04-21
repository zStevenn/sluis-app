export default function Title({ children, className = "" }) {
	return (
		<>
			<h1
				className={`text-3xl md:text-4xl font-bold text-neutral-900 ${className}`}
			>
				{children}
			</h1>
		</>
	)
}
