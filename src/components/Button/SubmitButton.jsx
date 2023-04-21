export default function SubmitButton({ children }) {
	return (
		<button
			type="submit"
			alt={children}
			title={children}
			className="transition-all duration-500 ease-in-out bg-primary hover:bg-primary/90 text-neutral-100 py-2 px-4 border-neutral-100 rounded-md shadow shadow-primary"
		>
			{children}
		</button>
	)
}
