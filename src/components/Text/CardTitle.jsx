export default function CardTitle({ children, className = "" }) {
	return (
		<>
			<h3 className={`text-base font-semibold text-neutral-900 ${className}`}>
				{children}
			</h3>
		</>
	)
}
