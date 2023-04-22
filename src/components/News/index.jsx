import { Paragraph } from "../Text"

export function NewsItem({ title, date, content }) {
	return (
		<div className="px-4 py-2 shadow-md rounded-md">
			<h3 className="text-lg font-semibold pb-2">{title}</h3>
			<p className="pb-2 text-neutral-500">{date}</p>
			<Paragraph>{content}</Paragraph>
		</div>
	)
}
