export default function Subtitle({ children, className = "" }) {
	return (
		<>
			<h2 className={`text-xl font-semibold text-neutral-900 ${className}`}>{children}</h2>
		</>
	)
}
