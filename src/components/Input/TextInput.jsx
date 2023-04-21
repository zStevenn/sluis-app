export default function TextInput({ children, className = "" }) {
	return (
		<>
			<label htmlFor={children} className="sr-only">
				{children}
			</label>
			<input
				type="text"
				placeholder={children}
				name={children}
				id={children}
				className={`text-neutral-600 px-4 py-2 rounded-md shadow border-neutral-600 ${className}`}
			/>
		</>
	)
}
