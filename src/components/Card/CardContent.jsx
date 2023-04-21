export default function CardContent({ children }) {
  return (
    <div className="flex flex-row justify-between gap-4 items-center px-4 py-6">
      {children}
    </div>
  )
}