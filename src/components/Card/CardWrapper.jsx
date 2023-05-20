import { useRef, useEffect, useState } from "react"
import styles from "./CardWrapper.module.css"

export default function CardWrapper({ children }) {
	const cardRef = useRef(null)
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsIntersecting(true)
					observer.unobserve(entry.target)
				}
			})
		}, { root: null, threshold: 0.5 })

		observer.observe(cardRef.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div
			ref={cardRef}
			className={`flex flex-col rounded-md shadow border ${isIntersecting ? styles.cardFadeIn : "opacity-0"}`}
		>
			{children}
		</div>
	)
}
