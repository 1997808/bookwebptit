export default function DataOverview({ color, cat_icon, cat_name, number }) {
  return (
    <div className={`${color} col-span-1 p-10`}>
      <img className="h-10" src={cat_icon} alt="icon" />
      <p className="text-sm pt-2">{cat_name}</p>
      <p className="text-2xl font-medium">{number}</p>
    </div>
  );
}
