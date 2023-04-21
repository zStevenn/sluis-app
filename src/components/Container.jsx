export default function Container({ children, className = "" }) {
	return (
		<div className={`container mx-auto lg:max-w-screen-lg ${className}`}>
			{children}
		</div>
	)
}
