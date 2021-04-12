export default function BookSmall({ id, photo, name }) {
  return (
    <div className="grid grid-cols-3 gap-8 pt-8">
      <img src={`${process.env.PUBLIC_URL}${photo}`} alt="icon" className="col-span-1 h-16 w-full object-contain" />
      <div className="flex items-center col-span-2 w-full">
        <p className="truncate-2-lines text-sm text-gray-600">{name}</p>
      </div>
    </div>
  )
}