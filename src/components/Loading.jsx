import { MdDownloading } from "react-icons/md"

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="animate-spin h-32 w-32">
				<MdDownloading className="text-9xl" />
			</div>
		</div>
	)
}
