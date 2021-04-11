export default function Overview({ color, cat_icon, cat_name }) {
  return (
    <div className={`${color} col-span-1 p-10`}>
      <img className="h-10" src={cat_icon} alt="icon" />
      <p className="text-sm pt-2">{cat_name}</p>
      <p className="text-2xl font-medium">342.545</p>
    </div>
  )
}