export default function TextInput({
	children,
	placeholder,
	value = "",
	onChange,
	className = "",
}) {
	return (
		<>
			<label htmlFor={children} className="sr-only">
				{children}
			</label>
			<input
				type="text"
				placeholder={placeholder}
				name={children}
				id={children}
				value={value}
				onChange={onChange}
				className={`block w-full text-neutral-600 px-4 py-2 rounded-md shadow border-neutral-600 ${className}`}
			/>
		</>
	)
}
