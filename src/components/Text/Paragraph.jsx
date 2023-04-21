export default function Paragraph({ children, className = "" }) {
	return (
		<>
			<p className={`text-base font-normal text-neutral-900 ${className}`}>{children}</p>
		</>
	)
}
