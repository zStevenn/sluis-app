export default function Container({ children }) {
	return (
		<div className="bg-neutral-100 p-8 rounded-md w-5/6 md:w-1/2 max-w-screen-md grid gap-4 border-b-2 border-primary">
			{children}
		</div>
	)
}
