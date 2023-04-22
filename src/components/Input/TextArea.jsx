export default function TextArea({ placeholder, onChange, value = "" }) {
	return (
		<textarea
			className="w-full h-24 px-4 py-2 text-gray-700 border rounded-lg"
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			id={value}
			name={value}
		></textarea>
	)
}
