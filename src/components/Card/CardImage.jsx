export default function CardImage({ src, alt }) {
	return (
		<img
			src={src}
			alt={alt}
			title={alt}
			className="rounded-md h-40 object-cover"
		/>
	)
}
