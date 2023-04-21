export default function HeroParagraph({ children, className = "" }) {
	return (
		<>
			<p className={`text-base font-normal text-neutral-100 ${className}`}>
				{children}
			</p>
		</>
	)
}
