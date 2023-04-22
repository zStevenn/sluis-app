import { InternalPrimaryButton } from "../Button"

export default function Footer({ children, handleDismiss }) {
	return (
		<div className="flex flex-row gap-4 items-center">
			{children && children}
			<InternalPrimaryButton onClick={handleDismiss}>
				Sluiten
			</InternalPrimaryButton>
		</div>
	)
}
