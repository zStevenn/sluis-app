export default function CardTitle({ children, className = "" }) {
	return (
		<>
			<h3 className={`text-lg font-semibold text-neutral-900 ${className}`}>
				{children}
			</h3>
		</>
	)
}
