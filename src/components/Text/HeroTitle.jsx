export default function HeroTitle({ children, className = "" }) {
	return (
		<>
			<h1 className={`text-3xl font-bold text-neutral-100 ${className}`}>{children}</h1>
		</>
	)
}
