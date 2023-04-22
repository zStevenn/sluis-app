export default function Backdrop({ children, handleDismiss }) {
	return (
		<div
			onClick={handleDismiss}
			className="w-screen h-screen absolute bg-neutral-900/30 grid place-items-center"
		>
			{children}
		</div>
	)
}
